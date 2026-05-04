import Link from "next/link";
import { pricingMicrocopy, pricingSummary, pricingTiers } from "./content";
import SectionHeading from "./section-heading";

export default function PricingEstimateSection() {
  return (
    <section className="bg-white py-14 sm:py-16">
      <div className="container">
        <SectionHeading
          eyebrow="Buget orientativ"
          title="Buget orientativ pentru dezvoltare aplicații mobile"
          description="Costul final depinde de funcții, complexitate, integrarea cu alte sisteme și cât de mult trebuie construit de la zero. Totuși, pentru prima discuție, este util să ai câteva repere orientative."
          center
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <article
              key={tier.title}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-[0_14px_36px_rgba(15,23,42,0.05)]"
            >
              <h3 className="text-xl font-semibold text-slate-950">
                {tier.title}
              </h3>
              <p className="text-primary mt-3 text-2xl font-bold">
                {tier.range}
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-700">
                {tier.details}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {tier.includes.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-6 rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5 sm:p-6">
          <p className="text-sm font-semibold text-slate-950">
            Ce influențează bugetul
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            {pricingSummary}
          </p>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="#formular-lead"
            className="bg-primary hover:bg-primary/90 inline-flex items-center justify-center rounded-2xl px-7 py-4 font-semibold text-white transition"
          >
            Solicită estimare proiect
          </Link>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-500">
            {pricingMicrocopy}
          </p>
        </div>
      </div>
    </section>
  );
}
