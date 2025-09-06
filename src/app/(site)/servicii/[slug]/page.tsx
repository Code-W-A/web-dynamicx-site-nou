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
