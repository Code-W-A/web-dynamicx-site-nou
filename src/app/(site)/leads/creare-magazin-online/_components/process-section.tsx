import SectionHeading from "./section-heading";
import { processSteps } from "./content";

export default function ProcessSection() {
  return (
    <section className="bg-white py-20">
      <div className="container">
        <SectionHeading
          eyebrow="Proces"
          title="Un proces clar, ca sa stii mereu in ce etapa este proiectul"
          description="Lucram transparent, cu obiective clare pe fiecare etapa."
          center
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step, index) => (
            <div key={step.title} className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
              <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">Etapa {index + 1}</p>
              <h3 className="mt-2 text-base font-semibold text-black">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-body-color">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
