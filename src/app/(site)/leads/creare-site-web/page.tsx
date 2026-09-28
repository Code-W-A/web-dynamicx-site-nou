import type { Metadata } from "next";
import WebCommerceLeadFlow from "../_components/web-commerce-lead-flow";
import { leadConfig } from "./_components/content";

const siteName = process.env.SITE_NAME || "Web Dynamicx";
const siteURL = process.env.SITE_URL || "https://www.webdynamicx.ro";

export const metadata: Metadata = {
  title: `Creare site web — cere ofertă | ${siteName}`,
  description:
    "Site-uri de prezentare de la 1.800 lei. Vezi proiectul Studio by Cristian și cere o ofertă pentru afacerea ta.",
  alternates: { canonical: `${siteURL}${leadConfig.path}` },
  robots: { index: false, follow: false },
  openGraph: {
    title: `Creare site web | ${siteName}`,
    description:
      "Site-uri de prezentare de la 1.800 lei. Vezi proiectul Studio by Cristian și cere o ofertă pentru afacerea ta.",
    url: `${siteURL}${leadConfig.path}`,
    siteName,
    locale: "ro_RO",
    type: "website",
  },
};

export default function LeadPage() {
  return <WebCommerceLeadFlow config={leadConfig} />;
}
