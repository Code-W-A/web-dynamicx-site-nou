import SingleBlog from "@/components/Blog/SingleBlog";
import PageTitle from "@/components/Common/PageTitle";
import { getPostByTag } from "@/sanity/sanity-utils";
import { Blog } from "@/types/blog";
import type { Metadata } from "next";

export const revalidate = 300;

type Props = {
  params: Promise<{ tag: string }>;
};

const siteName = process.env.SITE_NAME || "Web Dynamicx";
const siteURL = process.env.SITE_URL || "https://www.webdynamicx.ro";
const authorName = process.env.AUTHOR_NAME || "Web Dynamicx";

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const { tag } = params;

  const formattedTag = tag.charAt(0).toUpperCase() + tag.slice(1);

  if (tag) {
    return {
      title: `${formattedTag} | ${siteName}`,
      description: `Articole din blog etichetate cu "${formattedTag}" pe ${siteName}.`,
      authors: [{ name: authorName }],
      alternates: {
        canonical: `${siteURL}/blog/tag/${tag}`,
      },

      robots: {
        index: false,
        follow: true,
        nocache: true,
      },
    };
  } else {
    return {
      title: "Etichetă inexistentă",
      description: "Nu a fost găsită eticheta solicitată.",
    };
  }
}

export default async function TagSlugPage(props: Props) {
  const params = await props.params;
  const { tag } = params;
  const formattedTag = tag.charAt(0).toUpperCase() + tag.slice(1);

  const posts: Blog[] = await getPostByTag(tag);

  return (
    <>
      <PageTitle
        pageTitle={`${formattedTag}`}
        pageDescription={`Articole etichetate cu "${formattedTag}" din blogul Web Dynamicx.`}
      />
      <section className="container grid gap-8 bg-white pb-20 min-[400px]:grid-cols-[repeat(auto-fill,minmax(23rem,1fr))] sm:pt-[90px]">
        {posts.map((post) => (
          <SingleBlog key={post.slug.current} blog={post} />
        ))}
      </section>
    </>
  );
}
