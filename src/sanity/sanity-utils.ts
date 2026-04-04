import { createClient, type QueryParams } from "next-sanity";
import clientConfig from "./config/client-config";
export { imageBuilder } from "./image-helpers";
import {
  postListQuery,
  categoryQuery,
  tagDetailBySlugQuery,
  postQueryBySlug,
  postListQueryByTag,
  postListQueryByCluster,
  mobileClusterPostsQuery,
  relatedPostsFallbackCandidatesQuery,
  postSitemapQuery,
} from "./sanity-query";
import { Blog, BlogArticleTeaser, BlogRelatedPostCard, BlogSitemapEntry, BlogTagDetail } from "@/types/blog";
import { integrations } from "../../integrations.config";

const POST_CACHE_TAG = "post";
const TAG_DETAIL_CACHE_TAG = "tagDetail";
const POST_CACHE_REVALIDATE_SECONDS = 60;
export const DEFAULT_TAG_INDEXING_MIN_POSTS = 3;

type RelatedPostsContext = {
  slug: string;
  category?: string;
  topicCluster?: string;
  tags?: string[];
};

function normalizeTags(tags?: string[]) {
  return Array.from(
    new Set(
      (Array.isArray(tags) ? tags : [])
        .map((tag) => tag?.trim().toLowerCase())
        .filter((tag): tag is string => Boolean(tag)),
    ),
  );
}

export function resolveTagMinimumPostCount(tagDetail?: Pick<BlogTagDetail, "minimumPostCountToIndex"> | null) {
  const value = tagDetail?.minimumPostCountToIndex;
  if (typeof value === "number" && Number.isFinite(value) && value >= 1) {
    return Math.floor(value);
  }

  return DEFAULT_TAG_INDEXING_MIN_POSTS;
}

export function shouldIndexTagArchive(
  tagDetail: Pick<BlogTagDetail, "indexable" | "minimumPostCountToIndex"> | null | undefined,
  publishedPostCount: number,
) {
  if (!tagDetail?.indexable) {
    return false;
  }

  return publishedPostCount >= resolveTagMinimumPostCount(tagDetail);
}

function buildRelatedPostScore(post: BlogRelatedPostCard, context: Omit<RelatedPostsContext, "slug">) {
  let score = 0;

  if (context.category && post.category === context.category) {
    score += 4;
  }

  if (context.topicCluster && post.topicCluster === context.topicCluster) {
    score += 3;
  }

  const sourceTags = normalizeTags(context.tags);
  const candidateTags = normalizeTags(post.tags);
  if (sourceTags.length > 0 && candidateTags.length > 0) {
    const overlapCount = candidateTags.filter((tag) => sourceTags.includes(tag)).length;
    score += overlapCount * 2;
  }

  return score;
}

export async function sanityFetch<QueryResponse>({
  query,
  qParams,
  tags,
  useCdnOverride,
  revalidate,
}: {
  query: string;
  qParams: QueryParams;
  tags: string[];
  useCdnOverride?: boolean;
  revalidate?: number;
}): Promise<QueryResponse> {
  if (integrations?.isSanityEnabled) {
    const client = createClient({
      ...clientConfig,
      useCdn: typeof useCdnOverride === "boolean" ? useCdnOverride : (clientConfig as any).useCdn,
    } as any);
    return client.fetch<QueryResponse>(query, qParams as any, {
      cache: "force-cache",
      next: {
        tags,
        ...(typeof revalidate === "number" ? { revalidate } : {}),
      },
    });
  } else {
    return {} as QueryResponse;
  }
}

export async function getPosts() {
  try {
    const posts: Blog[] = await sanityFetch({
      query: postListQuery,
      qParams: {},
      tags: [POST_CACHE_TAG],
      useCdnOverride: false,
      revalidate: POST_CACHE_REVALIDATE_SECONDS,
    });

    return Array.isArray(posts) ? posts : [];
  } catch (error) {
    console.error("[sanity] getPosts failed", error);
    return [];
  }
}

export async function getCategories() {
  try {
    const categories = await sanityFetch<BlogTagDetail[]>({
      query: categoryQuery,
      qParams: {},
      tags: [TAG_DETAIL_CACHE_TAG],
      useCdnOverride: false,
      revalidate: POST_CACHE_REVALIDATE_SECONDS,
    });

    return Array.isArray(categories) ? categories : [];
  } catch (error) {
    console.error("[sanity] getCategories failed", error);
    return [];
  }
}

export async function getTagDetailBySlug(tag: string): Promise<BlogTagDetail | null> {
  const normalizedTag = tag.trim().toLowerCase();

  if (!normalizedTag) {
    return null;
  }

  try {
    const tagDetail = await sanityFetch<BlogTagDetail | null>({
      query: tagDetailBySlugQuery,
      qParams: { tag: normalizedTag as any },
      tags: [TAG_DETAIL_CACHE_TAG],
      useCdnOverride: false,
      revalidate: POST_CACHE_REVALIDATE_SECONDS,
    });

    return tagDetail || null;
  } catch (error) {
    console.error("[sanity] getTagDetailBySlug failed", error);
    return null;
  }
}

