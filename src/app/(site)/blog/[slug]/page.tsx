import { structuredAlgoliaHtmlData } from "@/app/libs/crawlIndex";
import RenderBodyContent from "@/components/Blog/BlogDetails/RenderBodyContent";
import { getPostBySlug, imageBuilder } from "@/sanity/sanity-utils";
import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import { SharePost } from "@/app/(site)/blog/[slug]/_components/share-post";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(props: Props) {
  const params = await props.params;
  const { slug } = params;
  const post: any = await getPostBySlug(slug);

  const siteURL = process.env.SITE_URL;
  const siteName = process.env.SITE_NAME;
  const authorName = process.env.AUTHOR_NAME;

  if (post) {
    const title = post.metaTitle || post.title || `Articol | ${siteName}`;
    const description =
      post.metaDescription || post.excerpt || post.metadata || "Articol de pe blogul Web Dynamicx.";
    const canonical = post.canonicalUrl || `${siteURL}/blog/${post?.slug?.current}`;
    const ogImage = post.mainImage ? imageBuilder(post.mainImage).url() : undefined;

    return {
      title,
      description,
      alternates: { canonical },
      authors: authorName ? [{ name: authorName }] : undefined,
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
                width: 1800,
                height: 1600,
                alt: post.title,
              },
            ]
          : undefined,
        locale: "ro_RO",
        type: "article",
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        creator: authorName ? `@${authorName}` : undefined,
        site: siteName ? `@${siteName}` : undefined,
        images: ogImage ? [ogImage] : undefined,
      },
    } as any;
  } else {
    return {
      title: "Articol negăsit",
      description: "Nu am găsit acest articol.",
    } as any;
  }
}

export default async function BlogSlugPage(props: Props) {
  const params = await props.params;
  const { slug } = params;

  const post: any = await getPostBySlug(slug);

  if (post) {
    await structuredAlgoliaHtmlData({
      type: "blog",
      title: post?.title || "",
      htmlString: post?.metaDescription || post?.excerpt || post?.metadata || "",
      pageUrl: `${process.env.SITE_URL}/blog/${post?.slug?.current}`,
      imageURL: post?.mainImage ? imageBuilder(post?.mainImage).url() : "",
    });
  }

  const siteURL = process.env.SITE_URL;
  const siteName = process.env.SITE_NAME;

  const breadcrumbLd = post && {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Acasă", item: `${siteURL}` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${siteURL}/blog` },
      { "@type": "ListItem", position: 3, name: post?.title, item: `${siteURL}/blog/${post?.slug?.current}` },
    ],
  };

  const articleLd = post && {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post?.metaTitle || post?.title,
    description: post?.metaDescription || post?.excerpt || post?.metadata,
    image: post?.mainImage ? imageBuilder(post?.mainImage).url() : undefined,
    author: post?.author?.name ? { "@type": "Person", name: post?.author?.name } : undefined,
    publisher: { "@type": "Organization", name: siteName },
    datePublished: post?.publishedAt,
    mainEntityOfPage: `${siteURL}/blog/${post?.slug?.current}`,
  };

  return (
    <>
      {post && (
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
        </>
      )}

      <section className="bg-white pt-[150px]">
        <div className="container">
          <div className="border-b border-[#E9ECF8] pb-[120px]">
            <div className="mx-[-16px] flex flex-wrap justify-center">
              <div className="w-full px-4 lg:w-8/12">
                <div>
                  <div className="relative mb-10 aspect-848/384 w-full overflow-hidden rounded-sm">
                    {post?.mainImage && (
                      <Image
                        src={imageBuilder(post?.mainImage).url()}
                        alt={post?.title}
                        fill
                        className="h-full w-full object-cover object-center"
                      />
                    )}
                  </div>
                  <h1 className="mb-8 text-3xl leading-tight font-bold text-black sm:text-4xl sm:leading-tight">
                    {post?.title}
                  </h1>
                  <div className="mb-10 flex flex-wrap items-center justify-between border-b border-[#E9ECF8] pb-4">
                    <div className="flex flex-wrap items-center">
                      <div className="mr-10 mb-5 flex items-center">
                        {post?.author?.image && (
                          <div className="mr-4 h-[40px] w-full max-w-[40px] overflow-hidden rounded-full">
                            <Image
                              src={imageBuilder(post?.author?.image as any).url()}
                              alt={post?.author?.name as any}
                              width={40}
                              height={40}
                            />
                          </div>
                        )}
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
                    <div className="mb-5">
                      <Link
                        href={`/blog/tag/${post?.tags ? post?.tags[0] : "not-found"}`}
                        className="bg-primary inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-white"
                      >
                        {post?.tags ? post?.tags[0] : "fără-tag"}
                      </Link>
                    </div>
                  </div>
                  <div>
                    <div className="prose prose-zinc prose-blockquote:rounded-xs prose-blockquote:border-l-0 prose-blockquote:bg-primary prose-blockquote:p-8 prose-blockquote:text-center prose-blockquote:italic prose-blockquote:text-white mb-8 max-w-none">
                      <RenderBodyContent post={post} />
                    </div>

                    <div className="items-center justify-between sm:flex">
                      <div className="mb-5">
                        <h5 className="text-body-color mb-3 text-sm font-medium">
                          Etichete:
                        </h5>
                        <div className="flex items-center">
                          {post?.tags?.map((tag: string, i: number) => (
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

                      <div className="mb-5">
                        <SharePost url={`${siteURL}/blog/${post?.slug?.current}`} title={post?.title} />
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
