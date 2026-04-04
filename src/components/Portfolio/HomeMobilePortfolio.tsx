import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionTitle from "@/components/Common/SectionTitle";
import DeviceScreenshotFrame from "@/app/(site)/portofoliu-aplicatii-mobile/_components/device-screenshot-frame";
import {
  getHomepageMobilePortfolioStudies,
  mobilePortfolioHubPath,
} from "@/app/(site)/portofoliu-aplicatii-mobile/mobile-app-portfolio-data";

export default function HomeMobilePortfolio() {
  const studies = getHomepageMobilePortfolioStudies();

  return (
    <section id="mobile-portfolio" className="border-t border-slate-100 bg-white pb-[70px] pt-[90px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <SectionTitle
              mainTitle="Portofoliu aplicații mobile"
              title="Studii de caz reale"
              paragraph="Trei exemple de aplicații mobile lansate pentru business-uri reale: retenție, obiceiuri zilnice și programări."
              center
            />
            <div className="mb-16 mt-8 text-center">
              <Link
                href={mobilePortfolioHubPath}
                className="group inline-flex items-center justify-center gap-3 rounded-xl border-2 border-primary/20 bg-white px-8 py-4 text-base font-semibold text-primary shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-gray-50 hover:shadow-lg"
              >
                <svg className="h-5 w-5 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 11c-3.31 0-6-1.57-7.57-3.5C6 10.07 8.69 8.5 12 8.5s6 1.57 7.57 3.5C18 13.93 15.31 15.5 12 15.5zm0-5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
                </svg>
                Vezi portofoliul complet de aplicații mobile
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mx-auto w-full px-4 xl:w-10/12">
          <div className="grid gap-8 lg:grid-cols-3">
            {studies.map((study) => {
              const href = `${mobilePortfolioHubPath}/${study.slug}`;
              const pitch = study.hubSpotlightParagraph ?? study.shortDescription;

              return (
                <article
                  key={study.slug}
                  className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-b from-slate-50/80 to-white shadow-[0_16px_42px_rgba(15,23,42,0.06)]"
                >
                  <Link href={href} className="relative block min-h-[170px] bg-gradient-to-b from-slate-100 to-slate-50/90">
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
                    <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-600 sm:text-base">{pitch}</p>
                    <div className="mt-auto pt-6">
                      <Link
                        href={href}
                        className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(74,108,247,0.2)] transition hover:bg-primary/90"
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
        </div>
      </div>
    </section>
  );
}
