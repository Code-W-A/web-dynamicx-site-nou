import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArchivePagination from "@/components/Blog/archive-pagination";
import SingleBlog from "@/components/Blog/SingleBlog";
import PageTitle from "@/components/Common/PageTitle";
import {
  buildArchivePageHref,
  paginateArchiveItems,
  resolveArchiveRequestedPage,
} from "@/lib/blog-archive-pagination";
import { resolveBlogCanonicalUrl, resolvePostSeoDescription } from "@/lib/blog-post-text";
import { buildBlogHeroImageUrl, buildBlogOgImageUrl } from "@/sanity/image-helpers";
import {
  getPostByTag,
  getTagDetailBySlug,
  resolveTagMinimumPostCount,
  shouldIndexTagArchive,
} from "@/sanity/sanity-utils";
import type { Blog, BlogTagDetail } from "@/types/blog";

export const revalidate = 60;

type Props = {
  params: Promise<{ tag: string }>;
  searchParams?: Promise<{ page?: string | string[] }>;
};

const siteName = process.env.SITE_NAME || "Web Dynamicx";
const siteURL = process.env.SITE_URL || "https://www.webdynamicx.ro";

function normalizeTag(tag: string) {
  return tag.trim().toLowerCase();
}

function formatTagLabel(tag: string) {
  return tag
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function resolveTagPageTitle(tagDetail: BlogTagDetail | null, normalizedTag: string) {
  const formattedTag = formatTagLabel(normalizedTag);
  return tagDetail?.title?.trim() || `Articole despre ${formattedTag}`;
}

function resolveTagPageDescription(tagDetail: BlogTagDetail | null, normalizedTag: string) {
  const formattedTag = formatTagLabel(normalizedTag);
  return (
    tagDetail?.description?.trim() ||
    `Articole și ghiduri despre ${formattedTag}, publicate în blogul Web Dynamicx.`
  );
}

function resolveTagPageImage(tagDetail: BlogTagDetail | null, posts: Blog[]) {
  if (tagDetail?.image) {
    return buildBlogOgImageUrl(tagDetail.image);
  }

  const leadPost = posts.find((post) => post.ogImage || post.mainImage);
  if (leadPost?.ogImage) {
    return buildBlogOgImageUrl(leadPost.ogImage);
  }

  if (leadPost?.mainImage) {
    return buildBlogHeroImageUrl(leadPost.mainImage);
  }

  return undefined;
}

function buildTagMetadataTitle(pageTitle: string, page: number) {
  return page > 1 ? `${pageTitle} – pagina ${page} | ${siteName}` : `${pageTitle} | ${siteName}`;
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const searchParams = (await props.searchParams) ?? {};
  const normalizedTag = normalizeTag(params.tag);
  const [posts, tagDetail] = await Promise.all([getPostByTag(normalizedTag), getTagDetailBySlug(normalizedTag)]);

  if (posts.length === 0) {
    notFound();
  }

  const listedPosts = posts.filter((post) => Boolean(post.slug?.current));
  const pagination = paginateArchiveItems(listedPosts, resolveArchiveRequestedPage(searchParams.page));

  if (pagination.isOutOfRange) {
    notFound();
  }

  const canonical = `${siteURL}${buildArchivePageHref(`/blog/tag/${normalizedTag}`, pagination.currentPage)}`;
  const pageTitle = resolveTagPageTitle(tagDetail, normalizedTag);
  const description = resolveTagPageDescription(tagDetail, normalizedTag);
  const shouldIndex = shouldIndexTagArchive(tagDetail, listedPosts.length);
  const pageImage = resolveTagPageImage(tagDetail, posts);

  return {
    title: buildTagMetadataTitle(pageTitle, pagination.currentPage),
    description,
    alternates: {
      canonical,
    },
    robots: {
      index: shouldIndex,
      follow: true,
      nocache: true,
      googleBot: {
        index: shouldIndex,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: buildTagMetadataTitle(pageTitle, pagination.currentPage),
      description,
      url: canonical,
      siteName,
      locale: "ro_RO",
      type: "website",
      images: pageImage ? [{ url: pageImage, alt: pageTitle }] : undefined,
    },
    twitter: {
      card: pageImage ? "summary_large_image" : "summary",
      title: buildTagMetadataTitle(pageTitle, pagination.currentPage),
      description,
      images: pageImage ? [pageImage] : undefined,
    },
  };
}

export default async function TagSlugPage(props: Props) {
  const params = await props.params;
  const searchParams = (await props.searchParams) ?? {};
  const normalizedTag = normalizeTag(params.tag);
  const [posts, tagDetail] = await Promise.all([getPostByTag(normalizedTag), getTagDetailBySlug(normalizedTag)]);

  if (posts.length === 0) {
    notFound();
  }

  const listedPosts = posts.filter((post) => Boolean(post.slug?.current));
  const pagination = paginateArchiveItems(listedPosts, resolveArchiveRequestedPage(searchParams.page));

  if (pagination.isOutOfRange) {
    notFound();
  }

  const canonical = `${siteURL}${buildArchivePageHref(`/blog/tag/${normalizedTag}`, pagination.currentPage)}`;
  const pageTitle = resolveTagPageTitle(tagDetail, normalizedTag);
  const description = resolveTagPageDescription(tagDetail, normalizedTag);
  const minimumPostCount = resolveTagMinimumPostCount(tagDetail);
  const shouldIndex = shouldIndexTagArchive(tagDetail, listedPosts.length);

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Acasă", item: `${siteURL}` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${siteURL}/blog` },
      { "@type": "ListItem", position: 3, name: pageTitle, item: canonical },
    ],
  };

  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListOrder: "https://schema.org/ItemListOrderDescending",
    numberOfItems: pagination.items.length,
    itemListElement: pagination.items.map((post, index) => {
      const articleCanonical = resolveBlogCanonicalUrl(post, siteURL);
      const image = post.ogImage
        ? buildBlogOgImageUrl(post.ogImage)
        : post.mainImage
          ? buildBlogHeroImageUrl(post.mainImage)
          : undefined;

      return {
        "@type": "ListItem",
        position: pagination.startIndex + index + 1,
        url: articleCanonical,
        name: post.title,
        item: {
          "@type": "BlogPosting",
          headline: post.title,
          url: articleCanonical,
          description: resolvePostSeoDescription(post, description),
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }}
      />
      <PageTitle
        pageTitle={pagination.currentPage > 1 ? `${pageTitle} – pagina ${pagination.currentPage}` : pageTitle}
        pageDescription={description}
        breadcrumbs={[
          { name: "Acasă", href: "/" },
          { name: "Blog", href: "/blog" },
          { name: pageTitle, current: true },
        ]}
      />
      {!shouldIndex ? (
        <section className="container bg-white pt-6">
          <div className="max-w-3xl rounded-[1.5rem] border border-amber-200 bg-amber-50/80 p-6 text-sm leading-7 text-amber-900">
            Acest tag este folosit în navigarea editorială, dar nu este încă suficient de puternic pentru indexare.
            Pentru a intra la index, editorul trebuie să activeze explicit `Indexable in Google` și să existe cel puțin
            {" "}
            {minimumPostCount}
            {" "}articole publicate în acest tag.
          </div>
        </section>
      ) : null}
      <section className="container bg-white pb-20 sm:pt-[40px]">
        <div className="grid gap-8 min-[400px]:grid-cols-[repeat(auto-fill,minmax(23rem,1fr))]">
          {pagination.items.map((post) => (
            <SingleBlog key={post.slug?.current} blog={post} />
          ))}
        </div>
        <ArchivePagination
          basePath={`/blog/tag/${normalizedTag}`}
          currentPage={pagination.currentPage}
          totalPages={pagination.totalPages}
        />
      </section>
    </>
  );
}
