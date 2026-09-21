import PageTitle from "@/components/Common/PageTitle";
import { PortfolioNavigation } from "@/components/Portfolio/CaseStudyExtras";
import SinglePortfolio from "@/components/Portfolio/SinglePortfolio";
import { portfolioData } from "@/static-data/portfolio";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Metadata } from "next";

const siteName = process.env.SITE_NAME || "Web Dynamicx";
const siteURL = process.env.SITE_URL || "https://www.webdynamicx.ro";

const portfolioMetaDescription =
  "Studii de caz web pentru creare site, magazin online, web design si SEO. Proiecte reale cu pagini interne dedicate pentru servicii si portofoliu.";

export const metadata: Metadata = {
  title: `Portofoliu web - studii de caz pentru site-uri si magazine online | ${siteName}`,
  description: portfolioMetaDescription,
  alternates: { canonical: `${siteURL}/portofoliu` },
  openGraph: {
    title: `Portofoliu web - studii de caz pentru site-uri si magazine online | ${siteName}`,
    description: portfolioMetaDescription,
    url: `${siteURL}/portofoliu`,
    siteName: siteName,
    locale: "ro_RO",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `Portofoliu web - studii de caz pentru site-uri si magazine online | ${siteName}`,
    description: portfolioMetaDescription,
  },
};

export default function PortfolioPage() {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Acasă",
        item: `${siteURL}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Portofoliu",
        item: `${siteURL}/portofoliu`,
      },
    ],
  };

  const portfolioItemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    numberOfItems: portfolioData.length,
    itemListElement: portfolioData.map((portfolio, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${siteURL}/portofoliu/${portfolio.slug}`,
      name: portfolio.title,
      item: {
        "@type": "CreativeWork",
        name: portfolio.title,
        url: `${siteURL}/portofoliu/${portfolio.slug}`,
        description: portfolio.metaDescription,
        image: portfolio.image ? `${siteURL}${portfolio.image}` : undefined,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        // @ts-ignore
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        // @ts-ignore
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(portfolioItemListLd),
        }}
      />
      <PageTitle
        pageTitle="Portofoliu Web Dynamicx"
        pageDescription="Site-uri de prezentare, magazine online și produse web. Vezi ce avea nevoie fiecare business și ce am realizat."
        breadcrumbs={[
          { name: "Acasă", href: "/" },
          { name: "Portofoliu", current: true },
        ]}
      />

      <PortfolioNavigation />
      <section className="border-b border-slate-200/80 bg-white py-12 sm:py-14">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-[linear-gradient(180deg,_#f8fbff_0%,_#ffffff_100%)] p-8 shadow-[0_16px_50px_rgba(15,23,42,0.06)] sm:p-10">
            <h2 className="text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">
              Aplicații mobile — studii de caz
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Descoperă și aplicațiile mobile: capturi, funcționalități și
              stadiul fiecărui produs, de la rezervări până la echipe în teren.
            </p>
            <Link
              href="/portofoliu-aplicatii-mobile"
              className="bg-primary hover:bg-primary/90 mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(74,108,247,0.25)] transition"
            >
              Vezi studiile de caz cu aplicații din Google Play
              <ArrowRight size={16} aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f9ff] pt-[90px] pb-20">
        <div className="container">
          <div className="portfolio-container flex justify-center">
            <div className="w-full px-4 xl:w-10/12">
              <h2 className="mb-4 text-center text-2xl font-bold text-black">
                Studii de caz web
              </h2>
              <p className="mx-auto mb-10 max-w-3xl text-center text-base leading-8 text-slate-600">
                Vezi problema fiecărui business, soluția realizată și cum poate
                arăta un proiect similar pentru tine.
              </p>
              <div className="grid gap-8 md:grid-cols-2">
                {portfolioData.map((portfolio) => (
                  <SinglePortfolio key={portfolio?.id} portfolio={portfolio} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
