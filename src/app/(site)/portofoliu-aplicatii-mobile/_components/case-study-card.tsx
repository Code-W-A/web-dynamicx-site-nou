import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import type { MobileCaseStudy } from "../mobile-app-portfolio-data";
import { mobileAppsServiceHref, mobilePortfolioHubPath } from "../mobile-app-portfolio-data";
import DeviceScreenshotFrame from "./device-screenshot-frame";

type Props = {
  study: MobileCaseStudy;
  /** Link secundar către serviciu; pe hub îl limităm pentru a evita overlinking. */
  showServiceLeadCta?: boolean;
};

export default function CaseStudyCard({ study, showServiceLeadCta = true }: Props) {
  const href = `${mobilePortfolioHubPath}/${study.slug}`;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_16px_50px_rgba(15,23,42,0.06)] transition hover:border-primary/20 hover:shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
      <Link
        href={href}
        className="relative block min-h-[200px] bg-gradient-to-b from-slate-100 to-slate-50/90 transition group-hover:from-slate-50 group-hover:to-white"
      >
        <DeviceScreenshotFrame
          src={study.image}
          alt={study.imageAlt}
          variant="card"
          sizes="(max-width: 768px) 45vw, 220px"
        />
      </Link>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="mb-3 flex flex-wrap gap-2">
          {study.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-bold tracking-tight text-slate-950">
          <Link href={href} className="transition hover:text-primary">
            {study.cardTitle}
          </Link>
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">{study.shortDescription}</p>
        <ul className="mt-4 space-y-1.5 text-sm leading-relaxed text-slate-600">
          {study.cardBullets.map((b) => (
            <li key={b} className="flex gap-2">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden />
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-1 flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
          <Link
            href={href}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(74,108,247,0.25)] transition hover:bg-primary/90"
          >
            {study.cardPrimaryCtaLabel ?? "Descoperă proiectul"}
            <ArrowRight size={16} aria-hidden />
          </Link>
          {showServiceLeadCta ? (
            <Link
              href={mobileAppsServiceHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-primary/35 hover:text-primary"
            >
              Discută un proiect asemănător
            </Link>
          ) : null}
          {study.playStoreUrl ? (
            <a
              href={study.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-primary/35 hover:text-primary"
            >
              Vezi aplicația
              <ExternalLink size={15} className="opacity-70" aria-hidden />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
