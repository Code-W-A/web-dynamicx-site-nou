import PageTitle from "@/components/Common/PageTitle";
import SinglePortfolio from "@/components/Portfolio/SinglePortfolio";
import { portfolioData } from "@/static-data/portfolio";

import { Metadata } from "next";

const siteName = process.env.SITE_NAME || "Web Dynamicx";
const siteURL = process.env.SITE_URL || "https://www.webdynamicx.ro";

export const metadata: Metadata = {
  title: `Portofoliu web design si creare site | ${siteName}`,
  description: "Proiecte realizate: creare site, magazin online si web design. Exemple reale, rezultate si tehnologii folosite. Vezi lucrarile noastre.",
  alternates: { canonical: `${siteURL}/portofoliu` },
  openGraph: {
    title: `Portofoliu web design si creare site | ${siteName}`,
    description: "Proiecte realizate: creare site, magazin online si web design. Exemple reale, rezultate si tehnologii folosite. Vezi lucrarile noastre.",
    url: `${siteURL}/portofoliu`,
    siteName: siteName,
    locale: "ro_RO",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `Portofoliu web design si creare site | ${siteName}`,
    description: "Proiecte realizate: creare site, magazin online si web design. Exemple reale, rezultate si tehnologii folosite. Vezi lucrarile noastre.",
  },
};

export default function PortfolioPage() {
  return (
    <>
      <PageTitle
        pageTitle="Portofoliu Web Dynamicx"
        pageDescription="Vezi proiecte de creare site web, magazine online si aplicatii mobile. Web design modern, viteza si SEO."
      />

      <section className="bg-[#f8f9ff] pb-20 pt-[90px]">
        <div className="container">
          <div className="portfolio-container flex justify-center">
            <div className="w-full px-4 xl:w-10/12">
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
