import type { Portfolio } from "@/types/portfolio";
import {
  getPortfolioCaseStudyHref,
  getPrimaryPortfolioService,
} from "@/static-data/portfolio";
import Image from "next/image";
import Link from "next/link";

export default function SinglePortfolio({
  portfolio,
}: {
  portfolio: Portfolio;
}) {
  const relatedService = getPrimaryPortfolioService(portfolio);
  const caseStudyHref = getPortfolioCaseStudyHref(portfolio.slug);
  return (
    <article id={portfolio.slug} className="mb-4 scroll-mt-28">
      <Link
        href={caseStudyHref}
        className="shadow-service relative mb-8 block aspect-[16/10] overflow-hidden rounded-md bg-white"
      >
        <Image
          src={portfolio.image}
          alt={portfolio.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px"
          className="object-cover object-top"
        />
      </Link>
      <h3 className="mt-6">
        <Link
          href={caseStudyHref}
          className="hover:text-primary mb-3 inline-block text-xl font-semibold text-black"
        >
          {portfolio.title}
        </Link>
      </h3>
      <p className="text-body-color text-base font-medium">
        {portfolio.sortDescription}
      </p>
      {portfolio.status && (
        <p className="mt-3 text-sm text-slate-600">{portfolio.status}</p>
      )}
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <Link
          href={caseStudyHref}
          className="bg-primary hover:bg-primary/90 inline-flex items-center rounded-lg px-4 py-2 text-sm font-medium text-white"
        >
          Vezi studiul de caz
        </Link>
        {portfolio.liveUrl && (
          <a
            href={portfolio.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:border-primary/30 hover:text-primary inline-flex items-center rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700"
          >
            {portfolio.liveLabel || "Vezi site-ul live"} ↗
          </a>
        )}
      </div>
      {relatedService && (
        <div className="mt-3 text-sm text-gray-600">
          Serviciu relevant:{" "}
          <Link href={relatedService.href} className="text-primary underline">
            {relatedService.label}
          </Link>
        </div>
      )}
    </article>
  );
}
