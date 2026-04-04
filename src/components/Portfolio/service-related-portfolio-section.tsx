import Image from "next/image";
import Link from "next/link";
import {
  getPortfolioCaseStudyHref,
  getPortfolioItemsForService,
  getPortfolioServiceMeta,
} from "@/static-data/portfolio";

type Props = {
  serviceSlug: string;
  title?: string;
  intro?: string;
  limit?: number;
};

export default function ServiceRelatedPortfolioSection({
  serviceSlug,
  title,
  intro,
  limit = 3,
}: Props) {
  const matches = getPortfolioItemsForService(serviceSlug, limit);
  const serviceMeta = getPortfolioServiceMeta(serviceSlug);

  if (!matches.length || !serviceMeta) {
    return null;
  }

  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/80">Portofoliu relevant</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            {title || `Studii de caz web relevante pentru ${serviceMeta.label}`}
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            {intro ||
              `Exemple reale din portofoliul Web Dynamicx care susțin direct serviciul de ${serviceMeta.label}. Fiecare proiect are pagină proprie, link intern clar și context suficient pentru a arăta cum lucrăm în practică.`}
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {matches.map(({ portfolio, support }) => (
            <article
              key={portfolio.slug}
              className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.06)]"
            >
              <Link href={getPortfolioCaseStudyHref(portfolio.slug)} className="group block">
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                  <Image
                    src={portfolio.image}
                    alt={portfolio.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              </Link>

              <div className="p-6">
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    {portfolio.clientLabel}
                  </span>
                  {portfolio.categories?.[0] ? (
                    <span className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-slate-600">
                      {portfolio.categories[0]}
                    </span>
                  ) : null}
                </div>

                <h3 className="mt-4 text-xl font-semibold tracking-tight text-slate-950">
                  <Link href={getPortfolioCaseStudyHref(portfolio.slug)} className="transition hover:text-primary">
                    {portfolio.title}
                  </Link>
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">{portfolio.sortDescription}</p>

                <div className="mt-5 rounded-2xl border border-primary/10 bg-primary/[0.04] p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/80">
                    De ce contează pentru acest serviciu
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">{support.reason}.</p>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href={getPortfolioCaseStudyHref(portfolio.slug)}
                    className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-primary/90"
                  >
                    Vezi studiul de caz
                  </Link>
                  {portfolio.liveUrl ? (
                    <a
                      href={portfolio.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-primary/30 hover:text-primary"
                    >
                      Site live
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/portofoliu"
            className="inline-flex items-center justify-center rounded-full border border-primary/20 bg-white px-6 py-3 text-sm font-semibold text-primary transition hover:border-primary/35 hover:bg-primary/5"
          >
            Vezi toate studiile de caz web
          </Link>
        </div>
      </div>
    </section>
  );
}
