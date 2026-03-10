import { featureHighlights } from "./content";
import SectionHeading from "./section-heading";

export default function FeatureHighlightsSection() {
  return (
    <section className="bg-white py-20">
      <div className="container">
        <SectionHeading
          eyebrow="Functionalitati"
          title="Functionalitati frecvent cerute in aplicatii mobile"
          description="Selectam functionalitati in functie de modelul de business si de prioritatile MVP-ului tau."
          center
        />
        <div className="flex flex-wrap justify-center gap-3">
          {featureHighlights.map((feature) => (
            <span
              key={feature}
              className="rounded-2xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
