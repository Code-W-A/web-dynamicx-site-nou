import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { mobileAppsServicePageData } from "@/app/(site)/servicii/dezvoltare-aplicatii-mobile/mobile-app-service-data";
import { trustPoints } from "./content";

const heroProofItems = [
  "iOS și Android",
  "Prima versiune a aplicației",
  "Publicare în App Store și Google Play",
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(74,108,247,0.12),_transparent_28%),linear-gradient(180deg,_#f8fbff_0%,_#ffffff_72%)] pt-[120px] pb-12 sm:pt-[136px] sm:pb-16">
      <div className="bg-primary/15 pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute top-18 -right-24 h-72 w-72 rounded-full bg-sky-200/35 blur-3xl" />

      <div className="relative container">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(340px,0.92fr)] lg:items-center lg:gap-10">
          <div className="max-w-2xl">
            <div className="border-primary/20 text-primary inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-xs font-semibold tracking-[0.18em] uppercase shadow-sm">
              <Sparkles size={14} />
              Firmă dezvoltare aplicații mobile
            </div>

            <h1 className="mt-5 text-4xl leading-tight font-bold tracking-tight text-slate-950 sm:text-5xl">
              Dezvoltare aplicații mobile iOS și Android pentru firme
            </h1>

            <p className="mt-4 max-w-[44rem] text-base leading-8 text-slate-600 sm:text-lg">
            Dezvoltăm aplicații mobile native și cross-platform pentru iOS și Android, cu preț fix agreat la început. MVP funcțional în săptămâni, nu luni.
            </p>

            <ul className="mt-6 space-y-3">
              {trustPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-sm leading-7 text-slate-700 sm:text-base"
                >
                  <span className="bg-primary/10 text-primary mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full">
                    <CheckCircle2 size={14} />
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href="#formular-lead"
                className="bg-primary hover:bg-primary/90 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-4 text-base font-semibold text-white shadow-[0_16px_40px_rgba(74,108,247,0.24)] transition sm:w-auto"
              >
                Cere o estimare pentru aplicația ta
                <ArrowRight size={18} />
              </Link>
              <Link
                href="#proiecte-reale"
                className="hover:border-primary/30 hover:text-primary inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-4 text-base font-semibold text-slate-900 transition sm:w-auto"
              >
                Vezi proiecte reale
              </Link>
            </div>
            <div className="mt-3">
              <p className="mt-3 max-w-xl text-sm leading-7 text-slate-500">
                Primești o direcție clară pentru proiect, o estimare orientativă
                și recomandări potrivite pentru prima versiune a aplicației sau
                pentru o dezvoltare mai amplă.
              </p>
            </div>
          </div>

          <div className="lg:justify-self-end">
            <div className="overflow-hidden rounded-[1.9rem] border border-slate-200/80 bg-slate-950 p-2 shadow-[0_28px_80px_rgba(15,23,42,0.18)]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.45rem]">
                <Image
                  src={mobileAppsServicePageData.image}
                  alt={mobileAppsServicePageData.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-center"
                />
                <div className="to-primary/20 absolute inset-0 bg-gradient-to-tr from-slate-950/60 via-transparent" />
                <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/10 bg-slate-950/72 px-4 py-3 text-white backdrop-blur-sm">
                  <p className="text-xs font-semibold tracking-[0.18em] text-white/60 uppercase">
                    Focus comercial
                  </p>
                  <p className="mt-2 text-sm font-semibold sm:text-base">
                    Aplicații gândite pentru lansare, utilizare reală și o
                    evoluție clară în timp
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {heroProofItems.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-center text-sm font-semibold text-slate-800 shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
