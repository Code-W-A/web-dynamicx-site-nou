import { Check } from "lucide-react";
import { appTypes } from "./content";
import SectionHeading from "./section-heading";

export default function ServicesGridSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container">
        <SectionHeading
          eyebrow="Ce construim"
          title="Tipuri de aplicatii mobile pe care le putem dezvolta"
          description="De la MVP-uri rapide pana la platforme robuste pentru operatiuni complexe, alegem arhitectura potrivita stadiului afacerii tale."
          center
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {appTypes.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:border-primary/30"
            >
              <div className="mt-0.5 rounded-lg bg-primary/10 p-1.5 text-primary">
                <Check size={14} />
              </div>
              <p className="text-sm leading-relaxed text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
