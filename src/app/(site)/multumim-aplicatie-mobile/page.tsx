import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, PhoneCall, Sparkles } from "lucide-react";
import AdsSimpleFooter from "@/app/(site)/leads/dezvoltare-aplicatii-mobile/_components/ads-simple-footer";
import PortfolioSection, {
  mobileLeadFormPortfolioEstimateHref,
} from "@/app/(site)/leads/dezvoltare-aplicatii-mobile/_components/portfolio-section";
import SectionHeading from "@/app/(site)/leads/dezvoltare-aplicatii-mobile/_components/section-heading";
import { contactData } from "@/app/(site)/leads/dezvoltare-aplicatii-mobile/_components/content";
import { mobilePortfolioHubPath } from "@/app/(site)/portofoliu-aplicatii-mobile/mobile-app-portfolio-data";
import ThankYouPageView from "./_components/thank-you-page-view";

const siteName = process.env.SITE_NAME || "Web Dynamicx";

const whatsappThankYouHref = `https://wa.me/40774550758?text=${encodeURIComponent(
  "Salut! Tocmai am trimis cererea de ofertă pentru o aplicație mobilă. Aștept să discutăm următorii pași.",
)}`;

const nextSteps = [
  {
    title: "Analizăm cererea",
    description:
      "Parcurgem informațiile trimise și calibrăm așteptările față de un MVP realist sau o versiune completă.",
  },
  {
    title: "Revenim cu direcție inițială",
    description:
      "Îți răspundem cu o primă direcție clară: ce are sens să construim prima dată și cum putem aborda proiectul.",
  },
  {
    title: "Stabilim pașii potriviți",
    description:
      "Definim împreună pașii de lucru, estimarea orientativă și ritmul potrivit pentru dezvoltare și lansare.",
  },
];

export const metadata: Metadata = {
  title: `Cererea a fost trimisă | ${siteName}`,
  description:
    "Confirmare cerere dezvoltare aplicație mobilă. Analizăm solicitarea și revenim cu direcție clară. Contact rapid pe telefon sau WhatsApp.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function MobileAppsThankYouPage() {
  return (
    <>
      <div
        data-mobile-apps-thank-you-page
        data-conversion-page="lead-mobile-apps"
        className="hidden"
      />
      <ThankYouPageView />
      <main className="min-h-screen bg-white">
        {/* Hero — același limbaj vizual ca hero landing leads */}
        <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(74,108,247,0.12),_transparent_28%),linear-gradient(180deg,_#f8fbff_0%,_#ffffff_72%)] pt-[120px] pb-14 sm:pt-[136px] sm:pb-16">
          <div className="bg-primary/15 pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl" />
          <div className="pointer-events-none absolute top-24 -right-24 h-72 w-72 rounded-full bg-sky-200/35 blur-3xl" />

          <div className="relative container text-center">
            <div className="border-primary/20 text-primary inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-xs font-semibold tracking-[0.18em] uppercase shadow-sm">
              <Sparkles size={14} />
              Confirmare cerere
            </div>
            <h1 className="mx-auto mt-6 max-w-3xl text-center text-4xl leading-tight font-bold tracking-tight text-slate-950 sm:text-5xl">
              Cererea a fost trimisă
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-8 text-slate-600 sm:text-lg">
              Îți mulțumim. Am înregistrat solicitarea și o analizăm cu atenție.
              Revenim în cel mai scurt timp posibil cu un răspuns structurat.
            </p>
          </div>
        </section>

        {/* Ce urmează */}
        <section className="border-t border-slate-100 bg-slate-50 py-14 sm:py-16">
          <div className="container">
            <SectionHeading
              eyebrow="Ce urmează"
              title="Trei pași simpli, de la cerere la direcție clară"
              description="Nu trebuie să ai încă toate specificațiile finale — ne ocupăm noi să clarificăm ce contează pentru lansare."
              center
            />
            <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-3">
              {nextSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-[1.6rem] border border-slate-200 bg-white p-6 shadow-[0_12px_34px_rgba(15,23,42,0.05)] sm:p-7"
                >
                  <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
                    Pasul {index + 1}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold tracking-tight text-slate-950">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact rapid */}
        <section className="py-14 sm:py-16">
          <div className="container">
            <div className="mx-auto max-w-3xl rounded-[2rem] border border-slate-200 bg-white px-6 py-10 text-center shadow-[0_18px_50px_rgba(15,23,42,0.06)] sm:px-10 sm:py-12">
              <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                Contact rapid
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-8 text-slate-600">
                Dacă proiectul este urgent sau vrei să discuți direct cu noi,
                ne poți suna sau ne poți scrie pe WhatsApp — fără a aștepta
                răspunsul pe email.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
                <a
                  href={contactData.phoneHref}
                  className="bg-primary hover:bg-primary/90 inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-2xl px-8 py-3.5 text-base font-semibold text-white transition"
                >
                  <PhoneCall size={20} aria-hidden />
                  Sună acum
                </a>
                <a
                  href={whatsappThankYouHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-8 py-3.5 text-base font-semibold text-slate-900 transition hover:border-slate-300 hover:bg-white"
                >
                  <MessageCircle size={20} aria-hidden />
                  Scrie pe WhatsApp
                </a>
              </div>
              <p className="mt-6 text-sm text-slate-500">
                {contactData.phoneDisplay} · răspuns în orele de lucru
              </p>
            </div>
          </div>
        </section>

        {/* Aceleași 3 carduri portofoliu ca pe /leads/dezvoltare-aplicatii-mobile */}
        <PortfolioSection estimateCtaHref={mobileLeadFormPortfolioEstimateHref} />

        {/* Linkuri discrete */}
        <section className="pb-10 pt-4 sm:pb-12">
          <div className="container">
            <nav
              className="flex flex-col items-center justify-center gap-x-6 gap-y-2 text-center text-sm text-slate-500 sm:flex-row"
              aria-label="Navigație secundară"
            >
              <Link
                href="/leads/dezvoltare-aplicatii-mobile"
                className="hover:text-primary transition underline-offset-4 hover:underline"
              >
                Înapoi la cererea de ofertă
              </Link>
              <span className="hidden text-slate-300 sm:inline" aria-hidden>
                ·
              </span>
              <Link
                href={mobilePortfolioHubPath}
                className="hover:text-primary transition underline-offset-4 hover:underline"
              >
                Portofoliu aplicații mobile
              </Link>
            </nav>
          </div>
        </section>

        <AdsSimpleFooter />
      </main>
    </>
  );
}
