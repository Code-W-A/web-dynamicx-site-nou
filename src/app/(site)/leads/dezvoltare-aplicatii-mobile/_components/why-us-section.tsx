import { BadgeCheck } from "lucide-react";
import { differentiators } from "./content";
import SectionHeading from "./section-heading";

export default function WhyUsSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container">
        <SectionHeading
          eyebrow="De ce noi"
          title="Partener tehnic orientat pe claritate, performanta si rezultate"
          description="WebDynamicx livreaza aplicatii mobile cu focus pe impact operational si experienta moderna pentru clienti."
          center
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {differentiators.map((item) => (
            <div key={item} className="flex gap-3 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <BadgeCheck size={18} className="mt-0.5 shrink-0 text-primary" />
              <p className="text-sm leading-relaxed text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
