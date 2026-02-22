import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import BottomCTA from "@/components/Common/BottomCTA";
import "@/styles/globals.css";
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';
import ClientProviders from "./ClientProviders";
import type { Metadata } from "next";

const siteName = process.env.SITE_NAME || "Web Dynamicx";
const siteUrl = process.env.SITE_URL || "https://www.webdynamicx.ro";
const gsv = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  verification: gsv ? { google: gsv } : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const logoUrl = `${siteUrl}/images/logo/logo.svg`;

  const organizationLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: siteUrl,
    logo: logoUrl,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+40774550758",
        contactType: "customer support",
        email: "webdynamicx@gmail.com",
        availableLanguage: ["ro"],
      },
    ],
  };

  const webSiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: siteUrl,
  };

  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html lang="ro" suppressHydrationWarning>
      {gtmId && <GoogleTagManager gtmId={gtmId as string} />}
      <body className="antialiased">
        <ClientProviders>
          {/* JSON-LD: Organization */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
            />
            {/* JSON-LD: WebSite + SearchAction */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteLd) }}
            />
            {/* GTM/GA injected via Next official components */}
            <Navbar />
            {children}
            <Footer />
            <BottomCTA />
        </ClientProviders>
      </body>
      {gaId && <GoogleAnalytics gaId={gaId as string} />}
    </html>
  );
}
