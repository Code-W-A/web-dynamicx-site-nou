import ConditionalSiteFooter from "@/components/Common/ConditionalSiteFooter";
import Navbar from "@/components/Navbar";
import SiteFloatingCtas from "@/components/Common/SiteFloatingCtas";
import "@/styles/globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
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
  const logoUrl =
    process.env.NEXT_PUBLIC_ORGANIZATION_LOGO_URL?.trim() ||
    `${siteUrl}/images/logo/logo.svg`;

  const organizationLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: logoUrl,
    },
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
  const gtmLoaderScript = gtmId
    ? `(function(w,d,id){w.dataLayer=w.dataLayer||[];w.dataLayer.push({'gtm.start':new Date().getTime(),event:'gtm.js'});var loaded=false;function load(){if(loaded)return;loaded=true;var s=d.createElement('script');s.async=true;s.src='https://www.googletagmanager.com/gtm.js?id='+encodeURIComponent(id);d.head.appendChild(s);}['pointerdown','touchstart','keydown'].forEach(function(eventName){w.addEventListener(eventName,load,{once:true,passive:true});});w.addEventListener('load',function(){w.setTimeout(load,3500);},{once:true});})(window,document,${JSON.stringify(gtmId)});`
    : null;

  return (
    <html lang="ro" suppressHydrationWarning>
      <body className="antialiased">
        {gtmLoaderScript ? (
          <script
            id="gtm-loader"
            dangerouslySetInnerHTML={{ __html: gtmLoaderScript }}
          />
        ) : null}
        <ClientProviders />
        {/* JSON-LD: Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
        {/* JSON-LD: WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteLd) }}
        />
        <Navbar />
        <main id="main-content">{children}</main>
        <ConditionalSiteFooter />
        <SiteFloatingCtas />
      </body>
      {!gtmId && gaId && <GoogleAnalytics gaId={gaId as string} />}
    </html>
  );
}
