"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { contactData, trustPoints } from "./content";

export default function HeroSection() {
  const [siteImgError, setSiteImgError] = useState(false);
  const [shopImgError, setShopImgError] = useState(false);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-white pt-28 pb-16 sm:pt-32">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <h1 className="text-4xl leading-tight font-bold text-black sm:text-5xl">
              Creare magazine online care transforma traficul in comenzi
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-body-color">
              Construim magazine online orientate pe conversie pentru companii care vor crestere, claritate si un
              canal de vanzare scalabil.
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
              <p className="mb-3 text-sm font-semibold text-black">Preview proiecte e-commerce</p>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
                  {!siteImgError ? (
                    <Image
                      src="/images/services/creare-magazin-online.webp"
                      alt="Preview magazin online"
                      width={520}
                      height={340}
                      className="h-40 w-full object-cover"
                      onError={() => setSiteImgError(true)}
                    />
                  ) : (
                    <div className="h-40 w-full bg-gradient-to-br from-slate-900 to-slate-700" />
                  )}
                  <p className="px-3 py-2 text-xs font-medium text-gray-700">Magazin online - homepage</p>
                </div>
                <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
                  {!shopImgError ? (
                    <Image
                      src="/images/services/aplicatie-mobila-ecommerce.webp"
                      alt="Preview flux checkout"
                      width={520}
                      height={340}
                      className="h-40 w-full object-cover"
                      onError={() => setShopImgError(true)}
                    />
                  ) : (
                    <div className="h-40 w-full bg-gradient-to-br from-primary to-blue-700" />
                  )}
                  <p className="px-3 py-2 text-xs font-medium text-gray-700">Flux checkout si conversie</p>
                </div>
              </div>
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
