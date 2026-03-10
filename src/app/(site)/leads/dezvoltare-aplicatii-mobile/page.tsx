import type { Metadata } from "next";
import HeroSection from "./_components/hero-section";
import TrustBar from "./_components/trust-bar";
import BenefitsSection from "./_components/benefits-section";
import ServicesGridSection from "./_components/services-grid-section";
import ProcessSection from "./_components/process-section";
import PortfolioSection from "./_components/portfolio-section";
import FeatureHighlightsSection from "./_components/feature-highlights-section";
import WhyUsSection from "./_components/why-us-section";
import TestimonialsSection from "./_components/testimonials-section";
import PricingEstimateSection from "./_components/pricing-estimate-section";
import FaqSection from "./_components/faq-section";
import FinalCtaSection from "./_components/final-cta-section";
import LeadFormSection from "./_components/lead-form-section";
import StickyMobileCtaBar from "./_components/sticky-mobile-cta-bar";

const siteName = process.env.SITE_NAME || "Web Dynamicx";
const siteURL = process.env.SITE_URL || "https://www.webdynamicx.ro";
const pagePath = "/leads/dezvoltare-aplicatii-mobile";

export const metadata: Metadata = {
  title: `Solicita oferta dezvoltare aplicatii mobile | ${siteName}`,
  description:
    "Landing page pentru campanii platite: dezvoltare aplicatii mobile iOS, Android si cross-platform pentru companii. Cere estimare personalizata.",
  alternates: {
    canonical: `${siteURL}${pagePath}`,
  },
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: `Dezvoltare aplicatii mobile - oferta rapida | ${siteName}`,
    description:
      "Pagina de conversie pentru solicitari de oferta: aplicatii mobile personalizate, scalabile, cu focus pe rezultate de business.",
    url: `${siteURL}${pagePath}`,
    siteName,
    locale: "ro_RO",
    type: "website",
  },
};

export default function MobileAppsLeadPage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <BenefitsSection />
      <LeadFormSection />
      <PortfolioSection />
      <ProcessSection />
      <PricingEstimateSection />
      <FaqSection />
      <TestimonialsSection />
      <WhyUsSection />
      <ServicesGridSection />
      <FeatureHighlightsSection />
      <FinalCtaSection />
      <StickyMobileCtaBar />
    </>
  );
}
