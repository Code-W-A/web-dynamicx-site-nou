import type { Metadata } from "next";
import HeroSection from "./_components/hero-section";
import TrustBar from "./_components/trust-bar";
import ProcessSection from "./_components/process-section";
import PortfolioSection from "./_components/portfolio-section";
import WhyUsSection from "./_components/why-us-section";
import TestimonialsSection from "./_components/testimonials-section";
import PricingEstimateSection from "./_components/pricing-estimate-section";
import FaqSection from "./_components/faq-section";
import FinalCtaSection from "./_components/final-cta-section";
import LeadFormSection from "./_components/lead-form-section";
import StickyMobileCtaBar from "./_components/sticky-mobile-cta-bar";
import AdsSimpleFooter from "./_components/ads-simple-footer";

const siteName = process.env.SITE_NAME || "Web Dynamicx";
const siteURL = process.env.SITE_URL || "https://www.webdynamicx.ro";
const canonicalServicePath = "/servicii/dezvoltare-aplicatii-mobile";

export const metadata: Metadata = {
  title: `Dezvoltare aplicații mobile iOS și Android pentru firme | ${siteName}`,
  description:
    "Landing page pentru Google Ads: dezvoltare aplicații mobile iOS și Android pentru firme. Cere estimare orientativă și direcție clară pentru MVP sau produsul tău.",
  alternates: {
    canonical: `${siteURL}${canonicalServicePath}`,
  },
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: `Dezvoltare aplicații mobile pentru firme | ${siteName}`,
    description:
      "Pagini dedicate Ads pentru companii care caută dezvoltare aplicații mobile iOS și Android, cu estimare orientativă și focus pe lansare.",
    url: `${siteURL}${canonicalServicePath}`,
    siteName,
    locale: "ro_RO",
    type: "website",
  },
};

export default function MobileAppsLeadPage() {
  return (
    <>
      <div data-mobile-apps-ads-page className="hidden" />
      <HeroSection />
      <TrustBar />
      <LeadFormSection />
      <PortfolioSection />
      <WhyUsSection />
      <ProcessSection />
      <PricingEstimateSection />
      <TestimonialsSection />
      <FaqSection />
      <FinalCtaSection />
      <AdsSimpleFooter />
      <StickyMobileCtaBar />
    </>
  );
}
