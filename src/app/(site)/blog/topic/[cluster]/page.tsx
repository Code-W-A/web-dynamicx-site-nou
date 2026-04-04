import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArchivePagination from "@/components/Blog/archive-pagination";
import SingleBlog from "@/components/Blog/SingleBlog";
import RelatedServiceBlock from "@/components/Blog/internal-linking/related-service-block";
import PageTitle from "@/components/Common/PageTitle";
import {
  getTopicClusterEntries,
  resolveClusterMinimumPostCount,
  resolveClusterConfigById,
  shouldIndexClusterHub,
} from "@/config/blog-topic-clusters";
import {
  buildArchivePageHref,
  paginateArchiveItems,
  resolveArchiveRequestedPage,
} from "@/lib/blog-archive-pagination";
import { resolveBlogCanonicalUrl, resolvePostSeoDescription } from "@/lib/blog-post-text";
import { buildBlogHeroImageUrl, buildBlogOgImageUrl } from "@/sanity/image-helpers";
import { getPostsByCluster } from "@/sanity/sanity-utils";
import type { Blog } from "@/types/blog";

export const revalidate = 60;
export const dynamicParams = false;

type Props = {
  params: Promise<{ cluster: string }>;
  searchParams?: Promise<{ page?: string | string[] }>;
};

const siteName = process.env.SITE_NAME || "Web Dynamicx";
const siteURL = process.env.SITE_URL || "https://www.webdynamicx.ro";

function buildClusterPageTitle(metaTitle: string, page: number) {
  return page > 1 ? `${metaTitle} – pagina ${page}` : metaTitle;
}

export function generateStaticParams() {
  return getTopicClusterEntries().map((entry) => ({
    cluster: entry.id,
  }));
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const searchParams = (await props.searchParams) ?? {};
  const cluster = resolveClusterConfigById(params.cluster);

  if (!cluster) {
    notFound();
  }

  const posts = await getPostsByCluster(cluster.match);
  const listedPosts = posts.filter((post) => Boolean(post.slug?.current));
  const pagination = paginateArchiveItems(listedPosts, resolveArchiveRequestedPage(searchParams.page));
  const canonical = `${siteURL}${buildArchivePageHref(`/blog/topic/${cluster.id}`, pagination.currentPage)}`;
  const shouldIndex = shouldIndexClusterHub(cluster, listedPosts.length);

  if (pagination.isOutOfRange) {
    notFound();
  }

  return {
    title: buildClusterPageTitle(cluster.hub.metaTitle, pagination.currentPage),
    description: cluster.hub.metaDescription,
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
      title: buildClusterPageTitle(cluster.hub.metaTitle, pagination.currentPage),
      description: cluster.hub.metaDescription,
      url: canonical,
      siteName,
      locale: "ro_RO",
      type: "website",
    },
    twitter: {
      card: "summary",
      title: buildClusterPageTitle(cluster.hub.metaTitle, pagination.currentPage),
      description: cluster.hub.metaDescription,
    },
  };
}

export default async function BlogTopicClusterPage(props: Props) {
  const params = await props.params;
  const searchParams = (await props.searchParams) ?? {};
  const cluster = resolveClusterConfigById(params.cluster);

  if (!cluster) {
    notFound();
  }

  const posts = await getPostsByCluster(cluster.match);
  const listedPosts = posts.filter((post) => Boolean(post.slug?.current));
  const pagination = paginateArchiveItems(listedPosts, resolveArchiveRequestedPage(searchParams.page));
  const canonical = `${siteURL}${buildArchivePageHref(`/blog/topic/${cluster.id}`, pagination.currentPage)}`;
  const minimumPostCount = resolveClusterMinimumPostCount(cluster);
  const shouldIndex = shouldIndexClusterHub(cluster, listedPosts.length);

  if (pagination.isOutOfRange) {
    notFound();
  }

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Acasă", item: `${siteURL}` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${siteURL}/blog` },
      { "@type": "ListItem", position: 3, name: cluster.hub.title, item: canonical },
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
          description: resolvePostSeoDescription(post, cluster.hub.metaDescription),
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
        pageTitle={pagination.currentPage > 1 ? `${cluster.hub.title} – pagina ${pagination.currentPage}` : cluster.hub.title}
        pageDescription={cluster.hub.intro}
        breadcrumbs={[
          { name: "Acasă", href: "/" },
          { name: "Blog", href: "/blog" },
          { name: cluster.hub.title, current: true },
        ]}
      />

      {!shouldIndex ? (
        <section className="container bg-white pt-6">
          <div className="max-w-3xl rounded-[1.5rem] border border-amber-200 bg-amber-50/80 p-6 text-sm leading-7 text-amber-900">
            Acest hub de cluster rămâne util pentru navigare și internal linking, dar intră la index doar după ce
            atinge un prag minim de conținut. În acest moment are{" "}
            {listedPosts.length}
            {" "}articole publicate; recomandarea pentru indexare este de cel puțin{" "}
            {minimumPostCount}
            .
          </div>
        </section>
      ) : null}

      <section className="container bg-white pb-20">
        <div className="max-w-4xl">
          <RelatedServiceBlock
            title={cluster.serviceBlockTitle}
            description={cluster.serviceBlockDescription}
            href={cluster.serviceHref}
            ctaLabel={cluster.serviceCtaLabel}
            className="mb-10"
          />
        </div>

        {listedPosts.length > 0 ? (
          <>
            <div className="grid gap-8 min-[400px]:grid-cols-[repeat(auto-fill,minmax(23rem,1fr))] sm:pt-[40px]">
              {pagination.items.map((blog) => (
                <SingleBlog key={blog.slug?.current} blog={blog as Blog} />
              ))}
            </div>
            <ArchivePagination
              basePath={`/blog/topic/${cluster.id}`}
              currentPage={pagination.currentPage}
              totalPages={pagination.totalPages}
            />
          </>
        ) : (
          <div className="max-w-3xl rounded-[1.75rem] border border-slate-200 bg-slate-50/80 p-8 text-slate-700 shadow-[0_14px_45px_rgba(15,23,42,0.05)]">
            Articolele din acest cluster vor apărea aici pe măsură ce publicăm ghiduri noi. Până atunci, poți
            continua cu pagina principală de serviciu:
            {" "}
            <a href={cluster.serviceHref} className="font-semibold text-primary underline-offset-4 hover:underline">
              {cluster.hub.ctaLabel}
            </a>
            .
          </div>
        )}
      </section>
    </>
  );
}
