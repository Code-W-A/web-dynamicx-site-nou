import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { MobileCaseStudy } from "../mobile-app-portfolio-data";
import { mobilePortfolioHub, mobilePortfolioHubPath } from "../mobile-app-portfolio-data";
import DeviceScreenshotFrame from "./device-screenshot-frame";
import ServiceLinkBlock from "./service-link-block";

type Props = {
  studies: MobileCaseStudy[];
  /** Pe pagina de servicii mobile: copy dedicat + fără link circular în intro. */
  embeddedOnServicePage?: boolean;
  /** Afișează toate studiile (ex. servicii); altfel rămâne logica hub cu link spre serviciu în intro. */
  listAllStudies?: boolean;
};

export default function FeaturedPortfolioSection({
  studies,
  embeddedOnServicePage = false,
  listAllStudies = false,
}: Props) {
  const headingId = listAllStudies ? "mobile-portfolio-service-heading" : "featured-portfolio-heading";
  const sectionClasses = embeddedOnServicePage
    ? "border-b border-slate-100 bg-white py-10 sm:py-12"
    : "border-b border-slate-100 bg-white py-14 sm:py-16";
  const gridClasses = embeddedOnServicePage ? "mt-8 grid gap-5 lg:grid-cols-3" : "mt-10 grid gap-8 lg:grid-cols-3";

  return (
    <section className={sectionClasses} aria-labelledby={headingId}>
      <div className="container px-5">
        <h2 id={headingId} className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
          {listAllStudies ? mobilePortfolioHub.servicePagePortfolioHeading : mobilePortfolioHub.featuredHeading}
        </h2>
        {listAllStudies ? (
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-600">
            {mobilePortfolioHub.servicePagePortfolioIntro}
          </p>
        ) : (
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-600">
            {mobilePortfolioHub.featuredIntroBefore}
            {embeddedOnServicePage ? (
              <span className="font-semibold text-slate-800">{mobilePortfolioHub.featuredServiceLinkAnchor}</span>
            ) : (
              <ServiceLinkBlock>{mobilePortfolioHub.featuredServiceLinkAnchor}</ServiceLinkBlock>
            )}
            {mobilePortfolioHub.featuredIntroAfter}
          </p>
        )}
        <div className={gridClasses}>
          {studies.map((study) => {
            const href = `${mobilePortfolioHubPath}/${study.slug}`;
            const pitch = study.hubSpotlightParagraph ?? study.shortDescription;
            return (
              <article
                key={study.slug}
                className="flex flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-b from-slate-50/80 to-white shadow-[0_16px_42px_rgba(15,23,42,0.06)]"
              >
                <Link href={href} className="relative block min-h-[160px] bg-gradient-to-b from-slate-100 to-slate-50/90">
                  <DeviceScreenshotFrame
                    src={study.image}
                    alt={study.imageAlt}
                    variant="card"
                    sizes="(max-width: 1024px) 90vw, 280px"
                  />
                </Link>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="text-lg font-bold tracking-tight text-slate-950">
                    <Link href={href} className="transition hover:text-primary">
                      {study.cardTitle}
                    </Link>
                  </h3>
                  <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-slate-600 sm:text-base">{pitch}</p>
                  <div className="mt-auto flex flex-col gap-2 pt-6 sm:flex-row sm:flex-wrap sm:items-start">
                    <Link
                      href={href}
                      className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(74,108,247,0.2)] transition hover:bg-primary/90"
                    >
                      {study.cardPrimaryCtaLabel ?? "Descoperă proiectul"}
                      <ArrowRight size={15} aria-hidden />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        {embeddedOnServicePage ? (
          <p className="mx-auto mt-7 max-w-3xl text-center text-sm leading-relaxed text-slate-600 sm:text-base">
            <Link
              href={mobilePortfolioHubPath}
              className="font-semibold text-primary underline-offset-4 transition hover:underline"
            >
              Vezi portofoliul complet de aplicații mobile
            </Link>
          </p>
        ) : null}
      </div>
    </section>
  );
}
