import RenderBodyContent from "@/components/Blog/BlogDetails/RenderBodyContent";
import ArticleInlineServiceCta from "@/components/Blog/internal-linking/article-inline-service-cta";
import ArticleNextStepsSection from "@/components/Blog/internal-linking/article-next-steps-section";
import Breadcrumbs, { type BreadcrumbItem } from "@/components/Common/Breadcrumbs";
import { getRelatedCaseStudies } from "@/app/(site)/portofoliu-aplicatii-mobile/mobile-app-portfolio-data";
import { buildArticleInternalLinkingPlan } from "@/lib/blog-article-internal-links";
import { resolveBlogCanonicalUrl, resolvePostSeoDescription } from "@/lib/blog-post-text";
import { shouldAutoShowPortfolioHub } from "@/config/blog-topic-clusters";
import {
  buildAuthorAvatarUrl,
  buildBlogArticleStructuredDataImageUrls,
  buildBlogHeroImageUrl,
  buildBlogOgImageUrl,
  getBlogOgImageDimensions,
} from "@/sanity/image-helpers";
import { getIndexableTags, getPostBySlug, getRelatedPostsFallback } from "@/sanity/sanity-utils";
import type { Blog, BlogRelatedPostCard } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import { SharePost } from "@/app/(site)/blog/[slug]/_components/share-post";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import type { PortableTextBlock } from "sanity";

export const revalidate = 60;

type Props = {
  params: Promise<{ slug: string }>;
};

function resolveImageAlt(image: Blog["mainImage"] | undefined, fallback: string) {
  if (image && typeof image.alt === "string" && image.alt.trim()) {
    return image.alt.trim();
  }

  return fallback;
}

function splitArticleBody(blocks?: PortableTextBlock[]) {
  const bodyBlocks = Array.isArray(blocks) ? blocks : [];

  if (bodyBlocks.length <= 2) {
    return {
      leadBlocks: bodyBlocks,
      remainingBlocks: [] as PortableTextBlock[],
      canInsertInlineCta: false,
    };
  }

  return {
    leadBlocks: bodyBlocks.slice(0, 2),
    remainingBlocks: bodyBlocks.slice(2),
    canInsertInlineCta: true,
  };
}

const articleProseClassName =
  "prose prose-zinc max-w-none " +
  "prose-headings:font-semibold prose-headings:tracking-tight " +
  "prose-p:my-5 prose-p:text-[1.05rem] prose-p:leading-8 " +
  "prose-a:font-semibold prose-a:text-primary prose-a:no-underline hover:prose-a:underline " +
  "prose-strong:text-slate-950 " +
  "prose-h2:mt-14 prose-h2:mb-5 prose-h2:text-[1.8rem] prose-h2:leading-tight " +
  "prose-h3:mt-10 prose-h3:mb-4 prose-h3:text-[1.35rem] prose-h3:leading-tight " +
  "prose-h4:mt-8 prose-h4:mb-3 prose-h4:text-[1.1rem] prose-h4:leading-tight " +
  "prose-ul:my-6 prose-ul:space-y-3 prose-ol:my-6 prose-ol:space-y-3 prose-li:marker:text-primary " +
  "prose-blockquote:my-10 prose-blockquote:rounded-[1.5rem] prose-blockquote:border-l-4 prose-blockquote:border-primary/20 prose-blockquote:bg-slate-50 prose-blockquote:px-6 prose-blockquote:py-5 prose-blockquote:text-left prose-blockquote:not-italic prose-blockquote:text-slate-800";

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const { slug } = params;
  const post: any = await getPostBySlug(slug);

  const siteURL = process.env.SITE_URL || "https://www.webdynamicx.ro";
  const siteName = process.env.SITE_NAME || "Web Dynamicx";
  const authorName = process.env.AUTHOR_NAME || "Web Dynamicx";
  const organizationLogoUrl =
    process.env.NEXT_PUBLIC_ORGANIZATION_LOGO_URL?.trim() || `${siteURL}/images/logo/logo.svg`;
  const rawTwitterHandle = process.env.NEXT_PUBLIC_TWITTER_HANDLE?.trim();
  const twitterHandle = rawTwitterHandle
    ? rawTwitterHandle.startsWith("@")
      ? rawTwitterHandle
      : `@${rawTwitterHandle}`
    : undefined;

  if (!post) {
    notFound();
  }

  const title = post.metaTitle || post.title || `Articol | ${siteName}`;
  const description = resolvePostSeoDescription(post, "Articol de pe blogul Web Dynamicx.");
  const canonical = resolveBlogCanonicalUrl(post, siteURL);
  const articleAuthorName = post.author?.name || authorName;
  const metadataImage = post.ogImage || post.mainImage;
  const ogImageAlt = resolveImageAlt(metadataImage, post.title || siteName);
  const ogImage = metadataImage ? buildBlogOgImageUrl(metadataImage) : undefined;
  const ogImageDimensions = metadataImage ? getBlogOgImageDimensions(metadataImage) : undefined;

  return {
    title,
    description,
    alternates: { canonical },
    authors: [{ name: articleAuthorName }],
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
      url: canonical,
      siteName: siteName,
      images: ogImage
        ? [
            {
              url: ogImage,
              width: ogImageDimensions?.width,
              height: ogImageDimensions?.height,
              alt: ogImageAlt,
            },
          ]
        : undefined,
      locale: "ro_RO",
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post._updatedAt,
      authors: articleAuthorName ? [articleAuthorName] : undefined,
      tags: Array.isArray(post.tags) ? post.tags : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(twitterHandle ? { creator: twitterHandle, site: twitterHandle } : {}),
      images: ogImage ? [ogImage] : undefined,
    },
  };
}

