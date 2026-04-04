import PageTitle from "@/components/Common/PageTitle";
import JsonLd from "@/components/Common/JsonLd";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudyCard from "../_components/case-study-card";
import DeviceScreenshotFrame from "../_components/device-screenshot-frame";
import ServiceLinkBlock from "../_components/service-link-block";
import {
  getCaseStudyBySlug,
  getRelatedCaseStudies,
  mobileAppCaseStudies,
  mobileAppsServiceHref,
  mobilePortfolioHubPath,
} from "../mobile-app-portfolio-data";

const siteName = process.env.SITE_NAME || "Web Dynamicx";
const siteURL = process.env.SITE_URL || "https://www.webdynamicx.ro";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return mobileAppCaseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { slug } = await props.params;
  const study = getCaseStudyBySlug(slug);
  if (!study) {
    return { title: "Studiu de caz | Web Dynamicx" };
  }
  const title = study.metaTitle;
  const description = study.metaDescription;
  const canonical = `${siteURL}${mobilePortfolioHubPath}/${study.slug}`;
  const baseUrl = siteURL.replace(/\/$/, "");
  const ogImageUrl = `${baseUrl}${study.image}`;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName,
      locale: "ro_RO",
      type: "article",
      images: [{ url: ogImageUrl, alt: study.imageAlt, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl],
    },
    robots: { index: true, follow: true },
  };
}

export default async function MobileCaseStudyPage(props: Props) {
  const { slug } = await props.params;
  const study = getCaseStudyBySlug(slug);
  if (!study) {
    notFound();
  }

  const related = getRelatedCaseStudies(study.relatedSlugs);
  const breadcrumbs = [
    { name: "Acasă", href: "/" },
    { name: "Aplicații mobile — studii de caz", href: mobilePortfolioHubPath },
    { name: study.cardTitle, current: true as const },
  ];

  const breadcrumbJson = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Acasă", item: siteURL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Aplicații mobile — studii de caz",
        item: `${siteURL}${mobilePortfolioHubPath}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: study.cardTitle,
        item: `${siteURL}${mobilePortfolioHubPath}/${study.slug}`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbJson} />
      <PageTitle pageTitle={study.h1} pageDescription={study.shortDescription} breadcrumbs={breadcrumbs} />

      <article className="bg-white pb-20">
        <div className="container px-5 pt-6">
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[2rem] border border-slate-200/80 bg-gradient-to-b from-slate-100 to-slate-50 shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
            <DeviceScreenshotFrame
              src={study.image}
              alt={study.imageAlt}
              variant="hero"
              priority
              sizes="(max-width: 1024px) 100vw, 360px"
            />
          </div>

          <div className="mx-auto mt-10 flex max-w-4xl flex-wrap gap-3">
            {study.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600"
              >
                {tag}
              </span>
            ))}
          </div>

          {study.playStoreUrl ? (
            <div className="mx-auto mt-8 max-w-3xl">
              <a
                href={study.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-primary/30 hover:text-primary"
              >
                Vezi în Google Play
                <ExternalLink size={16} aria-hidden />
              </a>
            </div>
          ) : null}

          {study.gallery && study.gallery.length > 0 ? (
            <section
              className="mx-auto mt-12 max-w-5xl"
              aria-label="Capturi de ecran din aplicație"
            >
              <h2 className="text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">
                Capturi din aplicație
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-slate-600 sm:text-base">
                {study.gallerySectionLead ??
                  "Interfața pe telefon, în contextul real al fluxurilor utilizatorului."}
              </p>
              <div className="mt-8 flex gap-6 overflow-x-auto overflow-y-visible pb-4 pt-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-3 [&::-webkit-scrollbar]:hidden">
                {study.gallery.map((item) => (
                  <div key={item.src} className="flex justify-center sm:block">
                    <DeviceScreenshotFrame
                      src={item.src}
                      alt={item.alt}
                      variant="gallery"
                      sizes="(max-width: 640px) 75vw, (max-width: 1024px) 40vw, 260px"
                    />
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          <div
            className={`mx-auto max-w-3xl space-y-12 ${
              study.gallery && study.gallery.length > 0
                ? "mt-14"
                : study.playStoreUrl
                  ? "mt-12"
                  : "mt-10"
            }`}
          >
            <section>
              <h2 className="text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">Context</h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">{study.context}</p>
            </section>

            <section>
              <h2 className="text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">Obiective</h2>
              <ul className="mt-4 list-inside list-disc space-y-2 text-base leading-relaxed text-slate-600">
                {study.objectives.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">Soluția propusă</h2>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-slate-600">
                {study.solution.split(/\n\n+/).map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">Funcționalități principale</h2>
              {study.featuresSectionLead ? (
                <p className="mt-4 text-base leading-relaxed text-slate-600">{study.featuresSectionLead}</p>
              ) : null}
              <ul
                className={`grid gap-3 sm:grid-cols-2 ${study.featuresSectionLead ? "mt-3" : "mt-4"}`}
              >
                {study.features.map((f) => (
                  <li
                    key={f}
                    className="rounded-2xl border border-slate-200/80 bg-slate-50/80 px-4 py-3 text-sm leading-relaxed text-slate-700"
                  >
                    {f}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">Tehnologii și livrare</h2>
              <ul className="mt-4 list-inside list-disc space-y-2 text-base leading-relaxed text-slate-600">
                {study.technologies.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">Rezultate și beneficii</h2>
              <ul className="mt-4 space-y-3">
                {study.impact.map((item) => (
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

            <section className="rounded-[2rem] border border-slate-200/80 bg-[linear-gradient(180deg,_#f8fbff_0%,_#ffffff_100%)] p-8 sm:p-10">
              <h2 className="text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">Următorul pas</h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                {study.nextStepIntro ??
                  "Dacă recunoști o problemă similară sau vrei să construiești ceva nou, detaliem împreună versiunea potrivită pentru lansare. Poți continua cu "}
                <ServiceLinkBlock>{study.serviceLinkPhrase}</ServiceLinkBlock>
                {study.nextStepOutro ?? ", apoi să ne scrii din formularul de contact."}
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href={mobileAppsServiceHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_36px_rgba(74,108,247,0.28)] transition hover:bg-primary/90"
                >
                  {study.primaryServiceCtaLabel ?? "Vezi cum lucrăm la aplicații mobile pentru business"}
                  <ArrowRight size={16} aria-hidden />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-primary/30 hover:text-primary"
                >
                  Contact
                </Link>
                <Link
                  href={mobilePortfolioHubPath}
                  className="inline-flex items-center justify-center text-sm font-semibold text-slate-700 underline-offset-4 transition hover:text-primary hover:underline"
                >
                  Înapoi la toate studiile
                </Link>
              </div>
            </section>
          </div>

          {related.length > 0 ? (
            <div className="mx-auto mt-20 max-w-6xl border-t border-slate-100 pt-16">
              <h2 className="text-2xl font-bold tracking-tight text-slate-950">Proiecte înrudite</h2>
              <p className="mt-2 max-w-2xl text-base text-slate-600">
                {study.relatedSectionIntro ??
                  "Alte aplicații din același portofoliu, cu probleme și industrii apropiate."}
              </p>
              <div className="mt-10 grid gap-8 md:grid-cols-2">
                {related.map((r) => (
                  <CaseStudyCard key={r.slug} study={r} />
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </article>
    </>
  );
}
