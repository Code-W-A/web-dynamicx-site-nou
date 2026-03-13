import Link from "next/link";
import { pricingPackages } from "./content";

export default function PricingSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold tracking-[0.16em] text-primary uppercase">PREȚURI</p>
          <h2 className="text-3xl font-bold text-black sm:text-4xl">Cât costă un site de prezentare?</h2>
          <p className="mt-4 text-base leading-relaxed text-body-color">
            Alege pachetul potrivit pentru creare site, web design și SEO.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {pricingPackages.map((pack) => (
            <article key={pack.name} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-pricing">
              <p className="text-sm font-semibold text-primary">{pack.name}</p>
              <p className="mt-3 text-3xl font-bold text-black">{pack.price}</p>
              <p className="mt-4 border-b border-gray-100 pb-4 text-sm text-gray-700">{pack.subtitle}</p>

              <div className="mt-4 space-y-2">
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                    Ideal pentru: {pack.idealFor}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 text-xs text-body-color">
                  <span>Livrare: {pack.delivery}</span>
                  <span>Revizii: {pack.revisions}</span>
                  <span>Suport: {pack.support}</span>
                </div>
              </div>

              <div className="mt-5 space-y-4 text-sm text-gray-700">
                {pack.sections.map((section) => (
                  <div key={section.title}>
                    <p className="font-semibold text-primary">{section.title}</p>
                    <ul className="mt-2 space-y-2">
                      {section.items.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <Link
                href="#formular-lead"
                className="mt-6 inline-flex rounded-xl border border-primary/30 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary hover:text-white"
              >
                Vreau estimare pentru acest tip de proiect
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
