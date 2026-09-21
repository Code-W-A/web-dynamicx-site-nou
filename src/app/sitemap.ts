import { MetadataRoute } from "next";
import {
  getTopicClusterEntries,
  matchesTopicClusterEntry,
  shouldIndexClusterHub,
} from "@/config/blog-topic-clusters";
import { serviceData } from "@/static-data/service";
import { integrations } from "../../integrations.config";
import {
  getCategories,
  getPostsForSitemap,
  shouldIndexTagArchive,
} from "@/sanity/sanity-utils";
import type { BlogSitemapEntry } from "@/types/blog";
import { mobileAppCaseStudies } from "@/app/(site)/portofoliu-aplicatii-mobile/mobile-app-portfolio-data";
import { portfolioData } from "@/static-data/portfolio";
import {
  softwarePortfolio,
  softwarePortfolioHubPath,
} from "@/static-data/portfolio-additions";

function resolvePostLastModified(post: {
  _updatedAt?: string;
  publishedAt?: string;
}) {
  const value = post._updatedAt || post.publishedAt;
  if (!value) return undefined;

  const date = new Date(value);

  return Number.isNaN(date.getTime()) ? undefined : date;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteURL = process.env.SITE_URL || "https://www.webdynamicx.ro";

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteURL}/` },
    { url: `${siteURL}/servicii` },
    { url: `${siteURL}/portofoliu` },
    { url: `${siteURL}/despre` },
    { url: `${siteURL}/contact` },
    {
      url: `${siteURL}/politica-de-confidentialitate`,
    },
    {
      url: `${siteURL}/termeni-si-conditii`,
    },
    {
      url: `${siteURL}/politica-cookies`,
    },
  ];

  const servicesRoutes: MetadataRoute.Sitemap = serviceData.map((s) => ({
    url: `${siteURL}/servicii/${s.slug}`,
  }));

  const mobilePortfolioRoutes: MetadataRoute.Sitemap = [
    {
      url: `${siteURL}/portofoliu-aplicatii-mobile`,
    },
    ...mobileAppCaseStudies.map((c) => ({
      url: `${siteURL}/portofoliu-aplicatii-mobile/${c.slug}`,
    })),
  ];

  const webPortfolioRoutes: MetadataRoute.Sitemap = portfolioData.map(
    (item) => ({
      url: `${siteURL}/portofoliu/${item.slug}`,
    }),
  );

  let blogRoutes: MetadataRoute.Sitemap = [];
  let blogIndexLastModified: Date | undefined;
  let clusterTopicRoutes: MetadataRoute.Sitemap = [];
  let tagRoutes: MetadataRoute.Sitemap = [];
  let postsForSitemap: BlogSitemapEntry[] = [];
  if (integrations?.isSanityEnabled) {
    try {
      postsForSitemap = await getPostsForSitemap();
      const postModifiedDates = postsForSitemap
        .map((post) => resolvePostLastModified(post))
        .filter((date): date is Date => Boolean(date));
      if (postModifiedDates.length > 0) {
        blogIndexLastModified = postModifiedDates.reduce((latest, current) =>
          current > latest ? current : latest,
        );
      }
      blogRoutes = (postsForSitemap || [])
        .filter((p: any) => p?.slug?.current)
        .map((p: any) => ({
          url: `${siteURL}/blog/${p.slug.current}`,
          lastModified: resolvePostLastModified(p),
          changeFrequency: "weekly",
          priority: 0.5,
        }));

      clusterTopicRoutes =
        getTopicClusterEntries().reduce<MetadataRoute.Sitemap>(
          (routes, entry) => {
            const matchingPosts = postsForSitemap.filter((post) =>
              matchesTopicClusterEntry(entry, post),
            );

            if (!shouldIndexClusterHub(entry, matchingPosts.length)) {
              return routes;
            }

            const matchingModifiedDates = matchingPosts
              .map((post) => resolvePostLastModified(post))
              .filter((date): date is Date => Boolean(date));
            const latestModified = matchingModifiedDates.length
              ? matchingModifiedDates.reduce((latest, current) =>
                  current > latest ? current : latest,
                )
              : undefined;

            routes.push({
              url: `${siteURL}/blog/topic/${entry.id}`,
              lastModified: latestModified,
              changeFrequency: "weekly" as const,
              priority: 0.55,
            });

            return routes;
          },
          [],
        );

      const tagDetails = await getCategories();
      const latestPostModifiedByTag = postsForSitemap.reduce<Map<string, Date>>(
        (map, post) => {
          const lastModified = resolvePostLastModified(post);
          if (!lastModified) return map;
          const normalizedTags = Array.isArray(post.tags)
            ? post.tags
                .map((tag) => tag?.trim().toLowerCase())
                .filter((tag): tag is string => Boolean(tag))
            : [];

          normalizedTags.forEach((tag) => {
            const existing = map.get(tag);
            if (!existing || lastModified > existing) {
              map.set(tag, lastModified);
            }
          });

          return map;
        },
        new Map<string, Date>(),
      );

      tagRoutes = tagDetails.reduce<MetadataRoute.Sitemap>(
        (routes, tagDetail) => {
          const tagSlug = tagDetail.slug?.current?.trim().toLowerCase();
          const lastModified = tagSlug
            ? latestPostModifiedByTag.get(tagSlug)
            : undefined;
          const postCount = tagSlug
            ? postsForSitemap.filter(
                (post) =>
                  Array.isArray(post.tags) &&
                  post.tags.some(
                    (tag) => tag?.trim().toLowerCase() === tagSlug,
                  ),
              ).length
            : 0;

          if (
            !tagSlug ||
            !lastModified ||
            !shouldIndexTagArchive(tagDetail, postCount)
          ) {
            return routes;
          }

          routes.push({
            url: `${siteURL}/blog/tag/${tagSlug}`,
            lastModified,
            changeFrequency: "weekly" as const,
            priority: 0.45,
          });

          return routes;
        },
        [],
      );
    } catch (e) {
      console.error("[sitemap] Failed to fetch blog posts for sitemap", e);
    }
  }

  const blogIndexRoute: MetadataRoute.Sitemap = [
    {
      url: `${siteURL}/blog`,
      lastModified: blogIndexLastModified,
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
    { url: `${siteURL}${softwarePortfolioHubPath}` },
    ...softwarePortfolio.map(({ slug }) => ({
      url: `${siteURL}${softwarePortfolioHubPath}/${slug}`,
    })),
    ...blogRoutes,
  ];
}
