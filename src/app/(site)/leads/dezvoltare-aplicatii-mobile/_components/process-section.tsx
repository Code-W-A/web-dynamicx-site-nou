import SectionHeading from "./section-heading";
import { processSteps } from "./content";

export default function ProcessSection() {
  return (
    <section className="bg-slate-50 py-14 sm:py-16">
      <div className="container">
        <SectionHeading
          eyebrow="Proces"
          title="Proces scurt, clar și ușor de urmărit"
          description="Nu complicăm inutil proiectul. Lucrăm în etape clare, astfel încât să știi ce urmează, ce primești și cum avansează aplicația."
          center
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {processSteps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-[1.6rem] border border-slate-200 bg-white p-5 shadow-[0_12px_34px_rgba(15,23,42,0.05)]"
            >
              <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
                Etapa {index + 1}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-slate-950">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
