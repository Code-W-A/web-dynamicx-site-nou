import ImageUrlBuilder from "@sanity/image-url";
import { createClient, type QueryParams } from "next-sanity";
import clientConfig from "./config/client-config";
import {
  postQuery,
  categoryQuery,
  postQueryBySlug,
  postQueryByTag,
} from "./sanity-query";
import { Blog } from "@/types/blog";
import { integrations, messages } from "../../integrations.config";

export async function sanityFetch<QueryResponse>({
  query,
  qParams,
  tags,
  useCdnOverride,
}: {
  query: string;
  qParams: QueryParams;
  tags: string[];
  useCdnOverride?: boolean;
}): Promise<QueryResponse> {
  if (integrations?.isSanityEnabled) {
    const client = createClient({
      ...clientConfig,
      useCdn: typeof useCdnOverride === "boolean" ? useCdnOverride : (clientConfig as any).useCdn,
    } as any);
    return client.fetch<QueryResponse>(query, qParams as any, {
      cache: "force-cache",
      next: { tags },
    });
  } else {
    return {} as QueryResponse;
  }
}

export async function getPosts() {
  const posts: Blog[] = await sanityFetch({
    query: postQuery,
    qParams: {},
    tags: ["post"],
    useCdnOverride: false,
  });

  return posts;
}

export async function getCategories() {
  const categories = await sanityFetch({
    query: categoryQuery,
    qParams: {},
    tags: ["category"],
  });

  return categories;
}

export async function getPostBySlug(slug: string) {
  const post: Blog = await sanityFetch({
    query: postQueryBySlug,
    tags: ["post"],
    qParams: { slug },
  });

  return post;
}

export async function getPostByTag(tag: string) {
  const posts: Blog[] = await sanityFetch({
    query: postQueryByTag,
    qParams: { tag: tag as any },
    tags: ["post"],
  });

  return posts;
}

export function imageBuilder(source: string) {
  return ImageUrlBuilder(clientConfig as any).image(source);
}
