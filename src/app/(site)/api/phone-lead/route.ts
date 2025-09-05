import { NextResponse } from "next/server";
import { sendEmail } from "@/app/libs/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const phone = (body?.phone || "").toString().trim();

    if (!phone) {
      return NextResponse.json(
        { error: "Telefonul este obligatoriu." },
        { status: 400 },
      );
    }

    const html = `
      <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.6;color:#111">
        <h2>Lead nou (telefon)</h2>
        <p><strong>Telefon:</strong> ${phone}</p>
      </div>
    `;

    await sendEmail({
      to: process.env.EMAIL_TO || process.env.EMAIL_FROM || "webdynamicx@gmail.com",
      subject: `Lead telefon — Web Dynamicx`,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: "A apărut o eroare. Încearcă din nou." },
      { status: 500 },
    );
  }
}


