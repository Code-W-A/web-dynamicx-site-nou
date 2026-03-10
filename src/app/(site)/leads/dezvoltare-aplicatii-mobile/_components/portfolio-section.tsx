import { portfolioProjects } from "./content";
import SectionHeading from "./section-heading";

export default function PortfolioSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container">
        <SectionHeading
          eyebrow="Portofoliu"
          title="Proiecte similare: problema, solutie livrata si impact"
          description="Fiecare exemplu este structurat ca dovada comerciala, pentru a evalua rapid daca putem livra ceva similar pentru business-ul tau."
          center
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {portfolioProjects.map((project, index) => (
            <article key={project.title} className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-service">
              <div className="relative bg-gradient-to-br from-slate-900 to-slate-700 p-5 text-white">
                <p className="text-xs font-semibold tracking-[0.2em] uppercase">Preview mobil</p>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  <div className="h-20 rounded-lg bg-white/10" />
                  <div className="h-20 rounded-lg bg-white/15" />
                  <div className="h-20 rounded-lg bg-white/10" />
                </div>
                <span className="absolute top-4 right-4 rounded-full bg-white/15 px-3 py-1 text-xs">Proiect {index + 1}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-black">{project.title}</h3>
                <p className="mt-1 text-sm font-medium text-primary">{project.category}</p>
                <p className="mt-4 text-sm text-gray-700">
                  <span className="font-semibold">Provocare:</span> {project.challenge}
                </p>
                <p className="mt-3 text-sm text-gray-700">
                  <span className="font-semibold">Solutie livrata:</span> {project.solution}
                </p>
                <p className="mt-3 text-sm text-gray-700">
                  <span className="font-semibold">Impact:</span> {project.impact}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.features.map((feature) => (
                    <span key={feature} className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
