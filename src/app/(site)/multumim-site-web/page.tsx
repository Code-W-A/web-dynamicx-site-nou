import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, MessageCircle, PhoneCall } from "lucide-react";
import { webSiteSuccessMessage } from "@/components/Leads/web-site-confirmation";
import ThankYouPageView from "./_components/thank-you-page-view";
import { contactData } from "@/app/(site)/leads/creare-site-web/_components/content";

const siteName = process.env.SITE_NAME || "Web Dynamicx";

export const metadata: Metadata = {
  title: `Cererea a fost trimisă | ${siteName}`,
  description:
    "Confirmare cerere creare site web. Am primit solicitarea și revenim cu o direcție clară pentru proiect.",
  robots: {
    index: false,
    follow: false,
  },
};

const whatsappHref = `https://wa.me/40774550758?text=${encodeURIComponent(
  "Salut! Tocmai am trimis cererea pentru un site web și vreau să discutăm următorii pași.",
)}`;

export default function WebSitesThankYouPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-24 sm:px-10">
      <ThankYouPageView />
      <div
        data-web-sites-thank-you-page
        data-conversion-page="lead-web-site"
        className="mx-auto max-w-3xl text-center"
      >
        <CheckCircle2
          className="mx-auto h-16 w-16 text-green-600"
          aria-hidden
        />
        <p className="text-primary mt-6 text-sm font-semibold tracking-[0.2em] uppercase">
          Confirmare cerere
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
          Cererea a fost trimisă
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
          {webSiteSuccessMessage}
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={contactData.phoneHref}
            className="bg-primary hover:bg-primary/90 inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl px-7 py-3 font-semibold text-white transition"
          >
            <PhoneCall size={18} aria-hidden />
            Sună acum
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-7 py-3 font-semibold text-slate-900 transition hover:bg-white"
          >
            <MessageCircle size={18} aria-hidden />
            Scrie pe WhatsApp
          </a>
        </div>
        <Link
          href="/leads/creare-site-web"
          className="text-primary mt-8 inline-block text-sm font-semibold underline-offset-4 hover:underline"
        >
          Înapoi la pagina de ofertă
        </Link>
      </div>
    </main>
  );
}
