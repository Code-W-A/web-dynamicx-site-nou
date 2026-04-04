import PageTitle from "@/components/Common/PageTitle";
import SinglePortfolio from "@/components/Portfolio/SinglePortfolio";
import { portfolioData } from "@/static-data/portfolio";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Metadata } from "next";

const siteName = process.env.SITE_NAME || "Web Dynamicx";
const siteURL = process.env.SITE_URL || "https://www.webdynamicx.ro";

const portfolioMetaDescription =
  "Proiecte web: creare site, magazin online si web design. Studii de caz separate pentru aplicații mobile publicate în Google Play. Exemple reale si tehnologii folosite.";

export const metadata: Metadata = {
  title: `Portofoliu web design si creare site | ${siteName}`,
  description: portfolioMetaDescription,
  alternates: { canonical: `${siteURL}/portofoliu` },
  openGraph: {
    title: `Portofoliu web design si creare site | ${siteName}`,
    description: portfolioMetaDescription,
    url: `${siteURL}/portofoliu`,
    siteName: siteName,
    locale: "ro_RO",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `Portofoliu web design si creare site | ${siteName}`,
    description: portfolioMetaDescription,
  },
};

export default function PortfolioPage() {
  return (
    <>
      <PageTitle
        pageTitle="Portofoliu Web Dynamicx"
        pageDescription="Vezi proiecte de creare site web, magazine online si aplicatii mobile. Web design modern, viteza si SEO."
      />

      <section className="border-b border-slate-200/80 bg-white py-12 sm:py-14">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-[linear-gradient(180deg,_#f8fbff_0%,_#ffffff_100%)] p-8 shadow-[0_16px_50px_rgba(15,23,42,0.06)] sm:p-10">
            <h2 className="text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">Aplicații mobile — studii de caz</h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Proiectele de mai jos sunt site-uri și magazine online. Pentru aplicații mobile livrate și publicate în Google Play
              avem o secțiune dedicată: context, obiective, funcționalități și link către magazin — fără a amesteca mesajul cu
              oferta de servicii.
            </p>
            <Link
              href="/portofoliu-aplicatii-mobile"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(74,108,247,0.25)] transition hover:bg-primary/90"
            >
              Vezi studiile de caz cu aplicații din Google Play
              <ArrowRight size={16} aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f9ff] pb-20 pt-[90px]">
        <div className="container">
          <div className="portfolio-container flex justify-center">
            <div className="w-full px-4 xl:w-10/12">
              <h2 className="mb-10 text-center text-2xl font-bold text-black">Site-uri și magazine online</h2>
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
