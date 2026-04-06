"use client";

import Link from "next/link";
import DeviceScreenshotFrame from "@/app/(site)/portofoliu-aplicatii-mobile/_components/device-screenshot-frame";
import {
  getServicePageFeaturedPortfolioStudies,
  mobilePortfolioHubPath,
} from "@/app/(site)/portofoliu-aplicatii-mobile/mobile-app-portfolio-data";

const studies = getServicePageFeaturedPortfolioStudies();
const studyDescriptions: Record<string, string> = {
  "styleconnect-rezervari-saloane":
    "Aplicație gândită pentru programări și interacțiune rapidă, cu o experiență simplă și ușor de urmărit pentru utilizatori.",
  "coffee-buzz-cafenea-fidelizare-comenzi":
    "Aplicație construită pentru comenzi și interacțiune rapidă, cu accent pe claritate, navigare ușoară și utilizare repetată.",
  "doitnow-provocari-zilnice-ai":
    "Aplicație mobilă gândită pentru utilizare frecventă, cu fluxuri clare și structură simplă pentru acțiuni rapide.",
};
const studyLabels: Record<string, string> = {
  "styleconnect-rezervari-saloane": "Programări și servicii",
  "coffee-buzz-cafenea-fidelizare-comenzi": "HoReCa și comenzi",
  "doitnow-provocari-zilnice-ai": "Utilizare zilnică",
};

export default function PortfolioSection() {
  const getStudyHref = (slug: string) => `${mobilePortfolioHubPath}/${slug}`;

  const scrollToLeadForm = (projectName: string) => {
    const params = new URLSearchParams(window.location.search);
    params.set("selectedProject", projectName);
    const next = `${window.location.pathname}?${params.toString()}#formular-lead`;
    window.history.replaceState({}, "", next);
    window.dispatchEvent(
      new CustomEvent("lead:selected-project", { detail: projectName }),
    );
    document
      .getElementById("formular-lead")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="proiecte-reale"
      className="scroll-mt-24 border-y border-slate-100 bg-slate-50/70 py-14 sm:py-16"
      aria-labelledby="mobile-proof-heading"
    >
      <div className="container">
        <div className="max-w-3xl">
          <p className="text-primary/80 text-sm font-semibold tracking-[0.24em] uppercase">
            Proof rapid
          </p>
          <h2
            id="mobile-proof-heading"
            className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl"
          >
            Proiecte reale care arată cum livrăm aplicații pentru business-uri
            diferite
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Mai jos sunt câteva exemple relevante de aplicații construite pentru
            programări, produse digitale și utilizare zilnică. Fiecare proiect
            este gândit în funcție de public, scop și experiența de utilizare.
          </p>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {studies.map((study) => (
            <article
              key={study.slug}
              className="flex h-full flex-col overflow-hidden rounded-[1.9rem] border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.07)]"
            >
              <div className="bg-gradient-to-b from-slate-100 to-white px-4 pt-4">
                <DeviceScreenshotFrame
                  src={study.image}
                  alt={study.imageAlt}
                  variant="card"
                  sizes="(max-width: 1024px) 90vw, 260px"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="text-primary text-xs font-semibold tracking-[0.18em] uppercase">
                  {studyLabels[study.slug] ?? "Proiect real"}
                </p>

                <h3 className="mt-4 text-xl font-bold tracking-tight text-slate-950">
                  {study.cardTitle}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                  {studyDescriptions[study.slug] ?? study.shortDescription}
                </p>

                <div className="mt-auto flex flex-col gap-3 pt-5">
                  <Link
                    href={getStudyHref(study.slug)}
                    className="bg-primary hover:bg-primary/90 inline-flex w-full items-center justify-center rounded-2xl px-4 py-3 text-sm font-semibold text-white transition"
                  >
                    Vezi proiectul
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_16px_42px_rgba(15,23,42,0.05)] sm:p-8">
          <div className="max-w-3xl">
            <h3 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
              Dacă proiectul tău seamănă cu unul dintre aceste exemple,
              următorul pas util este o estimare orientativă și o discuție
              despre structura aplicației
            </h3>
            <p className="mt-3 text-base leading-8 text-slate-600">
              Ne trimiți pe scurt ce vrei să construiești, iar noi revenim cu o
              variantă realistă de pornire și pașii următori.
            </p>
          </div>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <button
              type="button"
              onClick={() => scrollToLeadForm("Portofoliu aplicații mobile")}
              className="bg-primary hover:bg-primary/90 inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold text-white transition"
            >
              Cere o estimare pentru aplicația ta
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
