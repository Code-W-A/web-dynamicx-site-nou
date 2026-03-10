import Link from "next/link";
import { MessageCircle, PhoneCall } from "lucide-react";
import { contactData } from "./content";

export default function FinalCtaSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container">
        <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-primary p-8 text-white md:p-12">
          <h2 className="max-w-3xl text-3xl font-bold sm:text-4xl">
            Spune-ne ce aplicatie vrei sa construiesti si iti propunem o solutie clara, realista si scalabila.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base">
            Pornim cu o discutie de clarificare, definim directia tehnica si iti trimitem o estimare orientata pe
            obiective de business, nu pe presupuneri.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="#formular-lead"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 font-semibold text-black transition hover:bg-gray-100"
            >
              Solicita oferta
            </Link>
            <a
              href={contactData.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
            <a
              href={contactData.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              <PhoneCall size={18} />
              Apel telefonic
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
