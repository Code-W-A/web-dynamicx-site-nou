import Link from "next/link";
import { CheckCircle2, MessageCircle, Smartphone, Sparkles } from "lucide-react";
import { contactData, trustPoints } from "./content";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-white pt-28 pb-16 sm:pt-32">
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-24 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="container relative">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-4 py-2 text-sm font-medium text-primary">
              <Sparkles size={16} />
              Dezvoltare aplicații mobile pentru companii din România
            </div>
            <h1 className="text-4xl leading-tight font-bold text-black sm:text-5xl">
              Dezvoltare aplicatii mobile pentru companii care vor rezultate rapide si scalabile
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-body-color">
              Construim aplicatii iOS, Android si cross-platform pentru business-uri care vor procese mai eficiente,
              experienta moderna pentru clienti si crestere sustinuta.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="#formular-lead"
                className="inline-flex items-center justify-center rounded-2xl bg-primary px-7 py-4 text-base font-semibold text-white shadow-lg shadow-primary/20 transition hover:bg-primary/90"
              >
                Solicita oferta
              </Link>
              <div className="flex items-center gap-4 text-sm font-medium">
                <a
                  href={contactData.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-gray-700 transition hover:text-primary"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
                <a href={contactData.phoneHref} className="text-gray-700 transition hover:text-primary">
                  Suna acum
                </a>
              </div>
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

          <div className="space-y-5">
            <div className="rounded-3xl border border-blue-100 bg-white p-5 shadow-[0_20px_50px_rgba(9,14,52,0.08)]">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-sm font-semibold text-gray-700">Preview produs mobil</p>
                <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                  Livrare structurata
                </span>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-gradient-to-b from-slate-900 to-slate-700 p-4 text-white">
                  <div className="mb-4 h-2 w-16 rounded-full bg-white/30" />
                  <div className="mb-2 h-16 rounded-xl bg-white/15" />
                  <div className="mb-2 h-16 rounded-xl bg-white/10" />
                  <p className="mt-4 text-xs text-white/80">Home + Dashboard utilizator</p>
                </div>
                <div className="rounded-2xl bg-gradient-to-b from-primary to-blue-700 p-4 text-white">
                  <div className="mb-3 flex items-center gap-2 text-xs">
                    <Smartphone size={14} />
                    App Flow
                  </div>
                  <div className="space-y-2">
                    <div className="h-8 rounded-lg bg-white/20" />
                    <div className="h-8 rounded-lg bg-white/20" />
                    <div className="h-8 rounded-lg bg-white/20" />
                  </div>
                  <p className="mt-4 text-xs text-white/80">Rezervari, plati, notificari</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-service">
              <p className="text-sm font-semibold text-black">Ce primesti la prima discutie</p>
              <p className="mt-2 text-sm text-body-color">
                Clarificam obiectivele, estimam efortul si iti recomandam arhitectura potrivita pentru lansare.
              </p>
              <div className="mt-4 space-y-2 text-sm text-gray-700">
                <p>- raspuns initial rapid</p>
                <p>- recomandari tehnice concrete</p>
                <p>- urmatorii pasi clari pentru proiect</p>
              </div>
              <a
                href="#formular-lead"
                className="mt-5 inline-flex rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-primary/90"
              >
                Solicita oferta
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
