import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import type { Portfolio } from "@/types/portfolio";
import PageTitle from "@/components/Common/PageTitle";
import JsonLd from "@/components/Common/JsonLd";
import { getPortfolioServiceMeta } from "@/static-data/portfolio";
import {
  CaseStudyContact,
  CaseStudyGallery,
  PortfolioNavigation,
  RelatedProjectLinks,
} from "./CaseStudyExtras";

const siteURL = process.env.SITE_URL || "https://www.webdynamicx.ro";
export function caseStudyMetadata(study: Portfolio, hub: string): Metadata {
  const url = `${siteURL}${hub}/${study.slug}`;
  const images = [{ url: `${siteURL}${study.image}`, alt: study.imageAlt }];
  return {
    title: study.metaTitle,
    description: study.metaDescription,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      title: study.metaTitle,
      description: study.metaDescription,
      url,
      type: "article",
      locale: "ro_RO",
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: study.metaTitle,
      description: study.metaDescription,
      images,
    },
  };
}

export default function CaseStudyPage({
  study,
  hub,
  hubLabel,
  related,
}: {
  study: Portfolio;
  hub: string;
  hubLabel: string;
  related: Portfolio[];
}) {
  const url = `${siteURL}${hub}/${study.slug}`;
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Acasă", item: siteURL },
            {
              "@type": "ListItem",
              position: 2,
              name: hubLabel,
              item: `${siteURL}${hub}`,
            },
            { "@type": "ListItem", position: 3, name: study.title, item: url },
          ],
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: study.headline,
          description: study.metaDescription,
          url,
          image: `${siteURL}${study.image}`,
          about: study.clientLabel,
          keywords: study.tags.join(", "),
          isPartOf: `${siteURL}${hub}`,
          creator: {
            "@type": "Organization",
            name: "Web Dynamicx",
            url: siteURL,
          },
        }}
      />
      <PageTitle
        pageTitle={study.headline}
        pageDescription={study.sortDescription}
        breadcrumbs={[
          { name: "Acasă", href: "/" },
          { name: hubLabel, href: hub },
          { name: study.title, current: true },
        ]}
      />
      <PortfolioNavigation />
      <article className="bg-white pb-20">
        <div className="container px-5">
          <div className="mx-auto max-w-5xl">
            <div className="mb-8 flex flex-wrap items-center gap-4">
              <CaseStudyContact label={study.ctaLabel} />
              {study.liveUrl && (
                <a
                  href={study.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700"
                >
                  {study.liveLabel || "Vezi site-ul live"} ↗
                </a>
              )}
            </div>
            {study.status && (
              <p className="mb-5 text-sm font-medium text-slate-600">
                {study.status}
              </p>
            )}
            <Image
              src={study.image}
              alt={study.imageAlt}
              width={1440}
              height={1000}
              priority
              sizes="(max-width: 1200px) 100vw, 1100px"
              className="h-auto w-full rounded-[2rem] border border-slate-200 shadow-sm"
            />
            <div className="mt-8 flex flex-wrap gap-3">
              {[study.clientLabel, ...study.tags].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="mx-auto mt-12 max-w-4xl space-y-12">
            {[
              ["Contextul proiectului", study.context],
              ["Provocarea", study.challenge],
              ["Ce am realizat", study.solution],
            ].map(([title, text]) => (
              <section key={title}>
                <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                  {title}
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  {text}
                </p>
              </section>
            ))}
            <CaseStudyGallery gallery={study.gallery} />
            <section>
              <h2 className="text-2xl font-bold text-slate-950">
                Ce demonstrează acest proiect
              </h2>
              <ul className="mt-5 space-y-3">
                {study.outcome.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-slate-100 bg-slate-50 p-5 text-slate-700"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>
            <RelatedProjectLinks projects={study.relatedProjects} />
            {study.supportedServices.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-slate-950">
                  Servicii pentru un proiect similar
                </h2>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {study.supportedServices.map((service) => {
                    const meta = getPortfolioServiceMeta(service.slug);
                    return meta ? (
                      <div
                        key={service.slug}
                        className="rounded-2xl border border-slate-200 p-5"
                      >
                        <Link
                          href={meta.href}
                          className="text-primary font-semibold"
                        >
                          {meta.label}
                        </Link>
                        <p className="mt-3 text-sm leading-7 text-slate-600">
                          {service.reason}.
                        </p>
                      </div>
                    ) : null;
                  })}
                </div>
              </section>
            )}
            <section className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 sm:p-10">
              <h2 className="text-2xl font-bold text-slate-950">
                Ai nevoie de o soluție similară?
              </h2>
              <p className="mt-4 mb-6 leading-7 text-slate-600">
                Spune-ne ce vrei să poată face utilizatorii sau echipa ta.
                Discutăm fluxurile, integrările și pașii necesari pentru
                proiectul tău.
              </p>
              <CaseStudyContact label={study.ctaLabel} />
            </section>
            {related.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-slate-950">
                  Studii de caz înrudite
                </h2>
                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  {related.map((item) => (
                    <Link
                      key={item.slug}
                      href={`${hub}/${item.slug}`}
                      className="hover:border-primary rounded-2xl border border-slate-200 p-6 transition"
                    >
                      <h3 className="text-lg font-semibold text-slate-950">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {item.sortDescription}
                      </p>
                      <span className="text-primary mt-4 block font-semibold">
                        Vezi studiul de caz →
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            )}
            <Link href={hub} className="text-primary inline-flex font-semibold">
              ← Înapoi la {hubLabel.toLowerCase()}
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
