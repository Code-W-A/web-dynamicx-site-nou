import Link from "next/link";
import type { MobileCaseStudy } from "@/app/(site)/portofoliu-aplicatii-mobile/mobile-app-portfolio-data";
import { mobilePortfolioHubPath } from "@/app/(site)/portofoliu-aplicatii-mobile/mobile-app-portfolio-data";

type RelevantCaseStudiesBlockProps = {
  studies: MobileCaseStudy[];
};

export default function RelevantCaseStudiesBlock({ studies }: RelevantCaseStudiesBlockProps) {
  if (studies.length === 0) return null;

  return (
    <section
      className="rounded-sm border border-[#E9ECF8] bg-slate-50/70 p-5 sm:p-6"
      aria-labelledby="relevant-case-studies-heading"
    >
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Studii de caz relevante</p>
      <h2 id="relevant-case-studies-heading" className="mt-2 text-lg font-semibold tracking-tight text-slate-950">
        Exemple concrete din portofoliul de aplicații mobile
      </h2>
      <p className="text-body-color mt-2 text-sm leading-relaxed">
        Dacă vrei să vezi cum arată implementarea într-un produs real, poți continua cu unul dintre studiile de caz de
        mai jos.
      </p>

      <ul className="mt-4 grid gap-4 sm:grid-cols-2">
        {studies.map((study) => {
          const href = `${mobilePortfolioHubPath}/${study.slug}`;
          return (
            <li key={study.slug}>
              <article className="flex h-full flex-col rounded-sm border border-[#E9ECF8] bg-white p-4">
                <h3 className="text-base font-semibold tracking-tight text-slate-950">
                  <Link href={href} className="hover:text-primary">
                    {study.cardTitle}
                  </Link>
                </h3>
                <p className="text-body-color mt-2 text-sm leading-relaxed">{study.shortDescription}</p>
                <Link
                  href={href}
                  className="mt-4 inline-flex items-center text-sm font-semibold text-primary underline-offset-4 hover:underline"
                >
                  Vezi studiul de caz
                </Link>
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
