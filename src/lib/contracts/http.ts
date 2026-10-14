import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";
import { auth, db } from "./firebase";

export class HttpError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message);
  }
}
export const SESSION_COOKIE = "contracts_session";
export const SESSION_AGE = 5 * 24 * 60 * 60;
export async function requireAdmin(request: NextRequest) {
  const session = request.cookies.get(SESSION_COOKIE)?.value;
  if (!session) throw new HttpError(401, "Autentifică-te pentru a continua.");
  let uid: string;
  try {
    uid = (await auth().verifySessionCookie(session, true)).uid;
  } catch {
    throw new HttpError(401, "Sesiunea a expirat. Autentifică-te din nou.");
  }
  if (!(await db().collection("contractAdmins").doc(uid).get()).data()?.active)
    throw new HttpError(403, "Contul nu are acces la contracte.");
  return uid;
}
export function sameOrigin(request: NextRequest) {
  if (request.headers.get("origin") !== request.nextUrl.origin)
    throw new HttpError(403, "Cerere nepermisă.");
}
export async function body(request: NextRequest) {
  const max = 200_000;
  if (Number(request.headers.get("content-length")) > max)
    throw new HttpError(413, "Datele trimise sunt prea mari.");
  const reader = request.body?.getReader();
  if (!reader) throw new HttpError(400, "Lipsește conținutul cererii.");
  let size = 0;
  const chunks: Uint8Array[] = [];
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    size += value.length;
    if (size > max) {
      await reader.cancel();
      throw new HttpError(413, "Datele trimise sunt prea mari.");
    }
    chunks.push(value);
  }
  try {
    return JSON.parse(Buffer.concat(chunks).toString("utf8"));
  } catch {
    throw new HttpError(400, "Conținut invalid.");
  }
}
export function json(value: unknown, status = 200) {
  return NextResponse.json(value, {
    status,
    headers: {
      "Cache-Control": "private, no-store",
      "X-Robots-Tag": "noindex, nofollow",
      "Referrer-Policy": "no-referrer",
    },
  });
}
export function failure(error: unknown) {
  if (error instanceof HttpError)
    return json({ error: error.message }, error.status);
  if (error instanceof ZodError)
    return json(
      { error: error.issues[0]?.message || "Verifică datele introduse." },
      400,
    );
  // Never log payloads, bearer links, signatures or credentials.
  console.error(
    "[contracts] operation failed",
    error instanceof Error ? error.name : "UnknownError",
  );
  return json(
    {
      error:
        "Operația nu a reușit. Datele din formular au fost păstrate. Încearcă din nou.",
    },
    503,
  );
}
