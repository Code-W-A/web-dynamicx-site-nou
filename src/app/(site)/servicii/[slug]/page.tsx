import PageTitle from "@/components/Common/PageTitle";
import TopicClusterArticlesSection from "@/components/Blog/internal-linking/topic-cluster-articles-section";
import ServiceLayout from "@/components/Service/ServiceLayout";
import { resolveClusterConfigByServiceSlug } from "@/config/blog-topic-clusters";
import { getPostsByCluster } from "@/sanity/sanity-utils";
import { serviceData } from "@/static-data/service";
import { Service } from "@/types/service";
import { mobileAppsServicePageData, mobileAppsServiceSlug } from "../dezvoltare-aplicatii-mobile/mobile-app-service-data";
import MobileAppServicePageContent from "../dezvoltare-aplicatii-mobile/mobile-app-service-page-content";
import Link from "next/link";
import JsonLd from "@/components/Common/JsonLd";
import { Phone, MessageCircle, Mail } from "lucide-react";
import ServiceRelatedPortfolioSection from "@/components/Portfolio/service-related-portfolio-section";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceLandingTemplate from "../_landing/service-landing-template";
import { getServiceLandingPageData } from "../_landing/service-landing-data";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return serviceData.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const siteURL = process.env.SITE_URL || "https://www.webdynamicx.ro";
  const siteName = process.env.SITE_NAME || "Web Dynamicx";
  const authorName = process.env.AUTHOR_NAME || "Web Dynamicx";
  const rawTwitterHandle = process.env.NEXT_PUBLIC_TWITTER_HANDLE?.trim();
  const twitterHandle = rawTwitterHandle
    ? rawTwitterHandle.startsWith("@")
      ? rawTwitterHandle
      : `@${rawTwitterHandle}`
    : undefined;

  const service = serviceData.find((item) => item?.slug === params?.slug);
  const isMobileAppsPage = params.slug === mobileAppsServiceSlug;
  const landingPage = isMobileAppsPage ? undefined : getServiceLandingPageData(params.slug);

  if (!service) {
    notFound();
  }

  const seoPage = isMobileAppsPage ? mobileAppsServicePageData : landingPage || service;
  const pageTitle = seoPage.title;
  const pageDescription = seoPage.description;
  const pageMetaTitle = seoPage.metaTitle;
  const pageMetaDescription = seoPage.metaDescription;
  const pageOgImage = "ogImage" in seoPage ? seoPage.ogImage : service.ogImage;
  const pageImage = seoPage.image;
  const pageOgAlt = isMobileAppsPage ? mobileAppsServicePageData.title : landingPage?.ogAlt || pageTitle;
  const baseImage = pageOgImage || pageImage;
  const ogImage = baseImage ? `${siteURL}${baseImage}` : undefined;
  const title = pageMetaTitle || `${pageTitle || "Serviciu Web Dynamicx"} | ${siteName}`;
  const description = pageMetaDescription || `${pageDescription?.slice(0, 136)}...`;
  const canonicalUrl = `${siteURL}/servicii/${service.slug}`;
  return {
    title,
    description,
    authors: [{ name: authorName }],
    alternates: {
      canonical: canonicalUrl,
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
      url: canonicalUrl,
      siteName: siteName,
      locale: "ro_RO",
      type: "website",
      images: ogImage
        ? [
            {
              url: ogImage,
              width: 1200,
              height: 630,
              alt: pageOgAlt,
            },
          ]
        : undefined,
    },

    twitter: {
      card: ogImage ? "summary_large_image" : "summary",
      title,
      description,
      ...(twitterHandle ? { creator: twitterHandle, site: twitterHandle } : {}),
      images: ogImage ? [ogImage] : undefined,
    },
  };
}

