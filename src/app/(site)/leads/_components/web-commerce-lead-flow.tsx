import type { ComponentType } from "react";

type WebCommerceLeadFlowProps = {
  HeroSection: ComponentType;
  TrustBar: ComponentType;
  BenefitsSection: ComponentType;
  LeadFormSection: ComponentType;
  PortfolioSection: ComponentType;
  ProcessSection: ComponentType;
  ServicesSection: ComponentType;
  PricingSection: ComponentType;
  SubscriptionAlternativeSection?: ComponentType;
  DesktopContactFab?: ComponentType;
  FaqSection: ComponentType;
  FinalCtaSection: ComponentType;
  StickyMobileCtaBar?: ComponentType;
};

export default function WebCommerceLeadFlow({
  HeroSection,
  TrustBar,
  BenefitsSection,
  LeadFormSection,
  PortfolioSection,
  ProcessSection,
  ServicesSection,
  PricingSection,
  SubscriptionAlternativeSection,
  DesktopContactFab,
  FaqSection,
  FinalCtaSection,
  StickyMobileCtaBar,
}: WebCommerceLeadFlowProps) {
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
      {SubscriptionAlternativeSection ? <SubscriptionAlternativeSection /> : null}
      <FaqSection />
      <FinalCtaSection />
      {StickyMobileCtaBar ? <StickyMobileCtaBar /> : null}
      {DesktopContactFab ? <DesktopContactFab /> : null}
    </>
  );
}
