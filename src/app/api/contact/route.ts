import { NextResponse } from "next/server";
import { sendEmail } from "@/app/libs/email";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = (body?.name || "").toString();
    const email = (body?.email || "").toString();
    const phone = (body?.phone || "").toString();
    const company = (body?.company || "").toString();
    const message = (body?.message || "").toString();
    const source = (body?.source || "").toString();
    const page = (body?.page || "").toString();
    const projectType = (body?.projectType || "").toString();
    const budget = (body?.budget || "").toString();

    if (!name || (!email && !phone) || !message) {
      return NextResponse.json(
        { error: "Nume, mesaj și cel puțin un contact (email sau telefon) sunt obligatorii." },
        { status: 400 },
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || "-");
    const safeCompany = escapeHtml(company || "-");
    const safeSource = escapeHtml(source || "contact-generic");
    const safePage = escapeHtml(page || "-");
    const safeProjectType = escapeHtml(projectType || "-");
    const safeBudget = escapeHtml(budget || "-");
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br/>");

    const html = `
      <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.6;color:#111">
        <h2>Mesaj nou din formularul de contact</h2>
        <p><strong>Sursă lead:</strong> ${safeSource}</p>
        <p><strong>Pagină:</strong> ${safePage}</p>
        <p><strong>Tip proiect:</strong> ${safeProjectType}</p>
        <p><strong>Buget estimativ:</strong> ${safeBudget}</p>
        <hr style="border:none;border-top:1px solid #ddd;margin:16px 0" />
        <p><strong>Nume:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Telefon:</strong> ${safePhone}</p>
        <p><strong>Companie:</strong> ${safeCompany}</p>
        <p><strong>Mesaj:</strong></p>
        <p>${safeMessage}</p>
      </div>
    `;

    const subjectSource = (source || "contact-generic").replace(/\s+/g, " ").trim();
    const subjectName = (name || "Lead").replace(/\s+/g, " ").trim();

    await sendEmail({
      to: process.env.EMAIL_TO || process.env.EMAIL_FROM || "webdynamicx@gmail.com",
      subject: `[${subjectSource}] Formular contact Web Dynamicx — ${subjectName}`,
      html,
      replyTo: email || undefined,
      fromName: name,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: "A apărut o eroare. Încearcă din nou." },
      { status: 500 },
    );
  }
}


