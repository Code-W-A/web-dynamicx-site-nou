import Link from "next/link";
import { MessageCircle, PhoneCall } from "lucide-react";
import { contactData } from "./content";

export default function FinalCtaSection() {
  return (
    <section className="bg-slate-50 py-14 sm:py-16">
      <div className="container">
        <div className="to-primary rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 p-8 text-white md:p-12">
          <h2 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Vrei să vedem dacă proiectul tău are sens ca primă versiune sau ca
            aplicație mai amplă?
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/85 sm:text-base">
            Trimite-ne pe scurt ce vrei să construiești și îți propunem o
            direcție clară, realistă și potrivită pentru lansare.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="#formular-lead"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 font-semibold text-black transition hover:bg-gray-100"
            >
              Cere ofertă
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
              Sună acum
            </a>
          </div>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70">
            Este suficient să ne spui ideea, tipul de utilizatori și ce vrei să
            obții. Restul îl structurăm împreună.
          </p>
        </div>
      </div>
    </section>
  );
}
