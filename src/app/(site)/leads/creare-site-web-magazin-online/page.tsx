import type { Metadata } from "next";
import HeroSection from "./_components/hero-section";
import TrustBar from "./_components/trust-bar";
import BenefitsSection from "./_components/benefits-section";
import ServicesSection from "./_components/services-section";
import PortfolioSection from "./_components/portfolio-section";
import ProcessSection from "./_components/process-section";
import PricingSection from "./_components/pricing-section";
import FaqSection from "./_components/faq-section";
import FinalCtaSection from "./_components/final-cta-section";
import LeadFormSection from "./_components/lead-form-section";
import StickyMobileCtaBar from "./_components/sticky-mobile-cta-bar";

const siteName = process.env.SITE_NAME || "Web Dynamicx";
const siteURL = process.env.SITE_URL || "https://www.webdynamicx.ro";
const pagePath = "/leads/creare-site-web-magazin-online";

export const metadata: Metadata = {
  title: `Solicita oferta creare site web si magazin online | ${siteName}`,
  description:
    "Landing page pentru campanii platite: creare site-uri web si magazine online orientate pe conversie. Cere o estimare personalizata.",
  alternates: {
    canonical: `${siteURL}${pagePath}`,
  },
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: `Creare site web si magazin online - oferta rapida | ${siteName}`,
    description: "Pagina de conversie pentru lead-uri: website-uri si e-commerce moderne, rapide si scalabile.",
    url: `${siteURL}${pagePath}`,
    siteName,
    locale: "ro_RO",
    type: "website",
  },
};

export default function LeadsWebMagazinPage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <BenefitsSection />
      <LeadFormSection />
      <PortfolioSection />
      <ProcessSection />
      <ServicesSection />
      <PricingSection />
      <FaqSection />
      <FinalCtaSection />
      <StickyMobileCtaBar />
    </>
  );
}
