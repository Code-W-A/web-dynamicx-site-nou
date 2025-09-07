import PageTitle from "@/components/Common/PageTitle";
import ServiceLayout from "@/components/Service/ServiceLayout";
import { serviceData } from "@/static-data/service";
import { Service } from "@/types/service";
import Link from "next/link";
import JsonLd from "@/components/Common/JsonLd";
import { Phone, MessageCircle, Mail } from "lucide-react";
import LazyTestimonial from "../../../../components/Lazy/LazyTestimonial";
import LazyPortfolio from "../../../../components/Lazy/LazyPortfolio";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(props: Props) {
  const params = await props.params;
  const siteURL = process.env.SITE_URL as string;
  const siteName = process.env.SITE_NAME;
  const authorName = process.env.AUTHOR_NAME;

  const service = serviceData.find((item) => item?.slug === params?.slug);

  if (service) {
    const baseImage = service.ogImage || service.image;
    const ogImage = baseImage ? `${siteURL}${baseImage}` : undefined;
    const title = service.metaTitle || `${service?.title || "Serviciu Web Dynamicx"} | ${siteName}`;
    const description = service.metaDescription || `${service?.description?.slice(0, 136)}...`;
    return {
      title,
      description,
      author: authorName,
      alternates: {
        canonical: `${siteURL}/servicii/${service?.slug}`,
      },

      robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },

      openGraph: {
        title,
        description,
        url: `${siteURL}/servicii/${service?.slug}`,
        siteName: siteName,
        locale: "ro_RO",
        type: "article",
        images: ogImage
          ? [
              {
                url: ogImage,
                width: 1200,
                height: 630,
                alt: service.title,
              },
            ]
          : undefined,
      },

      twitter: {
        card: ogImage ? "summary_large_image" : "summary",
        title,
        description,
        creator: `@${authorName}`,
        site: `@${siteName}`,
        url: `${siteURL}/servicii/${service?.slug}`,
        images: ogImage ? [ogImage] : undefined,
      },
    } as any;
  } else {
    return {
      title: "Nu a fost găsit",
      description: "Serviciul nu a fost găsit",
    } as any;
  }
}

