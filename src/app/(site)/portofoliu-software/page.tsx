import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageTitle from "@/components/Common/PageTitle";
import JsonLd from "@/components/Common/JsonLd";
import {
  PortfolioNavigation,
  CaseStudyContact,
} from "@/components/Portfolio/CaseStudyExtras";
import {
  softwarePortfolio,
  softwarePortfolioHubPath,
} from "@/static-data/portfolio-additions";

const siteURL = process.env.SITE_URL || "https://www.webdynamicx.ro";
const title = "Software & platforme — studii de caz | Web Dynamicx";
const description =
  "Studii de caz și demo-uri software: Operio, OTP Parking, Parcare White Label, ITP White Label și FOM. Vezi administrarea, rezervările și integrările.";
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${siteURL}${softwarePortfolioHubPath}` },
  openGraph: {
    title,
    description,
    url: `${siteURL}${softwarePortfolioHubPath}`,
    type: "website",
    locale: "ro_RO",
    images: [{ url: `${siteURL}${softwarePortfolio[0].image}` }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [`${siteURL}${softwarePortfolio[0].image}`],
  },
};
export default function Page() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Acasă", item: siteURL },
            {
              "@type": "ListItem",
              position: 2,
              name: "Software & platforme",
              item: `${siteURL}${softwarePortfolioHubPath}`,
            },
          ],
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          numberOfItems: softwarePortfolio.length,
          itemListElement: softwarePortfolio.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.title,
            url: `${siteURL}${softwarePortfolioHubPath}/${item.slug}`,
          })),
        }}
      />
      <PageTitle
        pageTitle="Software construit în jurul activității tale"
        pageDescription="De la rezervări la intervenții și documente: vezi cum conectăm oamenii, informațiile și instrumentele de lucru."
        breadcrumbs={[
          { name: "Acasă", href: "/" },
          { name: "Software & platforme", current: true },
        ]}
      />
      <PortfolioNavigation />
      <section className="bg-[#f8f9ff] py-14 sm:py-20">
        <div className="container px-5">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
            {softwarePortfolio.map((study) => (
              <article
                key={study.slug}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
              >
                <Link href={`${softwarePortfolioHubPath}/${study.slug}`}>
                  <Image
                    src={study.image}
                    alt={study.imageAlt}
                    width={1440}
                    height={1000}
                    sizes="(max-width: 768px) 100vw, 550px"
                    className="aspect-[16/10] w-full object-cover object-top"
                  />
                </Link>
                <div className="p-6 sm:p-8">
                  <p className="text-primary text-xs font-semibold tracking-wide uppercase">
                    {study.clientLabel}
                  </p>
                  <h2 className="mt-3 text-2xl font-bold text-slate-950">
                    <Link href={`${softwarePortfolioHubPath}/${study.slug}`}>
                      {study.title}
                    </Link>
                  </h2>
                  <p className="mt-4 leading-7 text-slate-600">
                    {study.sortDescription}
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4">
                    <Link
                      href={`${softwarePortfolioHubPath}/${study.slug}`}
                      className="text-primary inline-flex font-semibold"
                    >
                      Vezi studiul de caz →
                    </Link>
                    {study.liveUrl && (
                      <a
                        href={study.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex font-semibold text-slate-700 hover:text-primary"
                      >
                        {study.liveLabel || "Vezi site-ul live"} ↗
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="mx-auto mt-14 max-w-4xl rounded-3xl border border-slate-200 bg-white p-8 sm:p-10">
            <h2 className="text-2xl font-bold text-slate-950">
              Ce proces vrei să simplifici?
            </h2>
            <p className="mt-4 mb-6 leading-7 text-slate-600">
              Pornim de la modul în care lucrează echipa ta și stabilim ce
              trebuie să facă software-ul, ce date folosește și cu ce sisteme se
              conectează.
            </p>
            <CaseStudyContact label="Discutăm despre software-ul pentru afacerea mea" />
          </div>
        </div>
      </section>
    </>
  );
}