export async function getIndexableTags(tags?: string[]) {
  const normalizedTags = normalizeTags(tags);

  if (normalizedTags.length === 0) {
    return [];
  }

  const tagDetails = await getCategories();
  const tagDetailMap = new Map(
    tagDetails
      .map((tagDetail) => {
        const slug = tagDetail.slug?.current?.trim().toLowerCase();
        return slug ? [slug, tagDetail] : null;
      })
      .filter((entry): entry is [string, BlogTagDetail] => Boolean(entry)),
  );

  const tagStatuses = await Promise.all(
    normalizedTags.map(async (tag) => {
      const tagDetail = tagDetailMap.get(tag);
      if (!tagDetail) {
        return null;
      }

      const posts = await getPostByTag(tag);
      return shouldIndexTagArchive(tagDetail, posts.filter((post) => Boolean(post?.slug?.current)).length) ? tag : null;
    }),
  );

  return tagStatuses.filter((tag): tag is string => Boolean(tag));
}

export async function getPostsForSitemap(): Promise<BlogSitemapEntry[]> {
  try {
    const posts = await sanityFetch<BlogSitemapEntry[]>({
      query: postSitemapQuery,
      qParams: {},
      tags: [POST_CACHE_TAG],
      useCdnOverride: false,
      revalidate: POST_CACHE_REVALIDATE_SECONDS,
    });

    return Array.isArray(posts) ? posts : [];
  } catch (error) {
    console.error("[sanity] getPostsForSitemap failed", error);
    return [];
  }
}

export async function getPostBySlug(slug: string) {
  try {
    const post: Blog = await sanityFetch({
      query: postQueryBySlug,
      tags: [POST_CACHE_TAG],
      qParams: { slug },
      useCdnOverride: false,
      revalidate: POST_CACHE_REVALIDATE_SECONDS,
    });

    return post || null;
  } catch (error) {
    console.error("[sanity] getPostBySlug failed", error);
    return null;
  }
}

export async function getRelatedPostsFallback({
  slug,
  category,
  topicCluster,
  tags,
}: RelatedPostsContext): Promise<BlogRelatedPostCard[]> {
  const cat = (category ?? "").trim();
  const cluster = (topicCluster ?? "").trim();
  const normalizedTags = normalizeTags(tags);

  if (!cat && !cluster && normalizedTags.length === 0) {
    return [];
  }
  try {
    const posts = await sanityFetch<BlogRelatedPostCard[]>({
      query: relatedPostsFallbackCandidatesQuery,
      qParams: { slug },
      tags: [POST_CACHE_TAG],
      useCdnOverride: false,
      revalidate: POST_CACHE_REVALIDATE_SECONDS,
    });
    if (!Array.isArray(posts)) {
      return [];
    }

    return posts
      .map((post, index) => ({
        post,
        index,
        score: buildRelatedPostScore(post, {
          category: cat || undefined,
          topicCluster: cluster || undefined,
          tags: normalizedTags,
        }),
      }))
      .filter(({ score }) => score > 0)
      .sort((left, right) => {
        if (right.score !== left.score) {
          return right.score - left.score;
        }

        const rightDate = right.post.publishedAt ? new Date(right.post.publishedAt).getTime() : 0;
        const leftDate = left.post.publishedAt ? new Date(left.post.publishedAt).getTime() : 0;
        if (rightDate !== leftDate) {
          return rightDate - leftDate;
        }

        return left.index - right.index;
      })
      .slice(0, 3)
      .map(({ post }) => post);
  } catch (error) {
    console.error("[sanity] getRelatedPostsFallback failed", error);
    return [];
  }
}

export async function getMobileClusterPosts(limit = 3): Promise<BlogArticleTeaser[]> {
  try {
    const posts = await sanityFetch<BlogArticleTeaser[]>({
      query: mobileClusterPostsQuery,
      qParams: { limit },
      tags: [POST_CACHE_TAG],
      useCdnOverride: false,
      revalidate: POST_CACHE_REVALIDATE_SECONDS,
    });
    return Array.isArray(posts) ? posts : [];
  } catch (error) {
    console.error("[sanity] getMobileClusterPosts failed", error);
    return [];
  }
}

export async function getPostByTag(tag: string) {
  try {
    const posts: Blog[] = await sanityFetch({
      query: postListQueryByTag,
      qParams: { tag: tag as any },
      tags: [POST_CACHE_TAG],
      useCdnOverride: false,
      revalidate: POST_CACHE_REVALIDATE_SECONDS,
    });

    return Array.isArray(posts) ? posts : [];
  } catch (error) {
    console.error("[sanity] getPostByTag failed", error);
    return [];
  }
}

export async function getPostsByCluster(
  cluster: {
    categories?: string[];
    topicClusters?: string[];
  },
  limit?: number,
): Promise<BlogArticleTeaser[]> {
  const categories = Array.isArray(cluster.categories)
    ? cluster.categories.map((value) => value?.trim()).filter((value): value is string => Boolean(value))
    : [];
  const topicClusters = Array.isArray(cluster.topicClusters)
    ? cluster.topicClusters.map((value) => value?.trim()).filter((value): value is string => Boolean(value))
    : [];

  if (categories.length === 0 && topicClusters.length === 0) {
    return [];
  }

  try {
    const posts = await sanityFetch<BlogArticleTeaser[]>({
      query: postListQueryByCluster,
      qParams: { categories, topicClusters },
      tags: [POST_CACHE_TAG],
      useCdnOverride: false,
      revalidate: POST_CACHE_REVALIDATE_SECONDS,
    });

    const normalized = Array.isArray(posts) ? posts : [];
    if (typeof limit === "number" && limit > 0) {
      return normalized.slice(0, limit);
    }

    return normalized;
  } catch (error) {
    console.error("[sanity] getPostsByCluster failed", error);
    return [];
  }
}
