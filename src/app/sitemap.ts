import { MetadataRoute } from "next";
import { serviceData } from "@/static-data/service";
import { integrations } from "../../integrations.config";
import { getPosts } from "@/sanity/sanity-utils";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteURL = process.env.SITE_URL || "https://www.webdynamicx.ro";

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteURL}/`, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${siteURL}/servicii`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteURL}/portofoliu`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteURL}/despre`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.6 },
    { url: `${siteURL}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.6 },
    { url: `${siteURL}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.6 },
    { url: `${siteURL}/politica-de-confidentialitate`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.4 },
    { url: `${siteURL}/termeni-si-conditii`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteURL}/politica-cookies`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];

  const servicesRoutes: MetadataRoute.Sitemap = serviceData.map((s) => ({
    url: `${siteURL}/servicii/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  // Portfolio details route was removed, so we do not include per-project URLs
  const portfolioRoutes: MetadataRoute.Sitemap = [];

  let blogRoutes: MetadataRoute.Sitemap = [];
  if (integrations?.isSanityEnabled) {
    try {
      const posts = await getPosts();
      blogRoutes = (posts || [])
        .filter((p: any) => p?.slug?.current)
        .map((p: any) => ({
          url: `${siteURL}/blog/${p.slug.current}`,
          lastModified: p.publishedAt ? new Date(p.publishedAt) : new Date(),
          changeFrequency: "weekly",
          priority: 0.5,
        }));
    } catch (e) {
      // ignore fetch errors; return base sitemap
    }
  }


  return [...staticRoutes, ...servicesRoutes, ...portfolioRoutes, ...blogRoutes];
}
