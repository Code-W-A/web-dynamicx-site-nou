import { groq } from "next-sanity";

const imageWithDimensionsField = `{
  ...,
  "dimensions": asset->metadata.dimensions
}`;

const postCardFields = `
  _id,
  title,
  metaDescription,
  excerpt,
  canonicalUrl,
  slug,
  mainImage${imageWithDimensionsField},
  ogImage${imageWithDimensionsField},
  publishedAt,
  _updatedAt,
  "bodyPreview": body[0...3]
`;

const tagDetailFields = `
  _id,
  "name": coalesce(title, tagname),
  "slug": {
    "current": tagname
  },
  "image": ogImage${imageWithDimensionsField},
  title,
  description,
  indexable,
  minimumPostCountToIndex
`;

export const postListQuery = groq`*[_type == "post" && !(_id in path("drafts.**"))] | order(publishedAt desc) {
  ${postCardFields}
}`;

export const postQueryBySlug = groq`*[_type == "post" && slug.current == $slug && !(_id in path("drafts.**"))][0] {
    title,
    metaTitle,
    metadata,
    metaDescription,
    excerpt,
    canonicalUrl,
    category,
    topicCluster,
    relatedServices,
    relatedCaseStudies,
    showPortfolioHub,
    relatedPosts[]->{
      _id,
      title,
      metaDescription,
      slug,
      excerpt,
      mainImage${imageWithDimensionsField},
      ogImage${imageWithDimensionsField},
      publishedAt,
      "bodyPreview": body[0...3]
    },
    slug,
    tags,
    author->{
      _id,
      name,
      slug,
      image${imageWithDimensionsField},
      bio
    },
    mainImage${imageWithDimensionsField},
    ogImage${imageWithDimensionsField},
    publishedAt,
    _updatedAt,
    body
  }`;

export const mobileClusterPostsQuery = groq`*[
  _type == "post" &&
  !(_id in path("drafts.**")) &&
  topicCluster == "mobile-apps"
] | order(publishedAt desc) [0...$limit] {
    _id,
    title,
    metaDescription,
    slug,
    excerpt,
    mainImage${imageWithDimensionsField},
    ogImage${imageWithDimensionsField},
    publishedAt,
    "bodyPreview": body[0...3]
  }`;

/** Candidați pentru articole înrudite când relatedPosts e gol în document. */
export const relatedPostsFallbackCandidatesQuery = groq`*[_type == "post" && slug.current != $slug && !(_id in path("drafts.**"))] | order(publishedAt desc) [0...24] {
    _id,
    title,
    metaDescription,
    slug,
    excerpt,
    mainImage${imageWithDimensionsField},
    ogImage${imageWithDimensionsField},
    publishedAt,
    category,
    topicCluster,
    tags,
    "bodyPreview": body[0...3]
  }`;

export const postQueryByCategory = groq`*[_type == "post" && category == $slug && !(_id in path("drafts.**"))] | order(publishedAt desc) {
  ${postCardFields}
}`;

export const categoryQuery = groq`*[_type == "tagDetail"] | order(tagname asc) {
  ${tagDetailFields}
}`;

export const tagDetailBySlugQuery = groq`*[_type == "tagDetail" && tagname == $tag][0] {
  ${tagDetailFields}
}`;

export const postListQueryByTag = groq`*[_type == "post" && $tag in tags && !(_id in path("drafts.**"))] | order(publishedAt desc) {
  ${postCardFields}
}`;

export const postListQueryByCluster = groq`*[
  _type == "post" &&
  !(_id in path("drafts.**")) &&
  (category in $categories || topicCluster in $topicClusters)
] | order(publishedAt desc) {
  ${postCardFields}
}`;

export const postQueryCategory = groq`*[_type == "tagDetail"] | order(tagname asc) {
  "name": coalesce(title, tagname),
  "slug": {
    "current": tagname
  },
  description
}`;

export const postSitemapQuery = groq`*[_type == "post" && !(_id in path("drafts.**"))] | order(coalesce(_updatedAt, publishedAt) desc) {
  slug,
  publishedAt,
  _updatedAt,
  category,
  topicCluster,
  tags
}`;