export default async function BlogSlugPage(props: Props) {
  const params = await props.params;
  const { slug } = params;

  const post = (await getPostBySlug(slug)) as Blog | null;

  if (!post) {
    notFound();
  }

  const siteURL = process.env.SITE_URL || "https://www.webdynamicx.ro";
  const siteName = process.env.SITE_NAME || "Web Dynamicx";
  const organizationLogoUrl =
    process.env.NEXT_PUBLIC_ORGANIZATION_LOGO_URL?.trim() || `${siteURL}/images/logo/logo.svg`;
  const canonical = resolveBlogCanonicalUrl(post, siteURL);
  const mainImageAlt = resolveImageAlt(post.mainImage, post.title || siteName);
  const heroImage = post.mainImage ? buildBlogHeroImageUrl(post.mainImage) : undefined;
  const articleImage = post.ogImage ? buildBlogOgImageUrl(post.ogImage) : heroImage;
  const structuredDataImageSource = post.mainImage || post.ogImage;
  const structuredDataImages = buildBlogArticleStructuredDataImageUrls(structuredDataImageSource);
  const authorAvatar = post.author?.image ? buildAuthorAvatarUrl(post.author.image) : undefined;
  const articleIntro = typeof post.excerpt === "string" ? post.excerpt.trim() : "";

  const internalPlan = buildArticleInternalLinkingPlan(post, siteURL);
  const relatedCaseStudies = getRelatedCaseStudies(post.relatedCaseStudies ?? []).slice(0, 2);
  const indexableTags = await getIndexableTags(post.tags);
  const { leadBlocks, remainingBlocks, canInsertInlineCta } = splitArticleBody(post.body);
  const breadcrumbItems: BreadcrumbItem[] = [
    { name: "Acasă", href: "/" },
    { name: "Blog", href: "/blog" },
    ...(internalPlan.cluster
      ? [{ name: internalPlan.cluster.hub.title, href: `/blog/topic/${internalPlan.cluster.id}` }]
      : []),
    { name: post.title, current: true },
  ];

  let relatedPostsForSection: BlogRelatedPostCard[] = Array.isArray(post.relatedPosts)
    ? post.relatedPosts.filter(
        (p) =>
          p &&
          typeof p === "object" &&
          p.slug &&
          typeof p.slug === "object" &&
          typeof (p.slug as { current?: string }).current === "string" &&
          !(typeof p._id === "string" && p._id.startsWith("drafts.")),
      )
    : [];

  if (relatedPostsForSection.length === 0) {
    relatedPostsForSection = await getRelatedPostsFallback({
      slug,
      category: post.category,
      topicCluster: post.topicCluster,
      tags: post.tags,
    });
  }

  const seenRelated = new Set<string>();
  relatedPostsForSection = relatedPostsForSection.filter((p) => {
    const cur = p.slug && typeof p.slug === "object" ? (p.slug as { current?: string }).current : undefined;
    if (!cur || seenRelated.has(cur)) return false;
    seenRelated.add(cur);
    return true;
  });

  const inlineService =
    canInsertInlineCta && internalPlan.showAutoServiceBlock && internalPlan.cluster
      ? {
          title: internalPlan.cluster.serviceBlockTitle,
          description: internalPlan.cluster.serviceBlockDescription,
          href: internalPlan.cluster.serviceHref,
          ctaLabel: internalPlan.cluster.serviceCtaLabel,
        }
      : null;

  const finalService = internalPlan.cluster
    ? {
        title: internalPlan.cluster.serviceBlockTitle,
        description: internalPlan.cluster.serviceBlockDescription,
        href: internalPlan.cluster.serviceHref,
        ctaLabel: internalPlan.cluster.serviceCtaLabel,
      }
    : null;

  const wantsPortfolioHub =
    Boolean(internalPlan.cluster?.portfolioHubHref) &&
    (post.showPortfolioHub === true || shouldAutoShowPortfolioHub(post));

  const finalPortfolio =
    wantsPortfolioHub && internalPlan.cluster?.portfolioHubHref
      ? {
          href: internalPlan.cluster.portfolioHubHref,
          title: internalPlan.cluster.portfolioHubTitle ?? "Vezi portofoliul relevant",
          description:
            internalPlan.cluster.portfolioHubDescription ?? "Explorează proiecte reale relevante pentru subiectul acestui articol.",
          ctaLabel: internalPlan.cluster.portfolioHubCtaLabel ?? "Vezi portofoliul",
        }
      : null;

  const finalClusterHub = internalPlan.cluster
    ? {
        href: `/blog/topic/${internalPlan.cluster.id}`,
        title: internalPlan.cluster.hub.title,
        description: internalPlan.cluster.hub.intro,
        ctaLabel: internalPlan.cluster.serviceSection.ctaLabel,
      }
    : null;

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.current ? canonical : `${siteURL}${item.href}`,
    })),
  };

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post?.title,
    alternativeHeadline: post?.metaTitle || undefined,
    description: resolvePostSeoDescription(post, "Articol de pe blogul Web Dynamicx."),
    image: structuredDataImages.length > 0 ? structuredDataImages : articleImage ? [articleImage] : undefined,
    author: post?.author?.name ? { "@type": "Person", name: post?.author?.name } : undefined,
    publisher: {
      "@type": "Organization",
      name: siteName,
      url: siteURL,
      logo: {
        "@type": "ImageObject",
        url: organizationLogoUrl,
      },
    },
    datePublished: post?.publishedAt,
    dateModified: post?._updatedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonical,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        // @ts-ignore
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        // @ts-ignore
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />

      <section className="bg-white pt-[150px]">
        <div className="container">
          <div className="border-b border-[#E9ECF8] pb-[120px]">
            <div className="mx-[-16px] flex flex-wrap justify-center">
              <div className="w-full px-4 lg:w-8/12">
                <div>
                  <div className="mb-5">
                    <Breadcrumbs items={breadcrumbItems} align="start" compact />
                  </div>
                  <h1 className="text-3xl leading-tight font-bold text-black sm:text-4xl sm:leading-tight">
                    {post?.title}
                  </h1>
                  {articleIntro ? (
                    <p className="text-body-color mt-5 max-w-3xl text-lg leading-relaxed sm:text-xl">
                      {articleIntro}
                    </p>
                  ) : null}
                  {heroImage ? (
                    <div className="relative mt-8 mb-10 aspect-848/384 w-full overflow-hidden rounded-[1.75rem]">
                      <Image
                        src={heroImage}
                        alt={mainImageAlt}
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 66vw"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  ) : null}
                  <div className="mb-10 flex flex-wrap items-center justify-between border-b border-[#E9ECF8] pb-4">
                    <div className="flex flex-wrap items-center">
                      <div className="mr-10 mb-5 flex items-center">
                        {authorAvatar ? (
                          <div className="mr-4 h-[40px] w-full max-w-[40px] overflow-hidden rounded-full">
                            <Image
                              src={authorAvatar}
                              alt={post?.author?.name as any}
                              width={40}
                              height={40}
                            />
                          </div>
                        ) : null}
                        <div className="w-full">
                          <h4 className="text-body-color mb-1 text-base font-medium">
                            {post?.author?.name ? `De ${post?.author?.name}` : "Blog Web Dynamicx"}
                          </h4>
                        </div>
                      </div>
                      <div className="mb-5 flex items-center">
                        <p className="text-body-color mr-5 flex items-center text-base font-medium">
                          <span className="mr-3">
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 15 15"
                              className="fill-current"
                            >
                              <path d="M3.89531 8.67529H3.10666C2.96327 8.67529 2.86768 8.77089 2.86768 8.91428V9.67904C2.86768 9.82243 2.96327 9.91802 3.10666 9.91802H3.89531C4.03871 9.91802 4.1343 9.82243 4.1343 9.67904V8.91428C4.1343 8.77089 4.03871 8.67529 3.89531 8.67529Z" />
                              <path d="M6.429 8.67529H5.64035C5.49696 8.67529 5.40137 8.77089 5.40137 8.91428V9.67904C5.40137 9.82243 5.49696 9.91802 5.64035 9.91802H6.429C6.57239 9.91802 6.66799 9.82243 6.66799 9.67904V8.91428C6.66799 8.77089 6.5485 8.67529 6.429 8.67529Z" />
                              <path d="M8.93828 8.67529H8.14963C8.00624 8.67529 7.91064 8.77089 7.91064 8.91428V9.67904C7.91064 9.82243 8.00624 9.91802 8.14963 9.91802H8.93828C9.08167 9.91802 9.17727 9.82243 9.17727 9.67904V8.91428C9.17727 8.77089 9.08167 8.67529 8.93828 8.67529Z" />
                              <path d="M11.4715 8.67529H10.6828C10.5394 8.67529 10.4438 8.77089 10.4438 8.91428V9.67904C10.4438 9.82243 10.5394 9.91802 10.6828 9.91802H11.4715C11.6149 9.91802 11.7105 9.82243 11.7105 9.67904V8.91428C11.7105 8.77089 11.591 8.67529 11.4715 8.67529Z" />
                            </svg>
                          </span>
                          {post?.publishedAt
                            ? new Date(post?.publishedAt as string)
                                .toLocaleDateString("ro-RO", {
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                })
                            : ""}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className={articleProseClassName}>
                      <RenderBodyContent value={leadBlocks} />
                    </div>

                    {inlineService ? (
                      <div className="my-10">
                        <ArticleInlineServiceCta
                          title={inlineService.title}
                          description={inlineService.description}
                          href={inlineService.href}
                          ctaLabel={inlineService.ctaLabel}
                        />
                      </div>
                    ) : null}

                    {remainingBlocks.length > 0 ? (
                      <div className={`${articleProseClassName} mb-8`}>
                        <RenderBodyContent value={remainingBlocks} />
                      </div>
                    ) : null}

                    <div className="not-prose mt-14">
                      <ArticleNextStepsSection
                        currentSlug={slug}
                        service={finalService}
                        portfolio={finalPortfolio}
                        clusterHub={finalClusterHub}
                        caseStudies={relatedCaseStudies}
                        relatedPosts={relatedPostsForSection}
                        manualLinks={internalPlan.manualRelatedServices}
                      />
                    </div>

                    <div className="mt-10 border-t border-[#E9ECF8] pt-8 sm:flex sm:items-start sm:justify-between">
                      {indexableTags.length > 0 ? (
                        <div className="mb-5">
                          <h5 className="text-body-color mb-3 text-sm font-medium">
                            Etichete:
                          </h5>
                          <div className="flex flex-wrap items-center gap-3">
                            {indexableTags.map((tag: string, i: number) => (
                              <Link
                                href={`/blog/tag/${tag}`}
                                key={i}
                                className="bg-primary/10 text-body-color hover:bg-primary inline-flex items-center justify-center rounded-xs px-4 py-2 transition hover:text-white"
                              >
                                {tag}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : null}

                      <div className="mb-5">
                        <SharePost url={canonical} title={post?.title} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
