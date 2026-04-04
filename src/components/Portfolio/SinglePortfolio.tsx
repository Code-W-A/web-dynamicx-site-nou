"use client";
import { Portfolio } from "@/types/portfolio";
import {
  getPortfolioCaseStudyHref,
  getPrimaryPortfolioService,
} from "@/static-data/portfolio";
import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";

import dynamic from "next/dynamic";

export default function SinglePortfolio({
  portfolio,
}: {
  portfolio: Portfolio;
}) {
  const Lightbox = useMemo(
    () => dynamic(() => import("./LightboxClient"), { ssr: false }),
    [],
  );
  const [open, setOpen] = useState<boolean>(false);

  const relatedService = useMemo(() => getPrimaryPortfolioService(portfolio), [portfolio]);
  const caseStudyHref = useMemo(() => getPortfolioCaseStudyHref(portfolio.slug), [portfolio.slug]);

  return (
    <>
      <article id={portfolio.slug} className="mb-4 scroll-mt-28">
        {/* Show website preview if liveUrl exists, otherwise show image */}
        <div className="group shadow-service relative mb-8 overflow-hidden rounded-md bg-[#F8F9FF] aspect-[2940/1414]">
          <Image
            src={portfolio?.image}
            alt={portfolio?.imageAlt || (portfolio?.title ? `Proiect portofoliu: ${portfolio.title}` : "Proiect portofoliu")}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px"
            className="object-contain object-center bg-white"
          />
          <div className="bg-primary/[17%] pointer-events-none absolute top-0 left-0 flex h-full w-full items-center justify-center opacity-0 transition group-hover:pointer-events-auto group-hover:opacity-100">
            {portfolio?.liveUrl ? (
              <a
                href={portfolio.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glightbox bg-primary flex h-10 w-10 items-center justify-center rounded-full text-white hover:bg-primary/90 transition-colors"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" fill="white" />
                </svg>
              </a>
            ) : (
              <button
                onClick={() => setOpen(true)}
                className="glightbox bg-primary flex h-10 w-10 items-center justify-center rounded-full text-white hover:bg-primary/90 transition-colors"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" fill="white" />
                </svg>
              </button>
            )}
          </div>
        </div>
        <h3 className="mt-6">
          <Link
            href={caseStudyHref}
            className="hover:text-primary mb-3 inline-block text-xl font-semibold text-black"
          >
            {portfolio?.title}
          </Link>
        </h3>
        <p className="text-body-color text-base font-medium">
          {portfolio?.sortDescription}
        </p>
        
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <Link
            href={caseStudyHref}
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-primary/90"
          >
            Vezi studiul de caz
          </Link>
          {portfolio?.liveUrl ? (
            <a
              href={portfolio.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition-colors duration-200 hover:border-primary/30 hover:text-primary"
            >
              Vezi site-ul live ↗
            </a>
          ) : (
            <button
              onClick={() => setOpen(true)}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition-colors duration-200 hover:border-primary/30 hover:text-primary"
            >
              Vezi proiectul
            </button>
          )}
        </div>
        
        {relatedService ? (
          <div className="mt-3 text-sm text-gray-600">
            <span className="mr-1">Serviciu relevant:</span>
            <Link href={relatedService.href} className="text-primary underline">
              {relatedService.label}
            </Link>
          </div>
        ) : null}
      </article>

    </>
  );
}