export default async function ServiceDetailPage(props: Props) {
  const params = await props.params;
  const siteURL = process.env.SITE_URL || "https://www.webdynamicx.ro";
  const service = serviceData.find((item) => item?.slug === params?.slug);
  const isMobileAppsPage = params.slug === mobileAppsServiceSlug;
  const landingPage = isMobileAppsPage ? undefined : getServiceLandingPageData(params.slug);
  const isLandingPage = Boolean(landingPage);
  const clusterConfig = isMobileAppsPage ? null : resolveClusterConfigByServiceSlug(params.slug);

  if (!service) {
    notFound();
  }
  const clusterArticles = clusterConfig ? await getPostsByCluster(clusterConfig.match, 3) : [];
  const clusterArticlesSection =
    clusterConfig && clusterArticles.length > 0 ? (
      <TopicClusterArticlesSection
        eyebrow={clusterConfig.serviceSection.eyebrow}
        title={clusterConfig.serviceSection.title}
        intro={clusterConfig.serviceSection.intro}
        articles={clusterArticles}
        hubHref={`/blog/topic/${clusterConfig.id}`}
        hubCtaLabel={clusterConfig.serviceSection.ctaLabel}
      />
    ) : null;
  const portfolioSection = !isMobileAppsPage ? <ServiceRelatedPortfolioSection serviceSlug={params.slug} /> : null;

  const seoPage = isMobileAppsPage ? mobileAppsServicePageData : landingPage || service;
  const pageTitle = seoPage.title;
  const pageDescription = seoPage.description;
  const pageFaqs = isMobileAppsPage ? mobileAppsServicePageData.faqs : landingPage?.faq.items || service.faqs;
  const pageImage = seoPage.image;
  const pageOgImage = "ogImage" in seoPage ? seoPage.ogImage : service.ogImage;
  const howToSteps = isMobileAppsPage
    ? mobileAppsServicePageData.howToSteps
    : landingPage?.process.steps.map((step, index) => ({
        name: step.title,
        text: step.subtitle ? `${step.subtitle} ${step.description}` : step.description,
        position: index + 1,
      }));
  const canonicalUrl = `${siteURL}/servicii/${service.slug}`;

  // Create breadcrumbs for service detail page
  const breadcrumbs = [
    { name: "Acasă", href: "/" },
    { name: "Servicii", href: "/servicii" },
    { name: pageTitle, current: true }
  ];

  return (
    <>
      {!isMobileAppsPage && !isLandingPage ? (
        <PageTitle
          pageTitle={pageTitle}
          pageDescription={pageDescription}
          breadcrumbs={breadcrumbs}
        />
      ) : null}
      {/* JSON-LD: Service for SEO */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: pageTitle,
          provider: {
            "@type": "Organization",
            name: "Web Dynamicx",
            url: siteURL,
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "+40774550758",
                contactType: "customer support",
                email: "webdynamicx@gmail.com",
                availableLanguage: ["ro"],
              },
            ],
          },
          areaServed: "România",
          serviceType: pageTitle,
          description: pageDescription,
          url: canonicalUrl,
          image: pageOgImage ? `${siteURL}${pageOgImage}` : pageImage ? `${siteURL}${pageImage}` : undefined,
        }}
      />
      {/* JSON-LD: HowTo for timeline when applicable */}
      {howToSteps && howToSteps.length > 0 && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: `Proces ${pageTitle}`,
            description: pageDescription,
            step: howToSteps.map((step) => ({
              "@type": "HowToStep",
              name: step.name,
              text: step.text,
              position: step.position,
            })),
            url: canonicalUrl,
          }}
        />
      )}
      {/* JSON-LD: Breadcrumbs */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Acasă", item: `${siteURL}` },
            { "@type": "ListItem", position: 2, name: "Servicii", item: `${siteURL}/servicii` },
            { "@type": "ListItem", position: 3, name: pageTitle, item: canonicalUrl },
          ],
        }}
      />
      {/* JSON-LD: FAQPage when FAQs exist */}
      {pageFaqs && pageFaqs.length > 0 && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: pageFaqs.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: { "@type": "Answer", text: item.answer },
            })),
          }}
        />
      )}
      {isMobileAppsPage ? (
        <MobileAppServicePageContent breadcrumbs={breadcrumbs} />
      ) : isLandingPage && landingPage ? (
        <ServiceLandingTemplate
          data={landingPage}
          breadcrumbs={breadcrumbs}
          clusterArticlesSection={clusterArticlesSection}
          portfolioSection={portfolioSection}
        />
      ) : (
        <>
          <ServiceLayout service={service as Service} />
          {clusterArticlesSection}
        </>
      )}

      {!isMobileAppsPage && !isLandingPage ? (
        <>
          {portfolioSection}
          <section className="bg-gray-50 py-16">
            <div className="container">
              <div className="mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow-lg">
                <div className="text-center">
                  <h3 className="mb-3 text-2xl font-bold text-gray-900">
                    Hai să vorbim despre proiectul tău
                  </h3>
                  <p className="mb-8 text-gray-600">
                    Contactează-ne prin modalitatea preferată pentru o consultație gratuită și o ofertă personalizată.
                  </p>
                  <div className="flex flex-col justify-center gap-4 sm:flex-row">
                    <a
                      href="tel:+40774550758"
                      className="flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-colors duration-200 hover:bg-primary/90"
                    >
                      <Phone size={20} />
                      Sună acum
                    </a>
                    <a
                      href="https://wa.me/40774550758"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-lg bg-green-500 px-6 py-3 font-semibold text-white transition-colors duration-200 hover:bg-green-600"
                    >
                      <MessageCircle size={20} />
                      WhatsApp
                    </a>
                    <Link
                      href="/contact"
                      className="flex items-center justify-center gap-2 rounded-lg border-2 border-primary px-6 py-3 font-semibold text-primary transition-colors duration-200 hover:bg-primary hover:text-white"
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
      ) : null}
    </>
  );
}
