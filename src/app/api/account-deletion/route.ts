import { NextResponse } from "next/server";
import { sendEmail } from "@/app/libs/email";

type Language = "ro" | "en";

const ACCOUNT_DELETION_DESTINATION = "mobitoolsro@gmail.com";
const ALLOWED_APPS = new Set(["my-butterfly", "do-it-now"]);

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function maskEmail(email: string) {
  const [local, domain] = email.split("@");
  if (!local || !domain) return "invalid-email";
  const localPreview =
    local.length <= 2 ? `${local[0] || "*"}*` : `${local[0]}***${local[local.length - 1]}`;
  return `${localPreview}@${domain}`;
}

function resolveLanguage(value: unknown): Language {
  return value === "en" ? "en" : "ro";
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const app = (body?.app || "").toString().trim();
    const email = (body?.email || "").toString().trim().toLowerCase();
    const name = (body?.name || "").toString().trim();
    const reason = (body?.reason || "").toString().trim();
    const confirmOwnership = body?.confirmOwnership === true;
    const language = resolveLanguage(body?.language);

    if (!ALLOWED_APPS.has(app)) {
      return NextResponse.json(
        { error: "Aplicația selectată este invalidă." },
        { status: 400 },
      );
    }

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { error: "Adresa de email este obligatorie și trebuie să fie validă." },
        { status: 400 },
      );
    }

    if (!confirmOwnership) {
      return NextResponse.json(
        { error: "Confirmarea titularului contului este obligatorie." },
        { status: 400 },
      );
    }

    const timestamp = new Date().toISOString();
    console.log("[account-deletion] New request", {
      timestamp,
      app,
      email: maskEmail(email),
      hasName: Boolean(name),
      hasReason: Boolean(reason),
      language,
    });

    const escapedName = escapeHtml(name || "-");
    const escapedEmail = escapeHtml(email);
    const escapedReason = escapeHtml(reason || "-").replace(/\n/g, "<br/>");

    const html = `
      <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.6;color:#111">
        <h2>New account deletion request</h2>
        <p><strong>Timestamp:</strong> ${timestamp}</p>
        <p><strong>Application:</strong> ${escapeHtml(app)}</p>
        <p><strong>Email:</strong> ${escapedEmail}</p>
        <p><strong>Name:</strong> ${escapedName}</p>
        <p><strong>Language:</strong> ${escapeHtml(language)}</p>
        <p><strong>Reason:</strong></p>
        <p>${escapedReason}</p>
      </div>
    `;

    await sendEmail({
      to: ACCOUNT_DELETION_DESTINATION,
      subject: `Account deletion request (${app})`,
      html,
      replyTo: email,
      fromName: name || "Account Deletion Request",
    });

    // TODO: Persist requests in DB/Firestore and optionally notify via a dedicated provider (Resend/SendGrid).
    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: "A apărut o eroare. Încearcă din nou." },
      { status: 500 },
    );
  }
}
