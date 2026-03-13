import Link from "next/link";
import Portfolio from "@/components/Portfolio";

export default function PortfolioSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold tracking-[0.16em] text-primary uppercase">Portofoliu</p>
          <h2 className="text-3xl font-bold text-black sm:text-4xl">
            Proiecte relevante pentru creare magazin online
          </h2>
          <p className="mt-4 text-base leading-relaxed text-body-color">
            Folosim aceeasi abordare orientata pe rezultate pentru proiecte similare cu al tau.
          </p>
        </div>
        <Portfolio />
        <div className="mt-8 text-center">
          <Link
            href="#formular-lead"
            className="inline-flex items-center justify-center rounded-2xl bg-primary px-7 py-4 text-base font-semibold text-white transition hover:bg-primary/90"
          >
            Vreau o oferta pentru un proiect similar
          </Link>
        </div>
      </div>
    </section>
  );
}
