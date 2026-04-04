import PageTitle from "@/components/Common/PageTitle";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import CaseStudyCard from "./_components/case-study-card";
import ExpertiseStrip from "./_components/expertise-strip";
import FeaturedPortfolioSection from "./_components/featured-portfolio-section";
import PortfolioStatsStrip from "./_components/portfolio-stats-strip";
import ServiceLinkBlock from "./_components/service-link-block";
import WhyUsSection from "./_components/why-us-section";
import {
  featuredMobilePortfolioSlugs,
  getFeaturedPortfolioStudies,
  mobileAppCaseStudies,
  mobileAppsServiceHref,
  mobilePortfolioHub,
  mobilePortfolioHubPath,
} from "./mobile-app-portfolio-data";

const siteName = process.env.SITE_NAME || "Web Dynamicx";
const siteURL = process.env.SITE_URL || "https://www.webdynamicx.ro";

export const metadata: Metadata = {
  title: mobilePortfolioHub.metaTitle,
  description: mobilePortfolioHub.metaDescription,
  alternates: {
    canonical: `${siteURL}${mobilePortfolioHubPath}`,
  },
  openGraph: {
    title: mobilePortfolioHub.metaTitle,
    description: mobilePortfolioHub.metaDescription,
    url: `${siteURL}${mobilePortfolioHubPath}`,
    siteName,
    locale: "ro_RO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: mobilePortfolioHub.metaTitle,
    description: mobilePortfolioHub.metaDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function MobileAppsPortfolioHubPage() {
  const breadcrumbs = [
    { name: "Acasă", href: "/" },
    { name: "Portofoliu — aplicații mobile", current: true as const },
  ];

  const featuredStudies = getFeaturedPortfolioStudies();
  const featuredSlugSet = new Set<string>(featuredMobilePortfolioSlugs);
  const otherStudies = mobileAppCaseStudies.filter((s) => !featuredSlugSet.has(s.slug));

  return (
    <>
      <PageTitle pageTitle={mobilePortfolioHub.pageTitle} pageDescription={mobilePortfolioHub.pageDescription} breadcrumbs={breadcrumbs} />

      <div className="bg-white">
        <section
          className="relative overflow-x-clip border-b border-slate-200/80 bg-gradient-to-b from-slate-50/90 to-white py-8 sm:py-10 lg:py-11"
          aria-labelledby="portfolio-transition-heading"
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
          <div className="pointer-events-none absolute -right-24 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-primary/[0.05] blur-3xl sm:right-0 sm:h-56 sm:w-56" />
          <div className="container relative px-5">
            <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(340px,560px)] lg:items-center lg:gap-10">
              <div className="max-w-xl lg:max-w-xl lg:pt-0">
                {mobilePortfolioHub.heroLead ? (
                  <p className="text-sm leading-relaxed text-slate-600 sm:text-base">{mobilePortfolioHub.heroLead}</p>
                ) : null}
                {mobilePortfolioHub.heroImpactLine ? (
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">{mobilePortfolioHub.heroImpactLine}</p>
                ) : null}
                <h2
                  id="portfolio-transition-heading"
                  className={`text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl ${mobilePortfolioHub.heroLead || mobilePortfolioHub.heroImpactLine ? "mt-6" : ""}`}
                >
                  {mobilePortfolioHub.portfolioTransitionTitle}
                </h2>
                <p className="mt-3 max-w-xl text-base leading-relaxed text-slate-600 sm:text-[1.05rem] sm:leading-relaxed">
                  {mobilePortfolioHub.portfolioTransitionBody}
                </p>
              </div>

              <figure className="flex w-full flex-col justify-center lg:justify-end lg:pr-0">
                <Image
                  src={mobilePortfolioHub.heroAsideImage}
                  alt={mobilePortfolioHub.heroAsideImageAlt}
                  width={2400}
                  height={1400}
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="h-auto w-full max-w-2xl rounded-[1.75rem] object-contain sm:max-w-3xl sm:rounded-[2rem] lg:mx-0 lg:ml-auto lg:max-h-[min(480px,50vh)] lg:max-w-none lg:w-full"
                  priority
                />
                {mobilePortfolioHub.portfolioTransitionImageCaption ? (
                  <figcaption className="mt-3 text-center text-xs leading-snug text-slate-500 sm:text-sm lg:text-right">
                    {mobilePortfolioHub.portfolioTransitionImageCaption}
                  </figcaption>
                ) : null}
              </figure>
            </div>
          </div>
        </section>

        <PortfolioStatsStrip />

        <section className="border-b border-slate-100 py-12 sm:py-14">
          <div className="container px-5">
            <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">{mobilePortfolioHub.introHeading}</h2>
            <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-slate-600">
              <p>{mobilePortfolioHub.introParagraph1}</p>
              {mobilePortfolioHub.introParagraph2 ? <p>{mobilePortfolioHub.introParagraph2}</p> : null}
              <p>
                {mobilePortfolioHub.introConsultBefore}
                <ServiceLinkBlock>{mobilePortfolioHub.introConsultLinkText}</ServiceLinkBlock>
                {mobilePortfolioHub.introConsultAfter}
              </p>
            </div>
          </div>
        </section>

        <FeaturedPortfolioSection studies={featuredStudies} />

        <div className="border-b border-slate-100 bg-white py-8 sm:py-10">
          <div className="container px-5">
            {mobilePortfolioHub.afterFeaturedMicroCopy ? (
              <p className="mx-auto max-w-3xl text-center text-base leading-relaxed text-slate-600">
                {mobilePortfolioHub.afterFeaturedMicroCopy}
              </p>
            ) : null}
            <div className={`flex justify-center ${mobilePortfolioHub.afterFeaturedMicroCopy ? "mt-6" : ""}`}>
              <Link
                href={mobileAppsServiceHref}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(74,108,247,0.22)] transition hover:bg-primary/90 sm:text-base"
              >
                Vreau o aplicație similară
                <ArrowRight size={16} aria-hidden />
              </Link>
            </div>
          </div>
        </div>

        <section className="pt-14 pb-16 sm:pt-16 sm:pb-20">
          <div className="container px-5">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">Alte proiecte în portofoliu</h2>
                <p className="mt-3 text-base leading-relaxed text-slate-600">
                  {mobilePortfolioHub.otherProjectsIntro}{" "}
                  Poți continua cu o discuție despre{" "}
                  <span className="font-medium text-slate-800">soluții mobile pentru business</span> sau{" "}
                  <Link href="/contact" className="font-semibold text-primary underline-offset-4 hover:underline">
                    contact direct
                  </Link>
                  .
                </p>
              </div>
              <div className="flex shrink-0 flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center lg:justify-end">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(74,108,247,0.22)] transition hover:bg-primary/90"
                >
                  Solicită o ofertă
                  <ArrowRight size={16} aria-hidden />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:border-primary/35 hover:text-primary"
                >
                  Contact rapid
                </Link>
              </div>
            </div>
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              {otherStudies.map((study) => (
                <CaseStudyCard key={study.slug} study={study} showServiceLeadCta={false} />
              ))}
            </div>
          </div>
        </section>

        <ExpertiseStrip />

        <WhyUsSection />

        <section className="border-t border-slate-100 bg-slate-50/80 py-16 sm:py-20">
          <div className="container px-5">
            <div className="mx-auto max-w-3xl rounded-[2rem] border border-slate-200/80 bg-white p-8 text-center shadow-[0_20px_60px_rgba(15,23,42,0.06)] sm:p-10">
              <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">{mobilePortfolioHub.finalCtaTitle}</h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">{mobilePortfolioHub.finalCtaText}</p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href={mobileAppsServiceHref}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-base font-semibold text-white shadow-[0_14px_36px_rgba(74,108,247,0.28)] transition hover:bg-primary/90 sm:w-auto"
                >
                  Vezi serviciul de dezvoltare aplicații mobile
                  <ArrowRight size={18} aria-hidden />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center rounded-lg border border-slate-200 bg-white px-7 py-3.5 text-base font-semibold text-slate-900 shadow-sm transition hover:border-primary/30 hover:text-primary sm:w-auto"
                >
                  Trimite-ne un mesaj
                </Link>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">{mobilePortfolioHub.finalCtaTrustLine}</p>
              <p className="mt-6 text-sm text-slate-500">
                Vrei doar lista generală de site-uri? Vezi și{" "}
                <Link href="/portofoliu" className="font-medium text-primary underline-offset-4 hover:underline">
                  portofoliul web complet
                </Link>
                .
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
