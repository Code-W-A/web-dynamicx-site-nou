import type { Blog, BlogRelatedServiceItem } from "@/types/blog";
import { resolveClusterConfig, shouldAutoShowPortfolioHub, type TopicClusterEntry } from "@/config/blog-topic-clusters";
import { bodyLinksToPath, countBodyLinksToPath, normalizeInternalHref } from "@/lib/portable-text-links";

const MAX_SERVICE_LINKS_PER_PATH = 2;

export type ArticleInternalLinkingPlan = {
  cluster: TopicClusterEntry | null;
  showAutoServiceBlock: boolean;
  manualRelatedServices: BlogRelatedServiceItem[];
  showPortfolioHubBlock: boolean;
  portfolioHub: {
    href: string;
    title: string;
    description: string;
    ctaLabel: string;
  } | null;
};

/**
 * Decide ce blocuri de internal linking se afișează și ce intrări manuale din Sanity trec filtrul/plafonul.
 * Plafon: max 2 linkuri către aceeași cale (body + blocuri generate + lista manuală).
 */
export function buildArticleInternalLinkingPlan(post: Blog, siteUrl?: string): ArticleInternalLinkingPlan {
  const cluster = resolveClusterConfig(post);
  const body = post.body;

  const serviceHref = cluster?.serviceHref;
  const bodyHasService =
    serviceHref != null && bodyLinksToPath(body, serviceHref, siteUrl);
  const showAutoServiceBlock = Boolean(cluster && serviceHref && !bodyHasService);

  const manualRaw = Array.isArray(post.relatedServices) ? post.relatedServices : [];
  /** Linkuri către fiecare path deja puse de noi (auto + manuale). */
  const addedByUsPerPath = new Map<string, number>();

  if (showAutoServiceBlock && serviceHref) {
    const p = normalizeInternalHref(serviceHref, siteUrl) ?? serviceHref;
    addedByUsPerPath.set(p, 1);
  }

  const manualRelatedServices: BlogRelatedServiceItem[] = [];

  for (const item of manualRaw) {
    if (!item?.href || !item?.title) continue;
    const path = normalizeInternalHref(item.href, siteUrl);
    if (!path) continue;
    if (bodyLinksToPath(body, path, siteUrl)) continue;

    const bodyCount = countBodyLinksToPath(body, path, siteUrl);
    const addedByUs = addedByUsPerPath.get(path) ?? 0;
    if (bodyCount + addedByUs >= MAX_SERVICE_LINKS_PER_PATH) continue;

    manualRelatedServices.push({ title: item.title, href: path });
    addedByUsPerPath.set(path, addedByUs + 1);
  }

  let portfolioHub: ArticleInternalLinkingPlan["portfolioHub"] = null;
  const wantPortfolio =
    Boolean(cluster?.portfolioHubHref) &&
    (post.showPortfolioHub === true || shouldAutoShowPortfolioHub(post));
  if (wantPortfolio && cluster?.portfolioHubHref) {
    const hubHref = cluster.portfolioHubHref;
    if (!bodyLinksToPath(body, hubHref, siteUrl)) {
      portfolioHub = {
        href: hubHref,
        title: cluster.portfolioHubTitle ?? "",
        description: cluster.portfolioHubDescription ?? "",
        ctaLabel: cluster.portfolioHubCtaLabel ?? "Vezi portofoliul",
      };
    }
  }

  return {
    cluster,
    showAutoServiceBlock,
    manualRelatedServices,
    showPortfolioHubBlock: portfolioHub != null,
    portfolioHub,
  };
}
