"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import BottomCTA from "@/components/Common/BottomCTA";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import Script from "next/script";
import { GoogleTagManager, GoogleAnalytics } from "next/third-parties/google";
import AuthProvider from "../context/AuthContext";
import ToasterContext from "../context/ToastContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteName = process.env.SITE_NAME || "Web Dynamicx";
  const siteUrl = process.env.SITE_URL || "https://www.webdynamicx.ro";
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
  const gsv = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

  return (
    <html lang="ro" suppressHydrationWarning>
      {gtmId && <GoogleTagManager gtmId={gtmId as string} />}
      <body className={inter.className}>
        <NextTopLoader
          color="#006BFF"
          crawlSpeed={300}
          showSpinner={false}
          shadow="none"
          zIndex={9999999}
        />
        <ThemeProvider
          enableSystem={false}
          attribute="class"
          defaultTheme="light"
        >
          <AuthProvider>
            <ToasterContext />
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
            {gsv && (
              <meta name="google-site-verification" content={gsv} />
            )}
            {/* GTM loaded via <GoogleTagManager /> */}
            <Navbar />
            {children}
            <Footer />
            <BottomCTA />
          </AuthProvider>
        </ThemeProvider>
      </body>
      {gaId && <GoogleAnalytics gaId={gaId as string} />}
    </html>
  );
}
