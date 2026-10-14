import Image from "next/image";
import Link from "next/link";
import { softwarePortfolio } from "@/static-data/portfolio-additions";

const examples = softwarePortfolio.filter((study) =>
  ["itp-white-label", "parcare-white-label"].includes(study.slug),
);

export default function SoftwareServicePortfolioSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="container px-5">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Exemple demonstrative</p>
          <h2 className="mt-4 text-3xl font-bold text-slate-950">Aplicații web pentru programări și administrare</h2>
          <p className="mt-5 leading-8 text-slate-600">
            ITP White Label și Parcare White Label ilustrează interfețe și fluxuri operaționale.
            Demo-urile folosesc date fictive; integrările externe sunt explicate în fiecare studiu de caz.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {examples.map((study) => (
            <article key={study.slug} className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
              <div className="relative aspect-[16/9]">
                <Image src={study.image} alt={study.imageAlt} fill sizes="(max-width: 767px) 100vw, 50vw" className="object-cover" />
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold text-slate-500">{study.status}</p>
                <h3 className="mt-3 text-xl font-bold text-slate-950">{study.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{study.sortDescription}</p>
                <Link href={`/portofoliu-software/${study.slug}`} className="mt-5 inline-flex rounded-full bg-primary px-5 py-3 font-semibold text-white">
                  Vezi studiul de caz {study.title.split(" — ")[0]}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
