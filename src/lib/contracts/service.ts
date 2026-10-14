import { createHash, randomBytes } from "node:crypto";
import { isDeepStrictEqual } from "node:util";
import type { Transaction } from "firebase-admin/firestore";
import { z } from "zod";
import { db } from "./firebase";
import { HttpError } from "./http";
import {
  clientSchema,
  providerSchema,
  renderContract,
  signatureSchema,
  templateSchema,
  termsSchema,
  type Contract,
  type Template,
} from "./model";

const now = () => new Date().toISOString();
export const digest = (text: string) =>
  createHash("sha256").update(text).digest("hex");
const contractRef = (id: string) =>
  db()
    .collection("contracts")
    .doc(
      z
        .string()
        .regex(/^[A-Za-z0-9]{1,100}$/)
        .parse(id),
    );
function event(
  tx: Transaction,
  contractId: string,
  action: string,
  actor: string,
) {
  tx.create(db().collection("contractEvents").doc(), {
    contractId,
    action,
    actor,
    at: now(),
  });
}
function fromDoc(
  id: string,
  data: FirebaseFirestore.DocumentData | undefined,
): Contract {
  if (!data) throw new HttpError(404, "Contractul nu există.");
  const decoded: Record<string, unknown> = { ...data, id };
  for (const key of ["providerSignature", "clientSignature"] as const) {
    // Firestore does not support arrays directly nested inside other arrays.
    if (data[key])
      decoded[key] = data[key].map(
        (stroke: { points: unknown[] }) => stroke.points,
      );
  }
  return decoded as Contract;
}
const storeSignature = (s: z.infer<typeof signatureSchema>) =>
  s.map((points) => ({ points }));
export async function getSettings() {
  return (
    (await db().collection("contractSettings").doc("provider").get()).data() ||
    null
  );
}
export async function saveSettings(input: unknown) {
  const provider = providerSchema.parse(input);
  await db().collection("contractSettings").doc("provider").set(provider);
  return provider;
}
export async function listTemplates() {
  return (
    await db()
      .collection("contractTemplates")
      .orderBy("updatedAt", "desc")
      .get()
  ).docs.map((d) => ({ ...d.data(), id: d.id }) as Template);
}
export async function saveTemplate(input: unknown, id?: string) {
  const value = templateSchema.parse(input);
  const ref = id
    ? db()
        .collection("contractTemplates")
        .doc(
          z
            .string()
            .regex(/^[A-Za-z0-9]{1,100}$/)
            .parse(id),
        )
    : db().collection("contractTemplates").doc();
  return db().runTransaction(async (tx) => {
    const previous = await tx.get(ref);
    if (id && !previous.exists) throw new HttpError(404, "Șablonul nu există.");
    const data = {
      ...value,
      version: (previous.data()?.version || 0) + 1,
      updatedAt: now(),
    };
    tx.set(ref, data);
    return { ...data, id: ref.id };
  });
}
const draftSchema = z
  .object({
    templateId: z.string().regex(/^[A-Za-z0-9]{1,100}$/),
    terms: termsSchema,
  })
  .strict();
