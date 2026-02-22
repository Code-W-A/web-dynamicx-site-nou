import PageTitle from "@/components/Common/PageTitle";
import Contact from "@/components/Contact";
import { Metadata } from "next";

const siteName = process.env.SITE_NAME || "Web Dynamicx";
const siteURL = process.env.SITE_URL || "https://www.webdynamicx.ro";

export const metadata: Metadata = {
  title: `Contact – discută cu un specialist | ${siteName}`,
  description: "Ai un proiect de creare site sau optimizare SEO? Scrie-ne si revenim rapid cu solutii si oferta. Programari telefon, WhatsApp sau formular.",
  alternates: { canonical: `${siteURL}/contact` },
  openGraph: {
    title: `Contact – discută cu un specialist | ${siteName}`,
    description: "Ai un proiect de creare site sau optimizare SEO? Scrie-ne si revenim rapid cu solutii si oferta.",
    url: `${siteURL}/contact`,
    siteName: siteName,
    locale: "ro_RO",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `Contact – discută cu un specialist | ${siteName}`,
    description: "Ai un proiect de creare site sau optimizare SEO? Scrie-ne si revenim rapid.",
  },
};

export default function ContactPage() {
  const professionalServiceLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteName,
    url: `${siteURL}/contact`,
    areaServed: "România",
    telephone: "+40774550758",
    email: "webdynamicx@gmail.com",
    sameAs: [siteURL],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceLd) }}
      />

      <PageTitle
        pageTitle="Pagină de contact"
        pageDescription="Scrie-ne despre proiectul tău și îți răspundem rapid."
      />

      <Contact />
    </>
  );
}
