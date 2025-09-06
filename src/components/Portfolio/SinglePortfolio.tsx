"use client";
import { Portfolio } from "@/types/portfolio";
import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";
import WebsitePreview from "./WebsitePreview";

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
        <div className="group shadow-service relative mb-8 overflow-hidden rounded-md bg-[#F8F9FF] aspect-[2940/1414]">
          <Image
            src={portfolio?.image}
            alt={portfolio?.title ? `Proiect portofoliu: ${portfolio.title}` : "Proiect portofoliu"}
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
            href={`/portofoliu`}
            className="hover:text-primary mb-3 inline-block text-xl font-semibold text-black"
          >
            {portfolio?.title}
          </Link>
        </h3>
        <p className="text-body-color text-base font-medium">
          {portfolio?.sortDescription}
        </p>
        
        {/* Vezi proiect button */}
        <div className="mt-4">
          {portfolio?.liveUrl ? (
            <a
              href={portfolio.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
            >
              Vezi proiect ↗
            </a>
          ) : (
            <button
              onClick={() => setOpen(true)}
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
            >
              Vezi proiect
            </button>
          )}
        </div>
        
        <div className="mt-3 text-sm text-gray-600">
          <span className="mr-1">Vezi serviciul relevant:</span>
          <Link href={relatedService.href} className="text-primary underline">
            {relatedService.label}
          </Link>
        </div>
      </div>

   
    </>
  );
}
