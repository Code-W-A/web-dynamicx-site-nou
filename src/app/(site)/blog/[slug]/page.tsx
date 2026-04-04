import RenderBodyContent from "@/components/Blog/BlogDetails/RenderBodyContent";
import PortfolioHubBlock from "@/components/Blog/internal-linking/portfolio-hub-block";
import RelatedClusterHubBlock from "@/components/Blog/internal-linking/related-cluster-hub-block";
import RelevantCaseStudiesBlock from "@/components/Blog/internal-linking/relevant-case-studies-block";
import RelatedPostsSection from "@/components/Blog/internal-linking/related-posts-section";
import RelatedServiceBlock from "@/components/Blog/internal-linking/related-service-block";
import Breadcrumbs, { type BreadcrumbItem } from "@/components/Common/Breadcrumbs";
import { getRelatedCaseStudies } from "@/app/(site)/portofoliu-aplicatii-mobile/mobile-app-portfolio-data";
import { buildArticleInternalLinkingPlan } from "@/lib/blog-article-internal-links";
import { resolveBlogCanonicalUrl, resolvePostSeoDescription } from "@/lib/blog-post-text";
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

  const internalPlan = buildArticleInternalLinkingPlan(post, siteURL);
  const relatedCaseStudies = getRelatedCaseStudies(post.relatedCaseStudies ?? []).slice(0, 2);
  const indexableTags = await getIndexableTags(post.tags);
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
                  <div className="relative mb-10 aspect-848/384 w-full overflow-hidden rounded-sm">
                    {heroImage ? (
                      <Image
                        src={heroImage}
                        alt={mainImageAlt}
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 66vw"
                        className="h-full w-full object-cover object-center"
                      />
                    ) : null}
                  </div>
                  <div className="mb-6">
                    <Breadcrumbs items={breadcrumbItems} align="start" compact />
                  </div>
                  <h1 className="mb-8 text-3xl leading-tight font-bold text-black sm:text-4xl sm:leading-tight">
                    {post?.title}
                  </h1>
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
                    {indexableTags.length > 0 ? (
                      <div className="mb-5">
                        <Link
                          href={`/blog/tag/${indexableTags[0]}`}
                          className="bg-primary inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-white"
                        >
                          {indexableTags[0]}
                        </Link>
                      </div>
                    ) : null}
                  </div>
                  <div>
                    {internalPlan.showAutoServiceBlock || internalPlan.showClusterHubBlock ? (
                      <div className="not-prose mb-8 grid gap-4 lg:grid-cols-2">
                        {internalPlan.showAutoServiceBlock && internalPlan.cluster ? (
                          <RelatedServiceBlock
                            title={internalPlan.cluster.serviceBlockTitle}
                            description={internalPlan.cluster.serviceBlockDescription}
                            href={internalPlan.cluster.serviceHref}
                            ctaLabel={internalPlan.cluster.serviceCtaLabel}
                            className="h-full"
                          />
                        ) : null}

                        {internalPlan.showClusterHubBlock && internalPlan.clusterHub ? (
                          <RelatedClusterHubBlock
                            title={internalPlan.clusterHub.title}
                            description={internalPlan.clusterHub.description}
                            href={internalPlan.clusterHub.href}
                            ctaLabel={internalPlan.clusterHub.ctaLabel}
                            className="h-full"
                          />
                        ) : null}
                      </div>
                    ) : null}

                    <div className="prose prose-zinc prose-blockquote:rounded-xs prose-blockquote:border-l-0 prose-blockquote:bg-primary prose-blockquote:p-8 prose-blockquote:text-center prose-blockquote:italic prose-blockquote:text-white mb-8 max-w-none">
                      <RenderBodyContent post={post} />
                    </div>

                    <div className="not-prose mb-8 space-y-6">
                      {internalPlan.manualRelatedServices.length > 0 ? (
                        <aside
                          className="rounded-sm border border-[#E9ECF8] bg-white p-5 sm:p-6"
                          aria-labelledby="manual-service-links-heading"
                        >
                          <h2
                            id="manual-service-links-heading"
                            className="text-sm font-semibold tracking-tight text-slate-950"
                          >
                            {internalPlan.showAutoServiceBlock ? "Și alte pagini utile" : "Resurse utile"}
                          </h2>
                          <ul className="mt-3 space-y-2 text-sm">
                            {internalPlan.manualRelatedServices.map((item) => (
                              <li key={`${item.href}-${item.title}`}>
                                <Link
                                  href={item.href}
                                  className="font-medium text-primary underline-offset-4 hover:underline"
                                >
                                  {item.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </aside>
                      ) : null}

                      {internalPlan.showPortfolioHubBlock && internalPlan.portfolioHub ? (
                        <PortfolioHubBlock
                          title={internalPlan.portfolioHub.title}
                          description={internalPlan.portfolioHub.description}
                          href={internalPlan.portfolioHub.href}
                          ctaLabel={internalPlan.portfolioHub.ctaLabel}
                        />
                      ) : null}

                      <RelevantCaseStudiesBlock studies={relatedCaseStudies} />

                      <RelatedPostsSection posts={relatedPostsForSection} currentSlug={slug} />
                    </div>

                    <div className="items-center justify-between sm:flex">
                      {indexableTags.length > 0 ? (
                        <div className="mb-5">
                        <h5 className="text-body-color mb-3 text-sm font-medium">
                          Etichete:
                        </h5>
                        <div className="flex items-center">
                          {indexableTags.map((tag: string, i: number) => (
                            <Link
                              href={`/blog/tag/${tag}`}
                              key={i}
                              className="bg-primary/10 text-body-color hover:bg-primary mr-4 inline-flex items-center justify-center rounded-xs px-4 py-2 transition hover:text-white"
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
