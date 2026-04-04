import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageTitle from "@/components/Common/PageTitle";
import JsonLd from "@/components/Common/JsonLd";
import {
  getPortfolioBySlug,
  getPortfolioCaseStudyHref,
  getPortfolioServiceMeta,
  getRelatedPortfolioItems,
  portfolioData,
  portfolioHubPath,
} from "@/static-data/portfolio";

const siteName = process.env.SITE_NAME || "Web Dynamicx";
const siteURL = process.env.SITE_URL || "https://www.webdynamicx.ro";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return portfolioData.map((portfolio) => ({ slug: portfolio.slug }));
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { slug } = await props.params;
  const portfolio = getPortfolioBySlug(slug);

  if (!portfolio) {
    return { title: `Portofoliu web | ${siteName}` };
  }

  const canonical = `${siteURL}${getPortfolioCaseStudyHref(portfolio.slug)}`;
  const ogImageUrl = `${siteURL.replace(/\/$/, "")}${portfolio.image}`;

  return {
    title: portfolio.metaTitle,
    description: portfolio.metaDescription,
    alternates: { canonical },
    robots: { index: true, follow: true },
    openGraph: {
      title: portfolio.metaTitle,
      description: portfolio.metaDescription,
      url: canonical,
      siteName,
      locale: "ro_RO",
      type: "article",
      images: [{ url: ogImageUrl, alt: portfolio.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: portfolio.metaTitle,
      description: portfolio.metaDescription,
      images: [ogImageUrl],
    },
  };
}

export default async function PortfolioCaseStudyPage(props: Props) {
  const { slug } = await props.params;
  const portfolio = getPortfolioBySlug(slug);

  if (!portfolio) {
    notFound();
  }

  const related = getRelatedPortfolioItems(portfolio.relatedSlugs);
  const canonical = `${siteURL}${getPortfolioCaseStudyHref(portfolio.slug)}`;
  const breadcrumbs = [
    { name: "Acasă", href: "/" },
    { name: "Portofoliu", href: portfolioHubPath },
    { name: portfolio.title, current: true as const },
  ];

  const breadcrumbJson = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Acasă", item: siteURL },
      { "@type": "ListItem", position: 2, name: "Portofoliu", item: `${siteURL}${portfolioHubPath}` },
      { "@type": "ListItem", position: 3, name: portfolio.title, item: canonical },
    ],
  };

  const creativeWorkJson = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: portfolio.headline,
    description: portfolio.metaDescription,
    url: canonical,
    image: `${siteURL.replace(/\/$/, "")}${portfolio.image}`,
    creator: {
      "@type": "Organization",
      name: "Web Dynamicx",
      url: siteURL,
    },
    about: portfolio.clientLabel,
    keywords: portfolio.tags.join(", "),
    isPartOf: `${siteURL}${portfolioHubPath}`,
  };

  return (
    <>
      <JsonLd data={breadcrumbJson} />
      <JsonLd data={creativeWorkJson} />

      <PageTitle pageTitle={portfolio.headline} pageDescription={portfolio.sortDescription} breadcrumbs={breadcrumbs} />

      <article className="bg-white pb-20">
        <div className="container px-5 pt-6">
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-slate-200/80 bg-slate-50 shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
            <Image
              src={portfolio.image}
              alt={portfolio.imageAlt}
              width={1800}
              height={1012}
              priority
              sizes="(max-width: 1200px) 100vw, 1100px"
              className="h-auto w-full object-cover object-top"
            />
          </div>

          <div className="mx-auto mt-10 flex max-w-4xl flex-wrap gap-3">
            <span className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {portfolio.clientLabel}
            </span>
            {portfolio.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mx-auto mt-8 max-w-4xl rounded-[2rem] border border-slate-200/80 bg-[linear-gradient(180deg,_#f8fbff_0%,_#ffffff_100%)] p-8 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_300px]">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-950">Contextul proiectului</h2>
                <p className="mt-4 text-base leading-8 text-slate-600">{portfolio.context}</p>
              </div>

              <aside className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-[0_14px_40px_rgba(15,23,42,0.05)]">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80">Link util</span>
                <h3 className="mt-3 text-xl font-semibold text-slate-950">Site live</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Dacă vrei să vezi proiectul în contextul lui real, poți deschide website-ul public.
                </p>
                {portfolio.liveUrl ? (
                  <a
                    href={portfolio.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-primary/90"
                  >
                    Deschide site-ul
                  </a>
                ) : null}
              </aside>
            </div>
          </div>

          <div className="mx-auto mt-14 max-w-4xl space-y-12">
            <section>
              <h2 className="text-2xl font-bold tracking-tight text-slate-950">Provocarea</h2>
              <p className="mt-4 text-base leading-8 text-slate-600">{portfolio.challenge}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-slate-950">Soluția propusă</h2>
              <p className="mt-4 text-base leading-8 text-slate-600">{portfolio.solution}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-slate-950">Ce demonstrează acest proiect</h2>
              <ul className="mt-4 space-y-3">
                {portfolio.outcome.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 rounded-2xl border border-slate-100 bg-white p-4 text-sm leading-relaxed text-slate-700 shadow-[0_8px_30px_rgba(15,23,42,0.04)]"
                  >
                    <span className="mt-0.5 shrink-0 font-semibold text-primary">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-[2rem] border border-slate-200/80 bg-slate-50/70 p-8 sm:p-10">
              <h2 className="text-2xl font-bold tracking-tight text-slate-950">Servicii susținute de acest studiu de caz</h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Pagina aceasta funcționează ca dovadă intern-linkată pentru serviciile comerciale relevante, nu doar ca o galerie vizuală.
              </p>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {portfolio.supportedServices.map((service) => {
                  const serviceMeta = getPortfolioServiceMeta(service.slug);
                  if (!serviceMeta) {
                    return null;
                  }

                  return (
                    <article
                      key={service.slug}
                      className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-[0_12px_36px_rgba(15,23,42,0.05)]"
                    >
                      <h3 className="text-lg font-semibold text-slate-950">
                        <Link href={serviceMeta.href} className="transition hover:text-primary">
                          {serviceMeta.label}
                        </Link>
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">{service.reason}.</p>
                    </article>
                  );
                })}
              </div>
            </section>

            <section className="rounded-[2rem] border border-slate-200/80 bg-[linear-gradient(180deg,_#f8fbff_0%,_#ffffff_100%)] p-8 sm:p-10">
              <h2 className="text-2xl font-bold tracking-tight text-slate-950">Următorul pas</h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Dacă vrei un proiect similar, poți continua către serviciul care se potrivește cel mai bine obiectivului tău sau poți vedea toate studiile de caz web din portofoliu.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {portfolio.supportedServices.slice(0, 2).map((service) => {
                  const serviceMeta = getPortfolioServiceMeta(service.slug);
                  if (!serviceMeta) {
                    return null;
                  }

                  return (
                    <Link
                      key={service.slug}
                      href={serviceMeta.href}
                      className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_36px_rgba(74,108,247,0.28)] transition hover:bg-primary/90"
                    >
                      Vezi {serviceMeta.label}
                    </Link>
                  );
                })}
                <Link
                  href={portfolioHubPath}
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-primary/30 hover:text-primary"
                >
                  Înapoi la portofoliu
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center text-sm font-semibold text-slate-700 underline-offset-4 transition hover:text-primary hover:underline"
                >
                  Contact
                </Link>
              </div>
            </section>
          </div>

          {related.length > 0 ? (
            <div className="mx-auto mt-20 max-w-6xl border-t border-slate-100 pt-16">
              <h2 className="text-2xl font-bold tracking-tight text-slate-950">Studii de caz înrudite</h2>
              <p className="mt-2 max-w-2xl text-base text-slate-600">
                Alte proiecte web care susțin servicii apropiate și ajută la înțelegerea modului în care lucrăm pe nișe diferite.
              </p>

              <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                {related.map((item) => (
                  <article
                    key={item.slug}
                    className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.06)]"
                  >
                    <Link href={getPortfolioCaseStudyHref(item.slug)} className="block">
                      <div className="relative aspect-[16/10] bg-slate-100">
                        <Image
                          src={item.image}
                          alt={item.imageAlt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 33vw"
                          className="object-cover object-top"
                        />
                      </div>
                    </Link>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-slate-950">
                        <Link href={getPortfolioCaseStudyHref(item.slug)} className="transition hover:text-primary">
                          {item.title}
                        </Link>
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{item.sortDescription}</p>
                      <Link
                        href={getPortfolioCaseStudyHref(item.slug)}
                        className="mt-5 inline-flex items-center text-sm font-semibold text-primary underline-offset-4 hover:underline"
                      >
                        Vezi studiul de caz
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </article>
    </>
  );
}
