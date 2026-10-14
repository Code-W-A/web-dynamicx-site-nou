import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { auth, db } from "@/lib/contracts/firebase";
import {
  body,
  failure,
  HttpError,
  json,
  requireAdmin,
  sameOrigin,
  SESSION_AGE,
  SESSION_COOKIE,
} from "@/lib/contracts/http";
import * as service from "@/lib/contracts/service";
import { contractsCsv } from "@/lib/contracts/model";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
type Context = { params: Promise<{ path: string[] }> };
async function handle(request: NextRequest, context: Context) {
  try {
    const { path } = await context.params;
    const [area, id, action] = path;
    const get = request.method === "GET";
    if (
      request.method === "DELETE" &&
      !(area === "session" && path.length === 1)
    )
      throw new HttpError(405, "Metodă nepermisă.");
    if (!get) sameOrigin(request);
    if (area === "config" && path.length === 1 && get) {
      const projectId = process.env.CONTRACTS_FIREBASE_PROJECT_ID;
      const apiKey = process.env.CONTRACTS_FIREBASE_API_KEY;
      if (!projectId || !apiKey)
        throw new HttpError(
          503,
          "Conectarea Firebase nu este configurată încă.",
        );
      return json({
        projectId,
        apiKey,
        authDomain: `${projectId}.firebaseapp.com`,
        emulator:
          process.env.NODE_ENV !== "production"
            ? process.env.FIREBASE_AUTH_EMULATOR_HOST || null
            : null,
      });
    }
    if (area === "session" && path.length === 1) {
      if (get) return json({ uid: await requireAdmin(request) });
      if (request.method === "DELETE") {
        const response = json({ ok: true });
        response.cookies.set(SESSION_COOKIE, "", {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "strict",
          path: "/",
          maxAge: 0,
        });
        return response;
      }
      const { idToken } = z
        .object({ idToken: z.string().min(1).max(10000) })
        .strict()
        .parse(await body(request));
      let decoded;
      try {
        decoded = await auth().verifyIdToken(idToken, true);
      } catch {
        throw new HttpError(401, "Autentificarea nu a reușit.");
      }
      if (Date.now() / 1000 - decoded.auth_time > 300)
        throw new HttpError(401, "Autentifică-te din nou.");
      if (
        !(await db().collection("contractAdmins").doc(decoded.uid).get()).data()
          ?.active
      )
        throw new HttpError(403, "Contul nu are acces la contracte.");
      const session = await auth().createSessionCookie(idToken, {
        expiresIn: SESSION_AGE * 1000,
      });
      const response = json({ uid: decoded.uid });
      response.cookies.set(SESSION_COOKIE, session, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
        maxAge: SESSION_AGE,
      });
      return response;
    }
    if (area === "public" && id && path.length <= 3) {
      if (get && !action) return json(await service.publicContract(id));
      if (!get && action === "preview")
        return json(await service.previewContract(id, await body(request)));
      if (!get && action === "sign")
        return json(await service.signContract(id, await body(request)));
      throw new HttpError(404, "Rută inexistentă.");
    }
    const uid = await requireAdmin(request);
    if (area === "settings" && path.length === 1)
      return json(
        get
          ? await service.getSettings()
          : await service.saveSettings(await body(request)),
      );
    if (area === "templates" && path.length <= 2)
      return json(
        get && !id
          ? await service.listTemplates()
          : await service.saveTemplate(await body(request), id),
      );
    if (area === "contracts") {
      if (id === "export" && path.length === 2 && get)
        return new NextResponse(contractsCsv(await service.listContracts()), {
          headers: {
            "Content-Type": "text/csv; charset=utf-8",
            "Content-Disposition": 'attachment; filename="contracte.csv"',
            "Cache-Control": "private, no-store",
          },
        });
      if (!id)
        return json(
          get
            ? await service.listContracts()
            : await service.saveDraft(await body(request), uid),
        );
      if (action === "export" && get && path.length === 3) {
        const c = await service.getContract(id);
        const { linkHash: _, ...data } = c;
        return new NextResponse(
          JSON.stringify({ schemaVersion: 1, contract: data }, null, 2),
          {
            headers: {
              "Content-Type": "application/json; charset=utf-8",
              "Content-Disposition": `attachment; filename="contract-${c.id}.json"`,
              "Cache-Control": "private, no-store",
            },
          },
        );
      }
      if (!action && path.length === 2)
        return json(
          get
            ? await service.getContract(id)
            : await service.saveDraft(await body(request), uid, id),
        );
      if (!get && path.length === 3 && action === "send")
        return json(await service.issueLink(id, await body(request), uid));
      if (!get && path.length === 3 && action === "cancel") {
        await service.cancelContract(id, uid);
        return json({ ok: true });
      }
    }
    throw new HttpError(404, "Rută inexistentă.");
  } catch (error) {
    return failure(error);
  }
}
export const GET = handle;
export const POST = handle;
export const DELETE = handle;
