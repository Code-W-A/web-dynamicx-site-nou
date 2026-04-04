import PageTitle from "@/components/Common/PageTitle";
import SingleService from "@/components/Home/Service/SingleService";
import { serviceData } from "@/static-data/service";
import Link from "next/link";

import { Metadata } from "next";

const siteName = process.env.SITE_NAME || "Web Dynamicx";
const siteURL = process.env.SITE_URL || "https://www.webdynamicx.ro";

export const metadata: Metadata = {
  title: `Serviciile Web Dynamicx | Direcții de lucru și specializări`,
  description:
    "Pagină-umbrelă cu toate serviciile Web Dynamicx. Aici alegi direcția potrivită, iar fiecare serviciu are pagina lui dedicată pentru ofertă, proces și exemple relevante.",
  alternates: { canonical: `${siteURL}/servicii` },
  openGraph: {
    title: `Serviciile Web Dynamicx | Direcții de lucru și specializări`,
    description:
      "Pagină-umbrelă cu toate serviciile Web Dynamicx. Aici alegi direcția potrivită, iar fiecare serviciu are pagina lui dedicată pentru ofertă, proces și exemple relevante.",
    url: `${siteURL}/servicii`,
    siteName: siteName,
    locale: "ro_RO",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `Serviciile Web Dynamicx | Direcții de lucru și specializări`,
    description:
      "Pagină-umbrelă cu toate serviciile Web Dynamicx. Aici alegi direcția potrivită, iar fiecare serviciu are pagina lui dedicată pentru ofertă, proces și exemple relevante.",
  },
};

export default function page() {
  return (
    <>
      <PageTitle
        pageTitle="Serviciile Web Dynamicx"
        pageDescription="Aceasta este pagina-umbrelă pentru toate specializările noastre. Dacă vrei ofertă, proces și exemple aplicate, intră pe pagina serviciului care se potrivește obiectivului tău."
      />

      <section className="bg-gray-50 pt-[90px] pb-20">
        <div className="container grid gap-8 sm:grid-cols-[repeat(auto-fill,minmax(24rem,1fr))]">
          {serviceData.map((service) => (
            <SingleService key={service?.id} service={service} />
          ))}
        </div>
      </section>

      <section className="bg-white border-t border-gray-100 pt-14 pb-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-2xl font-bold text-black sm:text-3xl">Nu ești sigur ce direcție ți se potrivește?</h2>
            <p className="mx-auto max-w-2xl text-base text-body-color">
              Dacă ai nevoie de claritate între website nou, magazin online, SEO sau mentenanță, te ajutăm să alegi pagina de serviciu potrivită și să construim un plan coerent, fără să amestecăm intențiile comerciale între URL-uri.
            </p>
            <div className="mt-6 flex items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-white shadow hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                Cere ofertă
              </Link>
              <Link
                href="/servicii/creare-site-web#preturi"
                className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors duration-200 underline decoration-2 underline-offset-4 hover:decoration-primary/60"
              >
                Vezi prețuri orientative
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
