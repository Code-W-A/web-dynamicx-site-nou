import Image from "next/image";
import Link from "next/link";
import type { Portfolio } from "@/types/portfolio";

export function PortfolioNavigation() {
  return (
    <nav
      aria-label="Categorii portofoliu"
      className="mx-auto flex max-w-5xl flex-wrap justify-center gap-3 px-5 py-6"
    >
      {[
        ["/portofoliu", "Site-uri & magazine online"],
        ["/portofoliu-aplicatii-mobile", "Aplicații mobile"],
        ["/portofoliu-software", "Software & platforme"],
      ].map(([href, label]) => (
        <Link
          key={href}
          href={href}
          className="hover:border-primary hover:text-primary rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition"
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}

export function CaseStudyContact({
  label = "Vreau un proiect similar",
}: {
  label?: string;
}) {
  return (
    <Link
      href="/contact#contact"
      className="bg-primary hover:bg-primary/90 inline-flex items-center justify-center rounded-full px-6 py-3 text-center text-sm font-semibold text-white transition"
    >
      {label}
    </Link>
  );
}

export function RelatedProjectLinks({
  projects,
}: {
  projects?: Portfolio["relatedProjects"];
}) {
  if (!projects?.length) return null;
  return (
    <section className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
      <h2 className="text-xl font-bold text-slate-950">
        Mai mult din acest proiect
      </h2>
      <div className="mt-4 flex flex-wrap gap-4">
        {projects.map((project) => (
          <Link
            key={project.href}
            href={project.href}
            className="text-primary font-semibold underline underline-offset-4"
          >
            {project.label}
          </Link>
        ))}
      </div>
    </section>
  );
}

export function CaseStudyGallery({
  gallery,
}: {
  gallery?: Portfolio["gallery"];
}) {
  if (!gallery?.length) return null;
  return (
    <section>
      <h2 className="text-2xl font-bold text-slate-950">
        Proiectul în imagini
      </h2>
      <div className="mt-6 space-y-8">
        {gallery.map((item) => (
          <figure key={item.src}>
            <a
              href={item.src}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Deschide captura: ${item.alt}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={1440}
                height={1000}
                sizes="(max-width: 1024px) 100vw, 900px"
                className="h-auto w-full rounded-2xl border border-slate-200"
              />
            </a>
            <figcaption className="mt-3 text-sm leading-6 text-slate-600">
              {item.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
