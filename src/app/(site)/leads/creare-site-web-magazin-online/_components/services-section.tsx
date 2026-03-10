import { Check } from "lucide-react";
import SectionHeading from "./section-heading";
import { services } from "./content";

export default function ServicesSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container">
        <SectionHeading
          eyebrow="Ce livram"
          title="Servicii pentru website-uri si magazine online"
          description="Acoperim lansarea completa: strategie, design, dezvoltare, integrare si optimizare."
          center
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {services.map((item) => (
            <div key={item} className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-white p-4">
              <span className="rounded-lg bg-primary/10 p-1.5 text-primary">
                <Check size={14} />
              </span>
              <p className="text-sm text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
