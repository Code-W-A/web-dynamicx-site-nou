import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArchivePagination from "@/components/Blog/archive-pagination";
import SingleBlog from "@/components/Blog/SingleBlog";
import TopicClusterHubsSection from "@/components/Blog/internal-linking/topic-cluster-hubs-section";
import PageTitle from "@/components/Common/PageTitle";
import {
  buildArchivePageHref,
  paginateArchiveItems,
  resolveArchiveRequestedPage,
} from "@/lib/blog-archive-pagination";
import { resolveBlogCanonicalUrl, resolvePostSeoDescription } from "@/lib/blog-post-text";
import {
  getTopicClusterEntries,
  matchesTopicClusterEntry,
  shouldIndexClusterHub,
} from "@/config/blog-topic-clusters";
import { buildBlogHeroImageUrl, buildBlogOgImageUrl } from "@/sanity/image-helpers";
import { getPosts } from "@/sanity/sanity-utils";

export const revalidate = 60;

type Props = {
  searchParams?: Promise<{ page?: string | string[] }>;
};

const siteName = process.env.SITE_NAME || "Web Dynamicx";
const siteUrl = process.env.SITE_URL || "https://www.webdynamicx.ro";
const organizationLogoUrl =
  process.env.NEXT_PUBLIC_ORGANIZATION_LOGO_URL?.trim() || `${siteUrl}/images/logo/logo.svg`;

function buildBlogPageTitle(page: number) {
  return page > 1
    ? `Blog – web design, creare site, SEO – pagina ${page} | ${siteName}`
    : `Blog – web design, creare site, SEO | ${siteName}`;
}

function buildBlogPageDescription(page: number) {
  const baseDescription =
    "Resurse practice despre creare site web, magazine online, web design și optimizare SEO. Exemple, ghiduri și bune practici pentru rezultate reale.";

  return page > 1 ? `${baseDescription} Pagina ${page}.` : baseDescription;
}

function buildBlogHubCards(posts: Awaited<ReturnType<typeof getPosts>>) {
  return getTopicClusterEntries()
    .filter((entry) => {
      const matchingPosts = posts.filter((post) => matchesTopicClusterEntry(entry, post));
      return shouldIndexClusterHub(entry, matchingPosts.length);
    })
    .map((entry) => {
      const matchingPosts = posts.filter((post) => matchesTopicClusterEntry(entry, post));
      return {
        id: entry.id,
        title: entry.hub.title,
        intro: entry.hub.intro,
        hubHref: `/blog/topic/${entry.id}`,
        serviceHref: entry.serviceHref,
        serviceCtaLabel: entry.serviceCtaLabel,
        postCount: matchingPosts.length,
      };
    });
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const searchParams = (await props.searchParams) ?? {};
  const requestedPage = resolveArchiveRequestedPage(searchParams.page);
  const posts = await getPosts();
  const listedPosts = posts.filter((post) => Boolean(post?.slug?.current));
  const pagination = paginateArchiveItems(listedPosts, requestedPage);

  if (pagination.isOutOfRange) {
    notFound();
  }

  const canonical = `${siteUrl}${buildArchivePageHref("/blog", pagination.currentPage)}`;
  const title = buildBlogPageTitle(pagination.currentPage);
  const description = buildBlogPageDescription(pagination.currentPage);

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteName,
      locale: "ro_RO",
      type: "website",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

export default async function BlogPage(props: Props) {
  const searchParams = (await props.searchParams) ?? {};
  const requestedPage = resolveArchiveRequestedPage(searchParams.page);
  const posts = await getPosts();
  const listedPosts = posts.filter((post) => Boolean(post?.slug?.current));
  const pagination = paginateArchiveItems(listedPosts, requestedPage);

  if (pagination.isOutOfRange) {
    notFound();
  }

  const clusterHubCards = buildBlogHubCards(listedPosts);

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Acasă",
        item: `${siteUrl}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${siteUrl}/blog`,
      },
    ],
  };

  const blogLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog Web Dynamicx",
    url: `${siteUrl}/blog`,
    description:
      "Articole și ghiduri despre creare site web, creare magazin online, web design, SEO și promovare site.",
    publisher: {
      "@type": "Organization",
      name: siteName,
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: organizationLogoUrl,
      },
    },
  };

  const blogItemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListOrder: "https://schema.org/ItemListOrderDescending",
    numberOfItems: pagination.items.length,
    itemListElement: pagination.items.map((post, index) => {
      const canonical = resolveBlogCanonicalUrl(post, siteUrl);
      const description = resolvePostSeoDescription(post, "Articol de pe blogul Web Dynamicx.");
      const image = post.ogImage
        ? buildBlogOgImageUrl(post.ogImage)
        : post.mainImage
          ? buildBlogHeroImageUrl(post.mainImage)
          : undefined;

      return {
        "@type": "ListItem",
        position: pagination.startIndex + index + 1,
        url: canonical,
        name: post.title,
        item: {
          "@type": "BlogPosting",
          headline: post.title,
          url: canonical,
          description,
          image,
          datePublished: post.publishedAt,
          dateModified: post._updatedAt,
        },
      };
    }),
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogLd) }}
      />
      <script
        type="application/ld+json"
        // @ts-ignore
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogItemListLd) }}
      />

      <PageTitle
        pageTitle={pagination.currentPage > 1 ? `Blog Web Dynamicx – pagina ${pagination.currentPage}` : "Blog Web Dynamicx"}
        pageDescription="Resurse practice despre creare site, magazine online, design, SEO și marketing digital."
      />
      <TopicClusterHubsSection items={clusterHubCards} />
      <section className="container bg-white pb-20 sm:pt-[90px]">
        <div className="grid gap-8 min-[400px]:grid-cols-[repeat(auto-fill,minmax(23rem,1fr))]">
          {pagination.items.map((blog) => (
            <SingleBlog key={blog?.slug?.current} blog={blog} />
          ))}
        </div>
        <ArchivePagination basePath="/blog" currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      </section>
    </>
  );
}
