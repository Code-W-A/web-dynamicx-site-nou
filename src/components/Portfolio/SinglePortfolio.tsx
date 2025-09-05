"use client";
import { Portfolio } from "@/types/portfolio";
import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";
import WebsitePreview from "./WebsitePreview";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function SinglePortfolio({
  portfolio,
}: {
  portfolio: Portfolio;
}) {
  const [open, setOpen] = useState<boolean>(false);

  const relatedService = useMemo(() => {
    const tags = (portfolio.tags || []).map((t) => t.toLowerCase());
    if (tags.includes("marketing")) return { href: "/servicii/optimizare-seo-site", label: "optimizare SEO site" };
    if (tags.includes("hospitality") || tags.includes("ecommerce") || tags.includes("magazin")) return { href: "/servicii/creare-magazin-online", label: "creare magazin online" };
    if (tags.includes("content")) return { href: "/servicii/web-design", label: "servicii webdesign" };
    if (tags.includes("web design") || tags.includes("premium") || tags.includes("b2b")) return { href: "/servicii/creare-site-prezentare", label: "creare site de prezentare" };
    return { href: "/servicii/creare-site-web", label: "creare site web" };
  }, [portfolio.tags]);

  return (
    <>
      <div className="mb-4">
        {/* Show website preview if liveUrl exists, otherwise show image */}
        {portfolio?.liveUrl ? (
          <div className="shadow-service mb-8 overflow-hidden rounded-md bg-[#F8F9FF]" style={{ aspectRatio: "2940 / 1414" }}>
            <WebsitePreview
              url={portfolio.liveUrl}
              title={portfolio.title}
              fallbackImage={portfolio.image as string}
              className="w-full"
            />
          </div>
        ) : (
          <div className="group shadow-service relative mb-8 overflow-hidden rounded-md bg-[#F8F9FF]" style={{ aspectRatio: "2940 / 1414" }}>
            <Image
              src={portfolio?.image}
              alt={portfolio?.title ? `Proiect portofoliu: ${portfolio.title}` : "Proiect portofoliu"}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover object-center"
            />
            <div className="bg-primary/[17%] pointer-events-none absolute top-0 left-0 flex h-full w-full items-center justify-center opacity-0 transition group-hover:pointer-events-auto group-hover:opacity-100">
              <button
                onClick={() => setOpen(true)}
                className="glightbox bg-primary flex h-10 w-10 items-center justify-center rounded-full text-white"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="white" />
                </svg>
              </button>
            </div>
          </div>
        )}
        <h3 className="mt-6">
          <Link
            href={`/portofoliu/${portfolio?.slug}`}
            className="hover:text-primary mb-3 inline-block text-xl font-semibold text-black"
          >
            {portfolio?.title}
          </Link>
        </h3>
        <p className="text-body-color text-base font-medium">
          {portfolio?.sortDescription}
        </p>
        <div className="mt-3 text-sm text-gray-600">
          <span className="mr-1">Vezi serviciul relevant:</span>
          <Link href={relatedService.href} className="text-primary underline">
            {relatedService.label}
          </Link>
        </div>
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[
          {
            src: portfolio?.image as string,
          },
        ]}
      />
    </>
  );
}
