import Link from "next/link";
import { pricingTiers } from "./content";
import SectionHeading from "./section-heading";

export default function PricingEstimateSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container">
        <SectionHeading
          eyebrow="Estimare cost"
          title="Cum estimam costul unei aplicatii mobile"
          description="Bugetul final depinde de complexitate, functionalitati, design, integrari, panou de administrare si termenul de livrare."
          center
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <article key={tier.title} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-pricing">
              <h3 className="text-xl font-semibold text-black">{tier.title}</h3>
              <p className="mt-3 text-2xl font-bold text-primary">{tier.range}</p>
              <p className="mt-4 text-sm leading-relaxed text-gray-700">{tier.details}</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                {tier.includes.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
              <Link
                href="#formular-lead"
                className="mt-5 inline-flex rounded-xl border border-primary/30 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white"
              >
                Vreau estimare pentru acest tip de proiect
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-primary/20 bg-primary/5 p-4 text-sm text-gray-700">
          Intervalele sunt orientative si reprezinta puncte de pornire. Estimarea exacta se face dupa clarificarea
          cerintelor proiectului.
        </div>

        <div className="mt-8 text-center">
          <Link
            href="#formular-lead"
            className="inline-flex items-center justify-center rounded-2xl bg-primary px-7 py-4 font-semibold text-white transition hover:bg-primary/90"
          >
            Solicita oferta
          </Link>
        </div>
      </div>
    </section>
  );
}
