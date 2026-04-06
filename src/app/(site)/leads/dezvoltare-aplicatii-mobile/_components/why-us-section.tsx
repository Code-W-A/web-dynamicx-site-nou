import { BadgeCheck } from "lucide-react";
import { differentiators } from "./content";
import SectionHeading from "./section-heading";

export default function WhyUsSection() {
  return (
    <section className="bg-white py-14 sm:py-16">
      <div className="container">
        <SectionHeading
          eyebrow="De ce noi"
          title="Ce diferențiază colaborarea cu noi pe un proiect de aplicație mobilă"
          description="Punem accent pe structură, claritate și livrare realistă. Nu construim doar ecrane care arată bine, ci aplicații gândite să poată fi lansate, folosite și extinse în timp."
          center
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {differentiators.map((item) => (
            <div
              key={item}
              className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm"
            >
              <BadgeCheck size={18} className="text-primary mt-0.5 shrink-0" />
              <p className="text-sm leading-7 text-slate-700">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
