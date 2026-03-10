import { ArrowUpRight } from "lucide-react";
import { benefits } from "./content";
import SectionHeading from "./section-heading";

export default function BenefitsSection() {
  return (
    <section className="bg-white py-20">
      <div className="container">
        <SectionHeading
          eyebrow="Avantaje"
          title="De ce sa alegi WebDynamicx pentru dezvoltarea aplicatiei tale mobile"
          description="Construim solutii mobile care sustin obiective reale de business: automatizare, experienta mai buna pentru clienti si procese scalabile."
          center
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="rounded-3xl border border-gray-200 bg-white p-6 shadow-[0_12px_30px_rgba(9,14,52,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
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
