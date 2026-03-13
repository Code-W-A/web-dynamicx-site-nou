import { ArrowUpRight } from "lucide-react";
import SectionHeading from "./section-heading";
import { benefits } from "./content";

export default function BenefitsSection() {
  return (
    <section className="bg-white py-20">
      <div className="container">
        <SectionHeading
          eyebrow="Beneficii"
          title="De ce sa alegi WebDynamicx pentru creare magazin online"
          description="Optimizam tot fluxul digital: de la prima impresie pana la conversie si administrare zilnica."
          center
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {benefits.map((benefit) => (
            <article key={benefit.title} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-service">
              <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-2 text-primary">
                <ArrowUpRight size={18} />
              </div>
              <h3 className="text-xl font-semibold text-black">{benefit.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-body-color">{benefit.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