export default async function ServiceDetailPage(props: Props) {
  const params = await props.params;
  const service = serviceData.find((item) => item?.slug === params?.slug);
  
  // Create breadcrumbs for service detail page
  const breadcrumbs = [
    { name: "Acasă", href: "/" },
    { name: "Servicii", href: "/servicii" },
    { name: service?.title || "Serviciu", current: true }
  ];

  return (
    <>
      <PageTitle
        pageTitle={service?.title || "Detalii serviciu"}
        pageDescription={
          service?.description ||
          "Servicii webdesign, creare site, creare magazin online, creare logo și dezvoltare aplicații mobile."
        }
        breadcrumbs={breadcrumbs}
      />
      {/* JSON-LD: Service for SEO */}
      {service && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.title,
            provider: { "@type": "Organization", name: "Web Dynamicx" },
            areaServed: "România",
            serviceType: service.title,
            description: service.description,
            url: `${process.env.SITE_URL}/servicii/${service.slug}`,
          }}
        />
      )}
      {/* JSON-LD: HowTo for timeline when applicable */}
      {service && (service.slug === "creare-site-web" || service.slug === "creare-site-prezentare" || service.slug === "dezvoltare-aplicatii-mobile" || service.slug === "mentenanta-website") && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "HowTo",
            name:
              service.slug === "creare-site-web"
                ? "Etape Creare Site Web"
                : service.slug === "creare-site-prezentare"
                  ? "Etape Creare Site Prezentare"
                  : service.slug === "dezvoltare-aplicatii-mobile"
                    ? "Etape Dezvoltare Aplicații Mobile"
                    : "Etape Mentenanță Website",
            description: service.description,
            step:
              service.slug === "creare-site-web"
                ? [
                    { "@type": "HowToStep", name: "Analiză", text: "Obiective, public, competiție, structură pagini și mesaje.", position: 1 },
                    { "@type": "HowToStep", name: "Wireframe & conținut", text: "Secțiuni, ordinea informațiilor și CTA-uri.", position: 2 },
                    { "@type": "HowToStep", name: "UI design", text: "Interfețe moderne, componente reutilizabile, sistem vizual coerent.", position: 3 },
                    { "@type": "HowToStep", name: "Implementare", text: "Next.js, optimizări de viteză, testare pe dispozitive reale.", position: 4 },
                    { "@type": "HowToStep", name: "SEO & lansare", text: "Meta-uri, schema, sitemap/robots, GSC/GA4, training.", position: 5 },
                    { "@type": "HowToStep", name: "Mentenanță", text: "Actualizări periodice, optimizări și evoluții pe baza datelor.", position: 6 },
                  ]
                : service.slug === "creare-site-prezentare"
                  ? [
                      { "@type": "HowToStep", name: "Analiză", text: "Obiective, public, diferențiatori, sitemap.", position: 1 },
                      { "@type": "HowToStep", name: "Wireframe & conținut", text: "Secțiuni, mesaje, CTA-uri.", position: 2 },
                      { "@type": "HowToStep", name: "UI design", text: "Componente reutilizabile, ritm vizual.", position: 3 },
                      { "@type": "HowToStep", name: "Implementare", text: "Next.js, optimizări viteză, testare.", position: 4 },
                      { "@type": "HowToStep", name: "SEO & lansare", text: "Meta-uri, schema, sitemap/robots, GSC/GA4.", position: 5 },
                      { "@type": "HowToStep", name: "Mentenanță", text: "Actualizări, optimizări, evoluții.", position: 6 },
                    ]
                  : service.slug === "dezvoltare-aplicatii-mobile"
                  ? [
                      { "@type": "HowToStep", name: "Discovery", text: "Obiective, utilizatori, MVP, roadmap.", position: 1 },
                      { "@type": "HowToStep", name: "UX/UI Design", text: "Flow-uri, wireframe, prototip, design system.", position: 2 },
                      { "@type": "HowToStep", name: "Dezvoltare", text: "App + backend/API, integrări, notificări, payments.", position: 3 },
                      { "@type": "HowToStep", name: "QA & Beta", text: "Testare pe device-uri reale, optimizări performanță și stabilitate.", position: 4 },
                      { "@type": "HowToStep", name: "Publicare", text: "Listare în App Store/Google Play, ASO de bază.", position: 5 },
                      { "@type": "HowToStep", name: "Mentenanță & Creștere", text: "Monitorizare, iterații și noi funcționalități.", position: 6 },
                    ]
                  : [
                      { "@type": "HowToStep", name: "Audit inițial", text: "Stare actuală, riscuri, priorități.", position: 1 },
                      { "@type": "HowToStep", name: "Update-uri & compatibilitate", text: "Platformă, module, rollback controlat.", position: 2 },
                      { "@type": "HowToStep", name: "Monitorizare & alerte", text: "Uptime, erori, securitate.", position: 3 },
                      { "@type": "HowToStep", name: "Optimizări performanță", text: "Imagini, cache, Core Web Vitals.", position: 4 },
                      { "@type": "HowToStep", name: "Raportare & recomandări", text: "Lunar: status, task-uri, evoluții.", position: 5 },
                    ],
            url: `${process.env.SITE_URL}/servicii/${service.slug}`,
          }}
        />
      )}
      {/* JSON-LD: Breadcrumbs */}
      {service && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Acasă", item: `${process.env.SITE_URL}` },
              { "@type": "ListItem", position: 2, name: "Servicii", item: `${process.env.SITE_URL}/servicii` },
              { "@type": "ListItem", position: 3, name: service.title, item: `${process.env.SITE_URL}/servicii/${service.slug}` },
            ],
          }}
        />
      )}
      {/* JSON-LD: FAQPage when FAQs exist */}
      {service?.faqs && service.faqs.length > 0 && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: service.faqs.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: { "@type": "Answer", text: item.answer },
            })),
          }}
        />
      )}
      <ServiceLayout service={service as Service} />

      {/* Testimonials above CTA (lazy-loaded) */}
      <LazyTestimonial />

      {/* SSR crawl path link to portfolio */}
      <section className="container py-8">
        <div className="text-center">
          <Link href="/portofoliu" className="hover:text-primary text-base font-medium underline">
            Vezi portofoliul
          </Link>
        </div>
      </section>

      {/* Sectiunea portofoliu (lazy-loaded) */}
      <LazyPortfolio />

      {/* Contact CTA */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow-lg">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Hai să vorbim despre proiectul tău
              </h3>
              <p className="text-gray-600 mb-8">
                Contactează-ne prin modalitatea preferată pentru o consultație gratuită și o ofertă personalizată.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+40774550758" 
                  className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <Phone size={20} />
                  Sună acum
                </a>
                <a 
                  href="https://wa.me/40774550758" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <MessageCircle size={20} />
                  WhatsApp
                </a>
                <Link 
                  href="/contact" 
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <Mail size={20} />
                  Formular contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
