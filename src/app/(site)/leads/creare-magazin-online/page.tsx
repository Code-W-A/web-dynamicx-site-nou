import type { Metadata } from "next";
import WebCommerceLeadFlow from "../_components/web-commerce-lead-flow";
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
import WebsiteSubscriptionAlternative from "@/components/Sections/WebsiteSubscriptionAlternative";
import LeadDesktopContactFab from "../_components/lead-desktop-contact-fab";

const siteName = process.env.SITE_NAME || "Web Dynamicx";
const siteURL = process.env.SITE_URL || "https://www.webdynamicx.ro";
const pagePath = "/leads/creare-magazin-online";

export const metadata: Metadata = {
  title: `Solicita oferta creare magazin online | ${siteName}`,
  description:
    "Landing page pentru campanii platite: creare magazine online orientate pe vanzari. Cere o estimare personalizata.",
  alternates: {
    canonical: `${siteURL}${pagePath}`,
  },
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: `Creare magazin online - oferta rapida | ${siteName}`,
    description: "Pagina de conversie pentru lead-uri: magazine online performante, scalabile, cu checkout optimizat.",
    url: `${siteURL}${pagePath}`,
    siteName,
    locale: "ro_RO",
    type: "website",
  },
};

export default function LeadsOnlineStorePage() {
  const SubscriptionAlternativeSection = () => (
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
      primaryCtaHref="#formular-lead"
      secondaryCtaText="Vezi și oferta pentru site complet"
      secondaryCtaHref="/servicii/creare-magazin-online"
      variant="compact"
      className="bg-white"
    />
  );

  return (
    <WebCommerceLeadFlow
      HeroSection={HeroSection}
      TrustBar={TrustBar}
      BenefitsSection={BenefitsSection}
      LeadFormSection={LeadFormSection}
      PortfolioSection={PortfolioSection}
      ProcessSection={ProcessSection}
      ServicesSection={ServicesSection}
      PricingSection={PricingSection}
      SubscriptionAlternativeSection={SubscriptionAlternativeSection}
      FaqSection={FaqSection}
      FinalCtaSection={FinalCtaSection}
      DesktopContactFab={LeadDesktopContactFab}
    />
  );
}
