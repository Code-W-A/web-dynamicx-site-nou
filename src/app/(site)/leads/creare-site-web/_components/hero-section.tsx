"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { contactData, portfolioPreview, trustPoints } from "./content";

export default function HeroSection() {
  const [portfolioImgError, setPortfolioImgError] = useState(false);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-white pt-28 pb-16 sm:pt-32">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <h1 className="text-4xl leading-tight font-bold text-black sm:text-5xl">
              Creare site-uri web care transforma traficul in clienti
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-body-color">
              Construim website-uri si e-commerce orientate pe conversie pentru companii care vor crestere, claritate
              si o prezenta digitala premium.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="#formular-lead"
                className="inline-flex items-center justify-center rounded-2xl bg-primary px-7 py-4 text-base font-semibold text-white shadow-lg shadow-primary/20 transition hover:bg-primary/90"
              >
                Solicita oferta
              </Link>
              <a
                href={contactData.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 transition hover:text-primary"
              >
                <MessageCircle size={16} />
                WhatsApp rapid
              </a>
            </div>

            <ul className="mt-8 grid gap-3 text-sm">
              {trustPoints.map((point) => (
                <li key={point} className="flex items-start gap-2 rounded-xl bg-white/80 p-3 text-gray-700 shadow-sm">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-primary" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <div className="rounded-3xl border border-gray-200 bg-white p-4 shadow-service">
              <p className="mb-3 text-sm font-semibold text-black">Preview proiecte web</p>
              <a
                href={portfolioPreview.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-2xl border border-gray-200 bg-gray-50"
                aria-label={`Vezi proiect: ${portfolioPreview.title}`}
              >
                {!portfolioImgError ? (
                  <Image
                    src={portfolioPreview.image}
                    alt={portfolioPreview.title}
                    width={1040}
                    height={680}
                    className="h-56 w-full object-cover sm:h-60"
                    onError={() => setPortfolioImgError(true)}
                    priority
                  />
                ) : (
                  <div className="h-56 w-full bg-gradient-to-br from-slate-900 to-slate-700 sm:h-60" />
                )}
                <div className="pointer-events-none absolute inset-0 grid place-items-center bg-black/50 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black shadow-lg">
                    Vezi proiect
                  </span>
                </div>
                <div className="flex items-center justify-between gap-3 px-3 py-2">
                  <p className="text-xs font-semibold text-gray-800">{portfolioPreview.title}</p>
                  <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[11px] font-semibold text-primary">
                    Portofoliu
                  </span>
                </div>
              </a>
            </div>
            <div className="rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-900">
              Raspundem in maxim 2 ore in timpul programului.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
