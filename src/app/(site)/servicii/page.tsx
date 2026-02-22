import PageTitle from "@/components/Common/PageTitle";
import SingleService from "@/components/Home/Service/SingleService";
import { serviceData } from "@/static-data/service";
import Link from "next/link";

import { Metadata } from "next";

const siteName = process.env.SITE_NAME || "Web Dynamicx";
const siteURL = process.env.SITE_URL || "https://www.webdynamicx.ro";

export const metadata: Metadata = {
  title: `Servicii digitale: web design, creare site, SEO | ${siteName}`,
  description: "Listă completă de servicii: web design, creare site de prezentare, creare magazin online, servicii SEO profesionale și mentenanță website.",
  alternates: { canonical: `${siteURL}/servicii` },
  openGraph: {
    title: `Servicii digitale: web design, creare site, SEO | ${siteName}`,
    description: "Listă completă de servicii: web design, creare site de prezentare, creare magazin online, servicii SEO profesionale și mentenanță website.",
    url: `${siteURL}/servicii`,
    siteName: siteName,
    locale: "ro_RO",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `Servicii digitale: web design, creare site, SEO | ${siteName}`,
    description: "Listă completă de servicii: web design, creare site de prezentare, creare magazin online, servicii SEO profesionale și mentenanță website.",
  },
};

export default function page() {
  return (
    <>
      <PageTitle
        pageTitle="Servicii digitale"
        pageDescription="Listă completă de servicii: web design, creare site de prezentare, creare magazin online, servicii SEO profesionale și mentenanță website."
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
            <h2 className="mb-4 text-2xl font-bold text-black sm:text-3xl">Gata să creștem site-ul tău, fără bătăi de cap?</h2>
            <p className="mx-auto max-w-2xl text-base text-body-color">
              Dacă vrei o implementare curată, <strong>UX/UI</strong> care explică rapid valoarea și <strong>SEO</strong> corect de la început,
              îți propunem un plan simplu, cu pași clari și buget transparent. Ne ocupăm cap‑coadă de
              <strong> servicii optimizare site</strong>, ca vizitatorii să devină clienți.
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
