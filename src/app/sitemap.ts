import { MetadataRoute } from "next";
import { getTopicClusterEntries, matchesTopicClusterEntry, shouldIndexClusterHub } from "@/config/blog-topic-clusters";
import { serviceData } from "@/static-data/service";
import { integrations } from "../../integrations.config";
import { getCategories, getPostsForSitemap, shouldIndexTagArchive } from "@/sanity/sanity-utils";
import type { BlogSitemapEntry } from "@/types/blog";
import { mobileAppCaseStudies } from "@/app/(site)/portofoliu-aplicatii-mobile/mobile-app-portfolio-data";
import { serviceLandingPageSlugs } from "@/app/(site)/servicii/_landing/service-landing-data";
import { portfolioData } from "@/static-data/portfolio";
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

async function getLatestLastModified(relativePaths: string[], fallback: Date) {
  const dates = await Promise.all(relativePaths.map((relativePath) => getFileLastModified(relativePath, fallback)));
  return dates.reduce((latest, current) => (current > latest ? current : latest), fallback);
}

function resolvePostLastModified(
  post: {
    _updatedAt?: string;
    publishedAt?: string;
  },
  fallback: Date,
) {
  if (post._updatedAt) {
    return new Date(post._updatedAt);
  }

  if (post.publishedAt) {
    return new Date(post.publishedAt);
  }

  return fallback;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteURL = process.env.SITE_URL || "https://www.webdynamicx.ro";
  const fallbackDate = new Date("2025-01-01T00:00:00.000Z");
  const blogPageFileLastModified = await getFileLastModified("src/app/(site)/blog/page.tsx", fallbackDate);

  const staticRouteSources = [
    { url: `${siteURL}/`, file: "src/app/(site)/page.tsx", changeFrequency: "weekly" as const, priority: 1 },
    { url: `${siteURL}/servicii`, file: "src/app/(site)/servicii/page.tsx", changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${siteURL}/portofoliu`, file: "src/app/(site)/portofoliu/page.tsx", changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${siteURL}/despre`, file: "src/app/(site)/despre/page.tsx", changeFrequency: "yearly" as const, priority: 0.6 },
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
  const serviceLandingLastModified = await getLatestLastModified(
    [
      "src/static-data/service.tsx",
      "src/app/(site)/servicii/[slug]/page.tsx",
      "src/app/(site)/servicii/_landing/service-landing-types.ts",
      "src/app/(site)/servicii/_landing/service-landing-template.tsx",
      "src/app/(site)/servicii/_landing/service-landing-data.ts",
    ],
    fallbackDate,
  );
  const mobileAppsServiceLastModified = await getLatestLastModified(
    [
      "src/static-data/service.tsx",
      "src/app/(site)/servicii/[slug]/page.tsx",
      "src/app/(site)/servicii/dezvoltare-aplicatii-mobile/mobile-app-service-data.ts",
      "src/app/(site)/servicii/dezvoltare-aplicatii-mobile/mobile-app-service-page-content.tsx",
      "src/app/(site)/servicii/dezvoltare-aplicatii-mobile/mobile-app-service-faq.tsx",
      "src/app/(site)/servicii/dezvoltare-aplicatii-mobile/mobile-app-service-sidebar.tsx",
    ],
    fallbackDate,
  );

  const servicesRoutes: MetadataRoute.Sitemap = serviceData.map((s) => ({
    url: `${siteURL}/servicii/${s.slug}`,
    lastModified:
      s.slug === "dezvoltare-aplicatii-mobile"
        ? mobileAppsServiceLastModified
        : serviceLandingPageSlugs.includes(s.slug as (typeof serviceLandingPageSlugs)[number])
          ? serviceLandingLastModified
          : serviceDataLastModified,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const mobilePortfolioLastModified = await getLatestLastModified(
    [
      "src/app/(site)/portofoliu-aplicatii-mobile/page.tsx",
      "src/app/(site)/portofoliu-aplicatii-mobile/mobile-app-portfolio-data.ts",
      "src/app/(site)/portofoliu-aplicatii-mobile/[slug]/page.tsx",
    ],
    fallbackDate,
  );

  const mobilePortfolioRoutes: MetadataRoute.Sitemap = [
    {
      url: `${siteURL}/portofoliu-aplicatii-mobile`,
      lastModified: mobilePortfolioLastModified,
      changeFrequency: "monthly",
      priority: 0.68,
    },
    ...mobileAppCaseStudies.map((c) => ({
      url: `${siteURL}/portofoliu-aplicatii-mobile/${c.slug}`,
      lastModified: mobilePortfolioLastModified,
      changeFrequency: "monthly" as const,
      priority: 0.65,
    })),
  ];

  const webPortfolioLastModified = await getLatestLastModified(
    [
      "src/app/(site)/portofoliu/page.tsx",
      "src/app/(site)/portofoliu/[slug]/page.tsx",
      "src/static-data/portfolio.tsx",
      "src/components/Portfolio/SinglePortfolio.tsx",
      "src/components/Portfolio/service-related-portfolio-section.tsx",
    ],
    fallbackDate,
  );

  const webPortfolioRoutes: MetadataRoute.Sitemap = portfolioData.map((item) => ({
    url: `${siteURL}/portofoliu/${item.slug}`,
    lastModified: webPortfolioLastModified,
    changeFrequency: "monthly" as const,
    priority: 0.64,
  }));

  let blogRoutes: MetadataRoute.Sitemap = [];
  let blogIndexLastModified = blogPageFileLastModified;
  let clusterTopicRoutes: MetadataRoute.Sitemap = [];
  let tagRoutes: MetadataRoute.Sitemap = [];
  let postsForSitemap: BlogSitemapEntry[] = [];
  if (integrations?.isSanityEnabled) {
    try {
      postsForSitemap = await getPostsForSitemap();
      const postModifiedDates = postsForSitemap.map((post) => resolvePostLastModified(post, fallbackDate));
      if (postModifiedDates.length > 0) {
        blogIndexLastModified = postModifiedDates.reduce(
          (latest, current) => (current > latest ? current : latest),
          blogPageFileLastModified,
        );
      }
      blogRoutes = (postsForSitemap || [])
        .filter((p: any) => p?.slug?.current)
        .map((p: any) => ({
          url: `${siteURL}/blog/${p.slug.current}`,
          lastModified: resolvePostLastModified(p, fallbackDate),
          changeFrequency: "weekly",
          priority: 0.5,
        }));

      clusterTopicRoutes = getTopicClusterEntries().reduce<MetadataRoute.Sitemap>((routes, entry) => {
        const matchingPosts = postsForSitemap.filter(
          (post) => matchesTopicClusterEntry(entry, post),
        );

        if (!shouldIndexClusterHub(entry, matchingPosts.length)) {
          return routes;
        }

        const latestModified = matchingPosts
          .map((post) => resolvePostLastModified(post, fallbackDate))
          .reduce((latest, current) => (current > latest ? current : latest), fallbackDate);

        routes.push({
          url: `${siteURL}/blog/topic/${entry.id}`,
          lastModified: latestModified,
          changeFrequency: "weekly" as const,
          priority: 0.55,
        });

        return routes;
      }, []);

      const tagDetails = await getCategories();
      const latestPostModifiedByTag = postsForSitemap.reduce<Map<string, Date>>((map, post) => {
        const lastModified = resolvePostLastModified(post, fallbackDate);
        const normalizedTags = Array.isArray(post.tags)
          ? post.tags.map((tag) => tag?.trim().toLowerCase()).filter((tag): tag is string => Boolean(tag))
          : [];

        normalizedTags.forEach((tag) => {
          const existing = map.get(tag);
          if (!existing || lastModified > existing) {
            map.set(tag, lastModified);
          }
        });

        return map;
      }, new Map<string, Date>());

      tagRoutes = tagDetails.reduce<MetadataRoute.Sitemap>((routes, tagDetail) => {
        const tagSlug = tagDetail.slug?.current?.trim().toLowerCase();
        const lastModified = tagSlug ? latestPostModifiedByTag.get(tagSlug) : undefined;
        const postCount = tagSlug ? postsForSitemap.filter((post) => Array.isArray(post.tags) && post.tags.some((tag) => tag?.trim().toLowerCase() === tagSlug)).length : 0;

        if (!tagSlug || !lastModified || !shouldIndexTagArchive(tagDetail, postCount)) {
          return routes;
        }

        routes.push({
          url: `${siteURL}/blog/tag/${tagSlug}`,
          lastModified,
          changeFrequency: "weekly" as const,
          priority: 0.45,
        });

        return routes;
      }, []);
    } catch (e) {
      console.error("[sitemap] Failed to fetch blog posts for sitemap", e);
    }
  }

  const blogIndexRoute: MetadataRoute.Sitemap = [
    {
      url: `${siteURL}/blog`,
      lastModified: blogIndexLastModified,
      changeFrequency: "weekly",
      priority: 0.6,
    },
  ];

  return [
    ...staticRoutes,
    ...blogIndexRoute,
    ...clusterTopicRoutes,
    ...tagRoutes,
    ...servicesRoutes,
    ...webPortfolioRoutes,
    ...mobilePortfolioRoutes,
    ...blogRoutes,
  ];
}
