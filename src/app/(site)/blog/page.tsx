import SingleBlog from "@/components/Blog/SingleBlog";
import PageTitle from "@/components/Common/PageTitle";
import { getPosts } from "@/sanity/sanity-utils";
import { Metadata } from "next";

export const revalidate = 300;

const siteName = process.env.SITE_NAME || "Web Dynamicx";
const siteUrl = process.env.SITE_URL || "https://www.webdynamicx.ro";

export const metadata: Metadata = {
  title: `Blog – web design, creare site, SEO | ${siteName}`,
  description:
    "Resurse practice despre creare site web, magazine online, web design si optimizare SEO. Exemple, ghiduri si bune practici pentru rezultate reale.",
  alternates: { canonical: `${siteUrl}/blog` },
  openGraph: {
    title: `Blog – web design, creare site, SEO | ${siteName}`,
    description:
      "Resurse practice despre creare site web, magazine online, web design si optimizare SEO. Exemple, ghiduri si bune practici pentru rezultate reale.",
    url: `${siteUrl}/blog`,
    siteName: siteName,
    locale: "ro_RO",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `Blog – web design, creare site, SEO | ${siteName}`,
    description:
      "Resurse practice despre creare site web, magazine online, web design si optimizare SEO.",
  },
};

export default async function BlogPage() {
  const posts = await getPosts();

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
    name: `Blog Web Dynamicx` ,
    url: `${siteUrl}/blog`,
    description:
      "Articole și ghiduri despre creare site web, creare magazin online, web design, SEO și promovare site.",
    publisher: {
      "@type": "Organization",
      name: siteName,
      url: siteUrl,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogLd) }}
      />

      <PageTitle
        pageTitle="Blog Web Dynamicx"
        pageDescription="Resurse practice despre creare site, magazine online, design, SEO și marketing digital."
      />
      <section className="container grid gap-8 bg-white pb-20 min-[400px]:grid-cols-[repeat(auto-fill,minmax(23rem,1fr))] sm:pt-[90px]">
        {posts.map((blog) => (
          <SingleBlog key={blog?.slug.current} blog={blog} />
        ))}
      </section>
    </>
  );
}
