import { z } from "zod";

const text = (max = 500) =>
  z.string().trim().min(1, "Completează câmpurile obligatorii.").max(max);
export const providerSchema = z
  .object({
    name: text(),
    taxId: text(100),
    address: text(1000),
    representative: text(),
    email: z.string().trim().email().max(320),
  })
  .strict();
export type Provider = z.infer<typeof providerSchema>;
export const clientSchema = z
  .object({
    type: z.enum(["company", "person"]),
    name: text(),
    address: text(1000),
    email: z.string().trim().email().max(320),
    phone: text(40),
    taxId: z.string().trim().max(100),
    representative: z.string().trim().max(500),
  })
  .strict()
  .superRefine((v, ctx) => {
    if (v.type === "company" && (!v.taxId || !v.representative))
      ctx.addIssue({
        code: "custom",
        message: "Completează CUI și reprezentantul firmei.",
      });
  });
export type Client = z.infer<typeof clientSchema>;
const point = z
  .object({
    x: z.number().finite().min(0).max(1),
    y: z.number().finite().min(0).max(1),
  })
  .strict();
export const signatureSchema = z
  .array(z.array(point).min(2).max(1000))
  .min(1)
  .max(100)
  .refine(
    (s) => s.reduce((n, stroke) => n + stroke.length, 0) <= 2000,
    "Semnătura este prea mare.",
  )
  .refine(
    (s) =>
      s.some((stroke) =>
        stroke.some(
          (p) => Math.hypot(p.x - stroke[0].x, p.y - stroke[0].y) > 0.015,
        ),
      ),
    "Desenează semnătura.",
  );
export type Signature = z.infer<typeof signatureSchema>;
export const termsSchema = z
  .object({
    number: text(100),
    date: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/)
      .refine((value) => {
        const date = new Date(`${value}T00:00:00.000Z`);
        return (
          Number.isFinite(date.getTime()) &&
          date.toISOString().slice(0, 10) === value
        );
      }, "Data contractului nu este validă."),
    service: text(8000),
    price: text(500),
    duration: text(1000),
  })
  .strict();
export type Terms = z.infer<typeof termsSchema>;
export const fields = [
  "provider.name",
  "provider.taxId",
  "provider.address",
  "provider.representative",
  "provider.email",
  "client.name",
  "client.taxId",
  "client.address",
  "client.representative",
  "client.email",
  "client.phone",
  "number",
  "date",
  "service",
  "price",
  "duration",
] as const;
export function unknownFields(body: string) {
  return [...body.matchAll(/\{\{([^{}]+)\}\}/g)]
    .map((m) => m[1].trim())
    .filter((k) => !(fields as readonly string[]).includes(k));
}
export const templateSchema = z
  .object({
    name: text(200),
    body: text(40000).refine(
      (v) => unknownFields(v).length === 0,
      "Șablonul conține câmpuri necunoscute.",
    ),
  })
  .strict();
export type Template = z.infer<typeof templateSchema> & {
  id: string;
  version: number;
  updatedAt: string;
};
export function renderContract(
  body: string,
  provider: Partial<Provider>,
  terms: Partial<Terms>,
  client?: Partial<Client>,
) {
  const values: Record<string, string | undefined> = { ...terms };
  for (const [k, v] of Object.entries(provider)) values[`provider.${k}`] = v;
  for (const [k, v] of Object.entries(client || {})) values[`client.${k}`] = v;
  return body.replace(
    /\{\{([^{}]+)\}\}/g,
    (_, key: string) => values[key.trim()] ?? `⟦${key.trim()}⟧`,
  );
}
export type Contract = {
  id: string;
  status: "draft" | "sent" | "signed" | "cancelled";
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  template: { id: string; name: string; version: number; body: string };
  provider: Provider;
  terms: Terms;
  providerSignature?: Signature;
  client?: Client;
  clientSignature?: Signature;
  finalText?: string;
  contentHash?: string;
  acceptance?: { accepted: true; statement: string; at: string };
  sentAt?: string;
  signedAt?: string;
  expiresAt?: string;
  linkHash?: string;
};
export const statuses = {
  draft: "Ciornă",
  sent: "Trimis",
  signed: "Semnat",
  cancelled: "Anulat",
};
export function csvCell(value: unknown) {
  let s = String(value ?? "");
  if (/^[\s]*[=+@-]/.test(s)) s = "'" + s;
  return '"' + s.replaceAll('"', '""') + '"';
}
export function contractsCsv(contracts: Contract[]) {
  const rows: unknown[][] = [
    [
      "ID",
      "Număr",
      "Stare",
      "Dată",
      "Client",
      "Tip",
      "CUI",
      "Reprezentant",
      "Adresă",
      "Email",
      "Telefon",
      "Servicii",
      "Preț",
      "Durată",
      "Semnat la",
      "Amprentă",
    ],
  ];
  for (const c of contracts)
    rows.push([
      c.id,
      c.terms.number,
      statuses[c.status],
      c.terms.date,
      c.client?.name,
      c.client?.type,
      c.client?.taxId,
      c.client?.representative,
      c.client?.address,
      c.client?.email,
      c.client?.phone,
      c.terms.service,
      c.terms.price,
      c.terms.duration,
      c.signedAt,
      c.contentHash,
    ]);
  return "\uFEFF" + rows.map((row) => row.map(csvCell).join(";")).join("\r\n");
}
