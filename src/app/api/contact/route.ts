import { NextResponse } from "next/server";
import { sendEmail } from "@/app/libs/email";
import { z } from "zod";

// Only the website landing uses this stricter contract; other callers are unchanged.
const webSiteRequest = z
  .object({
    name: z
      .string()
      .trim()
      .min(2)
      .max(100)
      .regex(/^[^\r\n]+$/),
    email: z.string().trim().max(200).default(""),
    phone: z.string().trim().max(200).default(""),
    description: z.string().trim().min(10).max(5000),
    message: z.string().trim().min(10).max(6000),
    company: z.string().trim().max(200).default(""),
    projectType: z.string().max(200).default(""),
    budget: z.string().trim().max(100).default(""),
    source: z.literal("lead-web-site"),
    page: z.literal("/leads/creare-site-web"),
  })
  .refine(({ email, phone }) => {
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const digits = phone.replace(/\D/g, "").length;
    const validPhone =
      /^\+?[\d\s().-]+$/.test(phone) && digits >= 9 && digits <= 15;
    return (
      (validEmail || validPhone) &&
      (!email || validEmail) &&
      (!phone || validPhone)
    );
  }, "Introdu un telefon sau un e-mail valid.");

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
    let body = await request.json();
    if (body?.source === "lead-web-site") {
      const parsed = webSiteRequest.safeParse(body);
      if (!parsed.success) {
        return NextResponse.json(
          {
            error:
              "Verifică numele, datele de contact și descrierea solicitării.",
          },
          { status: 400 },
        );
      }
      body = parsed.data;
    }
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
        {
          error:
            "Nume, mesaj și cel puțin un contact (email sau telefon) sunt obligatorii.",
        },
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

    const subjectSource = (source || "contact-generic")
      .replace(/\s+/g, " ")
      .trim();
    const subjectName = (name || "Lead").replace(/\s+/g, " ").trim();

    await sendEmail({
      to:
        process.env.EMAIL_TO ||
        process.env.EMAIL_FROM ||
        "webdynamicx@gmail.com",
      subject: `[${subjectSource}] Formular contact Web Dynamicx — ${subjectName}`,
      html,
      replyTo: email || undefined,
      fromName: name,
    });

    const res = NextResponse.json({ ok: true });
    if (source === "lead-mobile-apps") {
      res.cookies.set("wd_mobile_apps_ty", "1", {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        maxAge: 900,
        secure: process.env.NODE_ENV === "production",
      });
    }
    if (source === "lead-web-site") {
      res.cookies.set("wd_web_sites_ty", "1", {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        maxAge: 900,
        secure: process.env.NODE_ENV === "production",
      });
    }
    if (source === "lead-magazin-online") {
      res.cookies.set("wd_online_store_ty", "1", {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        maxAge: 900,
        secure: process.env.NODE_ENV === "production",
      });
    }
    return res;
  } catch (error) {
    return NextResponse.json(
      { error: "A apărut o eroare. Încearcă din nou." },
      { status: 500 },
    );
  }
}
