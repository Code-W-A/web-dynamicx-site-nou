// Requires running auth/Firestore emulators. Never runs against a real project.
process.env.CONTRACTS_FIREBASE_PROJECT_ID = "demo-contracte";
process.env.FIRESTORE_EMULATOR_HOST = "127.0.0.1:8088";
process.env.FIREBASE_AUTH_EMULATOR_HOST = "127.0.0.1:9098";
process.env.CONTRACTS_FIREBASE_API_KEY = "demo-key";
require("./register-ts.cjs");
const { test, after } = require("node:test");
const assert = require("node:assert/strict");
const { deleteApp } = require("firebase-admin/app");
const { NextRequest } = require("next/server");
const {
  db,
  auth,
  firebaseApp,
} = require("../../src/lib/contracts/firebase.ts");
const service = require("../../src/lib/contracts/service.ts");
const {
  contractsCsv,
  signatureSchema,
  templateSchema,
} = require("../../src/lib/contracts/model.ts");
const route = require("../../src/app/api/contracte/[...path]/route.ts");
const provider = {
  name: "Prestator TEST",
  taxId: "TEST123",
  address: "Adresă de test",
  representative: "Reprezentant Test",
  email: "provider@example.test",
};
const terms = {
  number: "TEST-1",
  date: "2026-10-14",
  service: "Servicii exclusiv pentru test",
  price: "100 lei",
  duration: "30 zile",
};
const client = {
  type: "company",
  name: "Client TEST",
  address: "Adresă client",
  email: "client@example.test",
  phone: "0700000000",
  taxId: "TEST456",
  representative: "Client Test",
};
const signature = [
  [
    { x: 0.1, y: 0.2 },
    { x: 0.3, y: 0.4 },
    { x: 0.6, y: 0.2 },
  ],
];
async function request(
  path,
  data,
  cookie = "",
  origin = "http://localhost:3100",
  method = data === undefined ? "GET" : "POST",
) {
  const req = new NextRequest(`http://localhost:3100/api/contracte/${path}`, {
    method,
    headers: {
      origin,
      cookie,
      ...(data === undefined ? {} : { "content-type": "application/json" }),
    },
    ...(data === undefined ? {} : { body: JSON.stringify(data) }),
  });
  return route[method](req, {
    params: Promise.resolve({ path: path.split("/") }),
  });
}
after(async () => {
  await deleteApp(firebaseApp());
});
test("Firebase Emulator: contract lifecycle, authorization and immutable evidence", async (t) => {
  let template, draft, token, signed, cookie;
  await t.test(
    "rejects anonymous admin requests and cross-origin mutations",
    async () => {
      assert.equal((await request("contracts")).status, 401);
      assert.equal(
        (await request("settings", provider, "", "https://evil.example"))
          .status,
        403,
      );
      assert.equal((await request("session", { idToken: "bad" })).status, 401);
    },
  );
  await t.test(
    "rejects empty signatures, unknown fields and missing company fields",
    async () => {
      assert.equal(signatureSchema.safeParse([]).success, false);
      assert.equal(
        signatureSchema.safeParse([
          [
            { x: 0.2, y: 0.2 },
            { x: 0.2, y: 0.2 },
          ],
        ]).success,
        false,
      );
      assert.equal(
        templateSchema.safeParse({ name: "Test", body: "{{notAllowed}}" })
          .success,
        false,
      );
      await assert.rejects(
        service.previewContract("x".repeat(43), {
          client: { ...client, taxId: "" },
        }),
      );
    },
  );
  await t.test(
    "denies registered users until their UID is authorized; creates secure session",
    async () => {
      const user = await auth().createUser({
        email: `admin-${Date.now()}@example.test`,
        password: "LocalTestOnly123!",
      });
      const signIn = await fetch(
        "http://127.0.0.1:9098/identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=demo-key",
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            email: user.email,
            password: "LocalTestOnly123!",
            returnSecureToken: true,
          }),
        },
      );
      const { idToken } = await signIn.json();
      assert.ok(idToken);
      assert.equal((await request("session", { idToken })).status, 403);
      await db()
        .collection("contractAdmins")
        .doc(user.uid)
        .set({ active: true });
      const response = await request("session", { idToken });
      assert.equal(response.status, 200);
      const setCookie = response.headers.get("set-cookie");
      assert.match(setCookie, /HttpOnly/i);
      assert.match(setCookie, /SameSite=strict/i);
      cookie = setCookie.split(";")[0];
      assert.equal((await request("contracts", undefined, cookie)).status, 200);
      await db()
        .collection("contractAdmins")
        .doc(user.uid)
        .update({ active: false });
      assert.equal((await request("contracts", undefined, cookie)).status, 403);
      await db()
        .collection("contractAdmins")
        .doc(user.uid)
        .update({ active: true });
    },
  );
  await t.test(
    "saves provider, versions a template, creates and edits a draft",
    async () => {
      assert.equal((await request("settings", provider, cookie)).status, 200);
      template = await service.saveTemplate({
        name: "Șablon TEST",
        body: "EXCLUSIV TEST\nContract {{number}}: {{provider.name}} și {{client.name}}\n{{service}} / {{price}} / {{duration}}\n{{client.email}}\n{{client.taxId}}",
      });
      draft = await service.saveDraft(
        { templateId: template.id, terms },
        "test-admin",
      );
      assert.equal(draft.status, "draft");
      draft = await service.saveDraft(
        { templateId: template.id, terms: { ...terms, number: "TEST-EDIT" } },
        "test-admin",
        draft.id,
      );
      assert.equal(draft.terms.number, "TEST-EDIT");
    },
  );
  await t.test(
    "sends provider signature and rotates the link atomically",
    async () => {
      const original = (
        await service.issueLink(draft.id, { signature }, "test-admin")
      ).token;
      token = (await service.issueLink(draft.id, {}, "test-admin")).token;
      assert.notEqual(token, original);
      await assert.rejects(
        service.publicContract(original),
        (e) => e.status === 404,
      );
      const result = await service.publicContract(token);
      assert.deepEqual(result.providerSignature, signature);
      assert.equal(result.linkHash, undefined);
      assert.equal(result.createdBy, undefined);
      await assert.rejects(
        service.saveDraft(
          { templateId: template.id, terms },
          "test-admin",
          draft.id,
        ),
        (e) => e.status === 409,
      );
    },
  );
  await t.test(
    "changing the template and provider does not alter the sent snapshot",
    async () => {
      await service.saveTemplate(
        { name: "Modificat", body: "TEXT SCHIMBAT" },
        template.id,
      );
      await service.saveSettings({ ...provider, name: "Prestator modificat" });
      const snapshot = await service.publicContract(token);
      assert.equal(snapshot.template.version, 1);
      assert.equal(snapshot.provider.name, provider.name);
    },
  );
  await t.test(
    "validates preview, acceptance and signature before signing",
    async () => {
      const preview = await service.previewContract(token, { client });
      assert.match(preview.text, /Client TEST/);
      assert.equal(
        (
          await request(`public/${token}/sign`, {
            client,
            signature,
            accepted: false,
            previewHash: preview.hash,
          })
        ).status,
        400,
      );
      assert.equal(
        (
          await request(`public/${token}/sign`, {
            client,
            signature: [],
            accepted: true,
            previewHash: preview.hash,
          })
        ).status,
        400,
      );
      assert.equal(
        (
          await request(`public/${token}/sign`, {
            client,
            signature,
            accepted: true,
            previewHash: "0".repeat(64),
          })
        ).status,
        409,
      );
      const payload = {
        client,
        signature,
        accepted: true,
        previewHash: preview.hash,
      };
      const [a, b] = await Promise.all([
        service.signContract(token, payload),
        service.signContract(token, payload),
      ]);
      assert.deepEqual(a, b);
      signed = await service.getContract(draft.id);
      assert.equal(signed.status, "signed");
      assert.equal(signed.finalText, preview.text);
      assert.equal(signed.contentHash, preview.hash);
      assert.deepEqual(signed.clientSignature, signature);
      const events = await db()
        .collection("contractEvents")
        .where("contractId", "==", draft.id)
        .get();
      assert.equal(
        events.docs.filter((d) => d.data().action === "contract.signed").length,
        1,
      );
      assert.deepEqual(await service.signContract(token, payload), a);
      await assert.rejects(
        service.signContract(token, {
          ...payload,
          client: { ...client, phone: "0711111111" },
        }),
        (e) => e.status === 409,
      );
    },
  );
  await t.test(
    "signed contracts reject cancellation and resending",
    async () => {
      await assert.rejects(
        service.cancelContract(draft.id, "test-admin"),
        (e) => e.status === 409,
      );
      await assert.rejects(
        service.issueLink(draft.id, {}, "test-admin"),
        (e) => e.status === 409,
      );
    },
  );
  await t.test("expired, invalid and cancelled links cannot sign", async () => {
    const c = await service.saveDraft(
      { templateId: template.id, terms },
      "test-admin",
    );
    const first = (await service.issueLink(c.id, { signature }, "test-admin"))
      .token;
    await db()
      .collection("contracts")
      .doc(c.id)
      .update({ expiresAt: "2020-01-01T00:00:00.000Z" });
    await assert.rejects(
      service.publicContract(first),
      (e) => e.status === 410,
    );
    await assert.rejects(
      service.previewContract(first, { client }),
      (e) => e.status === 410,
    );
    const second = (await service.issueLink(c.id, {}, "test-admin")).token;
    await service.cancelContract(c.id, "test-admin");
    await service.cancelContract(c.id, "test-admin");
    await assert.rejects(
      service.publicContract(second),
      (e) => e.status === 404,
    );
    await assert.rejects(
      service.publicContract("invalid"),
      (e) => e.status === 404,
    );
  });
  await t.test(
    "supports individual clients without company identifiers",
    async () => {
      const c = await service.saveDraft(
        { templateId: template.id, terms },
        "test-admin",
      );
      const link = (await service.issueLink(c.id, { signature }, "test-admin"))
        .token;
      const person = {
        ...client,
        type: "person",
        taxId: "",
        representative: "",
      };
      const preview = await service.previewContract(link, { client: person });
      await service.signContract(link, {
        client: person,
        signature,
        accepted: true,
        previewHash: preview.hash,
      });
      assert.equal((await service.getContract(c.id)).client.type, "person");
    },
  );
  await t.test(
    "CSV is Excel-compatible and prevents formula injection; JSON preserves evidence",
    async () => {
      const csv = contractsCsv([
        { ...signed, terms: { ...signed.terms, number: "=SUM(1,2)" } },
      ]);
      assert.ok(csv.startsWith("\uFEFF"));
      assert.match(csv, /'\=SUM/);
      assert.match(csv, /Client TEST/);
      const exported = await request(
        `contracts/${signed.id}/export`,
        undefined,
        cookie,
      );
      assert.equal(exported.status, 200);
      const result = await exported.json();
      assert.equal(result.contract.linkHash, undefined);
      assert.equal(result.contract.acceptance.accepted, true);
      assert.deepEqual(result.contract.providerSignature, signature);
      assert.ok(
        (await request("contracts/export", undefined, cookie)).headers
          .get("content-type")
          .startsWith("text/csv"),
      );
    },
  );
  await t.test(
    "Firestore rules deny direct client reads and writes",
    async () => {
      const url =
        "http://127.0.0.1:8088/v1/projects/demo-contracte/databases/(default)/documents/contracts/" +
        signed.id;
      assert.equal((await fetch(url)).status, 403);
      assert.equal(
        (
          await fetch(url, {
            method: "PATCH",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
              fields: { status: { stringValue: "draft" } },
            }),
          })
        ).status,
        403,
      );
    },
  );
  await t.test("logout expires the cookie", async () => {
    const response = await request(
      "session",
      undefined,
      cookie,
      "http://localhost:3100",
      "DELETE",
    );
    assert.match(response.headers.get("set-cookie"), /Max-Age=0/);
  });
});