export async function saveDraft(input: unknown, uid: string, id?: string) {
  const { templateId, terms } = draftSchema.parse(input);
  const ref = id ? contractRef(id) : db().collection("contracts").doc();
  return db().runTransaction(async (tx) => {
    const [settings, template, previous] = await Promise.all([
      tx.get(db().collection("contractSettings").doc("provider")),
      tx.get(db().collection("contractTemplates").doc(templateId)),
      tx.get(ref),
    ]);
    if (id && !previous.exists)
      throw new HttpError(404, "Contractul nu există.");
    if (previous.exists && previous.data()?.status !== "draft")
      throw new HttpError(409, "Doar ciornele pot fi modificate.");
    if (!template.exists) throw new HttpError(400, "Alege un șablon existent.");
    const t = template.data()!;
    const provider = providerSchema.parse(settings.data());
    const data: Omit<Contract, "id"> = {
      status: "draft",
      terms,
      provider,
      template: {
        id: templateId,
        name: t.name,
        version: t.version,
        body: t.body,
      },
      createdAt: previous.data()?.createdAt || now(),
      updatedAt: now(),
      createdBy: previous.data()?.createdBy || uid,
    };
    tx.set(ref, data);
    event(tx, ref.id, id ? "draft.updated" : "draft.created", uid);
    return { ...data, id: ref.id };
  });
}
export async function getContract(id: string) {
  const d = await contractRef(id).get();
  return fromDoc(d.id, d.data());
}
export async function listContracts() {
  return (
    await db().collection("contracts").orderBy("createdAt", "desc").get()
  ).docs.map((d) => fromDoc(d.id, d.data()));
}
export async function issueLink(id: string, input: unknown, uid: string) {
  const { signature } = z
    .object({ signature: signatureSchema.optional() })
    .strict()
    .parse(input);
  const token = randomBytes(32).toString("base64url");
  const hash = digest(token);
  const ref = contractRef(id);
  await db().runTransaction(async (tx) => {
    const snap = await tx.get(ref);
    const c = fromDoc(id, snap.data());
    if (c.status !== "draft" && c.status !== "sent")
      throw new HttpError(409, "Contractul nu mai poate fi trimis.");
    if (c.status === "draft" && !signature)
      throw new HttpError(400, "Semnează contractul înainte de trimitere.");
    if (
      c.status === "sent" &&
      signature &&
      !isDeepStrictEqual(c.providerSignature, signature)
    )
      throw new HttpError(409, "Semnătura prestatorului este deja blocată.");
    const at = now();
    const expiresAt = new Date(Date.now() + 30 * 86400000).toISOString();
    if (c.linkHash) tx.delete(db().collection("contractLinks").doc(c.linkHash));
    tx.create(db().collection("contractLinks").doc(hash), { contractId: id });
    tx.update(ref, {
      status: "sent",
      providerSignature: storeSignature(c.providerSignature || signature!),
      linkHash: hash,
      sentAt: at,
      expiresAt,
      updatedAt: at,
    });
    event(tx, id, c.status === "draft" ? "contract.sent" : "link.rotated", uid);
  });
  return { token };
}
export async function cancelContract(id: string, uid: string) {
  const ref = contractRef(id);
  await db().runTransaction(async (tx) => {
    const c = fromDoc(id, (await tx.get(ref)).data());
    if (c.status === "signed")
      throw new HttpError(409, "Contractele semnate nu pot fi modificate.");
    if (c.status === "cancelled") return;
    if (c.linkHash) tx.delete(db().collection("contractLinks").doc(c.linkHash));
    tx.update(ref, { status: "cancelled", updatedAt: now() });
    event(tx, id, "contract.cancelled", uid);
  });
}
function tokenHash(token: string) {
  if (!/^[A-Za-z0-9_-]{43}$/.test(token))
    throw new HttpError(404, "Link invalid sau revocat.");
  return digest(token);
}
function checkPublic(c: Contract, hash: string) {
  if (c.linkHash !== hash || !["sent", "signed"].includes(c.status))
    throw new HttpError(404, "Link invalid sau revocat.");
  if (c.status !== "signed" && (!c.expiresAt || c.expiresAt <= now()))
    throw new HttpError(
      410,
      "Linkul a expirat. Cere un link nou prestatorului.",
    );
}
export async function publicContract(token: string) {
  const hash = tokenHash(token);
  // Transaction prevents a concurrent rotation/cancellation returning a stale active link.
  return db().runTransaction(async (tx) => {
    const mapping = (
      await tx.get(db().collection("contractLinks").doc(hash))
    ).data();
    if (!mapping) throw new HttpError(404, "Link invalid sau revocat.");
    const c = fromDoc(
      mapping.contractId,
      (await tx.get(contractRef(mapping.contractId))).data(),
    );
    checkPublic(c, hash);
    const { createdBy, linkHash: _, ...safe } = c;
    void createdBy;
    return safe;
  });
}
export const previewSchema = z.object({ client: clientSchema }).strict();
export const signSchema = z
  .object({
    client: clientSchema,
    signature: signatureSchema,
    accepted: z.literal(true),
    previewHash: z.string().regex(/^[a-f0-9]{64}$/),
  })
  .strict();
function finalText(
  c: Pick<Contract, "template" | "provider" | "terms">,
  client: z.infer<typeof clientSchema>,
) {
  const text = renderContract(c.template.body, c.provider, c.terms, client);
  if (Buffer.byteLength(text, "utf8") > 250_000)
    throw new HttpError(
      400,
      "Contractul complet este prea mare. Cere prestatorului să scurteze șablonul.",
    );
  return text;
}
export async function previewContract(token: string, input: unknown) {
  const { client } = previewSchema.parse(input);
  const c = await publicContract(token);
  if (c.status !== "sent")
    throw new HttpError(409, "Contractul este deja semnat.");
  const text = finalText(c, client);
  return { text, hash: digest(text) };
}
export async function signContract(token: string, input: unknown) {
  const value = signSchema.parse(input);
  const hash = tokenHash(token);
  return db().runTransaction(async (tx) => {
    const mapping = (
      await tx.get(db().collection("contractLinks").doc(hash))
    ).data();
    if (!mapping) throw new HttpError(404, "Link invalid sau revocat.");
    const ref = contractRef(mapping.contractId);
    const c = fromDoc(ref.id, (await tx.get(ref)).data());
    checkPublic(c, hash);
    const text = finalText(c, value.client);
    const contentHash = digest(text);
    if (contentHash !== value.previewHash)
      throw new HttpError(
        409,
        "Datele s-au schimbat. Verifică din nou previzualizarea.",
      );
    // Retrying the exact request after a lost response is safe. Other payloads cannot replace a signed document.
    if (c.status === "signed") {
      if (
        c.contentHash !== contentHash ||
        !isDeepStrictEqual(c.client, value.client) ||
        !isDeepStrictEqual(c.clientSignature, value.signature)
      )
        throw new HttpError(
          409,
          "Contractul este deja semnat și nu poate fi modificat.",
        );
      return { signedAt: c.signedAt, contentHash: c.contentHash };
    }
    const at = now();
    tx.update(ref, {
      client: value.client,
      clientSignature: storeSignature(value.signature),
      finalText: text,
      contentHash,
      signedAt: at,
      updatedAt: at,
      status: "signed",
      acceptance: {
        accepted: true,
        statement:
          "Am citit contractul și sunt de acord cu conținutul acestuia.",
        at,
      },
    });
    event(tx, c.id, "contract.signed", "client-link");
    return { signedAt: at, contentHash };
  });
}
