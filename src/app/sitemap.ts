import { MetadataRoute } from "next";
import { serviceData } from "@/static-data/service";
import { integrations } from "../../integrations.config";
import { getPosts } from "@/sanity/sanity-utils";
import { stat } from "node:fs/promises";
import path from "node:path";

async function getFileLastModified(relativePath: string, fallback: Date) {
  try {
    const filePath = path.join(process.cwd(), relativePath);
    const fileStats = await stat(filePath);
    return fileStats.mtime;
  } catch {
    return fallback;
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteURL = process.env.SITE_URL || "https://www.webdynamicx.ro";
  const fallbackDate = new Date("2025-01-01T00:00:00.000Z");

  const staticRouteSources = [
    { url: `${siteURL}/`, file: "src/app/(site)/page.tsx", changeFrequency: "weekly" as const, priority: 1 },
    { url: `${siteURL}/servicii`, file: "src/app/(site)/servicii/page.tsx", changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${siteURL}/portofoliu`, file: "src/app/(site)/portofoliu/page.tsx", changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${siteURL}/despre`, file: "src/app/(site)/despre/page.tsx", changeFrequency: "yearly" as const, priority: 0.6 },
    { url: `${siteURL}/blog`, file: "src/app/(site)/blog/page.tsx", changeFrequency: "weekly" as const, priority: 0.6 },
    { url: `${siteURL}/contact`, file: "src/app/(site)/contact/page.tsx", changeFrequency: "yearly" as const, priority: 0.6 },
    {
      url: `${siteURL}/politica-de-confidentialitate`,
      file: "src/app/(site)/politica-de-confidentialitate/page.tsx",
      changeFrequency: "yearly" as const,
      priority: 0.4,
    },
    {
      url: `${siteURL}/termeni-si-conditii`,
      file: "src/app/(site)/termeni-si-conditii/page.tsx",
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${siteURL}/politica-cookies`,
      file: "src/app/(site)/politica-cookies/page.tsx",
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
  ];

  const staticRoutes: MetadataRoute.Sitemap = await Promise.all(
    staticRouteSources.map(async (route) => ({
      ...route,
      lastModified: await getFileLastModified(route.file, fallbackDate),
    })),
  );

  const serviceDataLastModified = await getFileLastModified("src/static-data/service.tsx", fallbackDate);
  const servicesRoutes: MetadataRoute.Sitemap = serviceData.map((s) => ({
    url: `${siteURL}/servicii/${s.slug}`,
    lastModified: serviceDataLastModified,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  let blogRoutes: MetadataRoute.Sitemap = [];
  if (integrations?.isSanityEnabled) {
    try {
      const posts = await getPosts();
      blogRoutes = (posts || [])
        .filter((p: any) => p?.slug?.current)
        .map((p: any) => ({
          url: `${siteURL}/blog/${p.slug.current}`,
          lastModified: p._updatedAt ? new Date(p._updatedAt) : p.publishedAt ? new Date(p.publishedAt) : fallbackDate,
          changeFrequency: "weekly",
          priority: 0.5,
        }));
    } catch (e) {
      console.error("[sitemap] Failed to fetch blog posts for sitemap", e);
    }
  }


  return [...staticRoutes, ...servicesRoutes, ...blogRoutes];
}
