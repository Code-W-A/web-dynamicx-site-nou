import { NextResponse } from "next/server";
import { sendEmail } from "@/app/libs/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = (body?.name || "").toString();
    const email = (body?.email || "").toString();
    const phone = (body?.phone || "").toString();
    const company = (body?.company || "").toString();
    const message = (body?.message || "").toString();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Nume, email și mesaj sunt obligatorii." },
        { status: 400 },
      );
    }

    const html = `
      <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.6;color:#111">
        <h2>Mesaj nou din formularul de contact</h2>
        <p><strong>Nume:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone || "-"}</p>
        <p><strong>Companie:</strong> ${company || "-"}</p>
        <p><strong>Mesaj:</strong></p>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      </div>
    `;

    await sendEmail({
      to: process.env.EMAIL_TO || process.env.EMAIL_FROM || "webdynamicx@gmail.com",
      subject: `Formular contact Web Dynamicx — ${name}`,
      html,
      replyTo: email,
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


