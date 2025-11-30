import { NextResponse } from "next/server";
import { sendEmail } from "@/app/libs/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const variant = (body?.variant || "").toString(); // "phone" | "email"
    const value = (body?.value || "").toString();
    const page = (body?.page || "").toString();

    if (!value || (variant !== "phone" && variant !== "email")) {
      return NextResponse.json(
        { error: "Variantă sau valoare lipsă/invalidă." },
        { status: 400 },
      );
    }

    const html = `
      <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.6;color:#111">
        <h2>Mini lead nou</h2>
        <p><strong>Variantă:</strong> ${variant}</p>
        <p><strong>Valoare:</strong> ${value}</p>
        ${page ? `<p><strong>Pagină:</strong> ${page}</p>` : ""}
      </div>
    `;

    await sendEmail({
      to: process.env.EMAIL_TO || process.env.EMAIL_FROM || "webdynamicx@gmail.com",
      subject: `Mini lead (${variant}) — Web Dynamicx`,
      html,
      replyTo: variant === "email" ? value : undefined,
      fromName: "Mini Lead Form",
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: "A apărut o eroare. Încearcă din nou." },
      { status: 500 },
    );
  }
}


