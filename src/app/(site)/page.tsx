import HomeBlogSection from "@/components/Blog/HomeBlogSection";
import Brands from "@/components/Brands";
import Contact from "@/components/Contact";
import About from "@/components/Home/About";
import Hero from "@/components/Home/Hero";
import PhoneLeadCTA from "@/components/Common/PhoneLeadCTA";
import Pricing from "@/components/Home/Pricing";
import Service from "@/components/Home/Service";
import Team from "@/components/Home/Team";
import Testimonial from "@/components/Home/Testimonial";
import Portfolio from "@/components/Portfolio";
import HomeMobilePortfolio from "@/components/Portfolio/HomeMobilePortfolio";
import Link from "next/link";
import MiniLeadClient from "@/components/Common/MiniLeadClient";
import { Metadata } from "next";
import JsonLd from "@/components/Common/JsonLd";
import { integrations } from "../../../integrations.config";
import WebsiteSubscriptionAlternative from "@/components/Sections/WebsiteSubscriptionAlternative";

const siteName = process.env.SITE_NAME || "Web Dynamicx";
const siteURL = process.env.SITE_URL || "https://www.webdynamicx.ro";

export const metadata: Metadata = {
  title: `Web Dynamicx | Agenție web pentru website-uri, SEO și proiecte digitale`,
  description:
    "Pagina principală Web Dynamicx: agenție web cu focus pe website-uri rapide, structură clară, SEO și proiecte digitale care susțin creșterea business-ului.",
  alternates: { canonical: siteURL },
  openGraph: {
    title: `Web Dynamicx | Agenție web pentru website-uri, SEO și proiecte digitale`,
    description:
      "Pagina principală Web Dynamicx: agenție web cu focus pe website-uri rapide, structură clară, SEO și proiecte digitale care susțin creșterea business-ului.",
    url: siteURL,
    siteName: siteName,
    locale: "ro_RO",
    type: "website",
    images: [
      {
        url: `${siteURL}/images/hero/hero-image.png`,
        width: 1200,
        height: 630,
        alt: `${siteName} homepage`
      },
    ],
  },
  twitter: {
    card: "summary",
    title: `Web Dynamicx | Agenție web pentru website-uri, SEO și proiecte digitale`,
    description:
      "Pagina principală Web Dynamicx: agenție web cu focus pe website-uri rapide, structură clară, SEO și proiecte digitale care susțin creșterea business-ului.",
    images: [`${siteURL}/images/hero/hero-image.png`],
  },
};

export default function Home() {
  const professionalServiceLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteName,
    url: siteURL,
    areaServed: "România",
    telephone: "+40774550758",
    email: "webdynamicx@gmail.com",
    sameAs: [siteURL],
  };

  // Removed duplicate WebSite JSON-LD; kept only in layout

  return (
    <>
      <JsonLd data={professionalServiceLd} />

      <Hero />
     
      <About />
      <Service />
      <Portfolio />
      <HomeMobilePortfolio />
      <Brands />
      <PhoneLeadCTA />
      {/* FAQ Section */}
      <section className="bg-white py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold text-black">Întrebări frecvente</h2>
            <div className="space-y-5">
              <div className="rounded-xs border border-stone-200 p-5">
                <h3 className="mb-2 text-lg font-semibold text-black">Cât durează realizarea unui site de prezentare?</h3>
                <p className="text-base text-body-color">În medie 2–4 săptămâni, în funcție de pagini, conținut și integrații.</p>
              </div>
              <div className="rounded-xs border border-stone-200 p-5">
                <h3 className="mb-2 text-lg font-semibold text-black">Ce include mentenanța de site?</h3>
                <p className="text-base text-body-color">Actualizări, monitorizare, backup, security hardening și remedieri rapide.</p>
              </div>
              <div className="rounded-xs border border-stone-200 p-5">
                <h3 className="mb-2 text-lg font-semibold text-black">Oferiți și servicii SEO?</h3>
                <p className="text-base text-body-color">Da — audit tehnic, optimizare on-page, conținut și interlinking, plus rapoarte lunare.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Team /> */}
      <Pricing />
      <WebsiteSubscriptionAlternative
        title="Nu ai buget pentru un site complet acum? Ai și varianta asta."
        subtitle="Poți începe cu un site la abonament: design profesionist, implementare, hosting, mentenanță și suport pentru modificările esențiale, într-un cost predictibil. Este o opțiune bună pentru afaceri la început de drum sau pentru business-uri care vor să intre rapid online fără o investiție mare din prima."
        monthlyLabel="Cost predictibil • Pornire rapidă • Mentenanță inclusă"
        features={[
          "Pornire rapidă",
          "Cost lunar predictibil",
          "Hosting și mentenanță incluse",
          "Actualizări esențiale incluse",
          "Potrivit pentru business-uri locale",
          "Upgrade ulterior către variantă custom",
        ]}
        primaryCtaText="Vreau varianta la abonament"
        primaryCtaHref="/contact"
        secondaryCtaText="Vezi și oferta pentru site complet"
        secondaryCtaHref="/#pricing"
        variant="default"
      />
      <Testimonial />
      {integrations?.isSanityEnabled && <HomeBlogSection />}
      <Contact />
      {/* Client-only mini lead form; rendered only on interaction and never during SSR */}
      {/** Keep it at the end to avoid layout shifts and ensure non-blocking hydration */}
      <MiniLeadClient />
    </>
  );
}
