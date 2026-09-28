import type { Metadata } from "next";
import WebCommerceLeadFlow from "../_components/web-commerce-lead-flow";
import { leadConfig } from "./_components/content";

const siteName = process.env.SITE_NAME || "Web Dynamicx";
const siteURL = process.env.SITE_URL || "https://www.webdynamicx.ro";

export const metadata: Metadata = {
  title: `Creare magazin online — cere ofertă | ${siteName}`,
  description:
    "Magazine online de la 4.000 lei. Vezi D-Toate și Auto Detailing Parts și cere o ofertă pentru magazinul tău.",
  alternates: { canonical: `${siteURL}${leadConfig.path}` },
  robots: { index: false, follow: false },
  openGraph: {
    title: `Creare magazin online | ${siteName}`,
    description:
      "Magazine online de la 4.000 lei. Vezi D-Toate și Auto Detailing Parts și cere o ofertă pentru magazinul tău.",
    url: `${siteURL}${leadConfig.path}`,
    siteName,
    locale: "ro_RO",
    type: "website",
  },
};

export default function LeadPage() {
  return <WebCommerceLeadFlow config={leadConfig} />;
}
