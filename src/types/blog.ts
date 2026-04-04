import { PortableTextBlock } from "sanity";

export type SanityImage = {
  alt?: string;
  caption?: string;
  [key: string]: unknown;
};

export type Author = {
  name: string;
  image?: SanityImage;
  bio?: string;
  _id?: number | string;
  _ref?: number | string;
};

export type BlogRelatedServiceItem = {
  title: string;
  href: string;
};

export type BlogRelatedPostCard = {
  _id?: string;
  title: string;
  slug?: { current?: string };
  excerpt?: string;
  metaDescription?: string;
  metadata?: string;
  mainImage?: SanityImage;
  publishedAt?: string;
  category?: string;
  topicCluster?: string;
  tags?: string[];
  bodyPreview?: PortableTextBlock[];
};

export type BlogArticleTeaser = {
  _id?: string;
  title: string;
  slug?: { current?: string };
  excerpt?: string;
  metaDescription?: string;
  metadata?: string;
  publishedAt?: string;
  bodyPreview?: PortableTextBlock[];
};

export type BlogSitemapEntry = {
  slug?: { current?: string };
  publishedAt?: string;
  _updatedAt?: string;
};

export type Blog = {
  _id: number;
  title: string;
  slug?: any;
  metadata?: string;
  metaTitle?: string;
  metaDescription?: string;
  excerpt?: string;
  canonicalUrl?: string;
  accessLevel?: string;
  category?: string;
  topicCluster?: string;
  relatedServices?: BlogRelatedServiceItem[];
  relatedCaseStudies?: string[];
  showPortfolioHub?: boolean;
  relatedPosts?: BlogRelatedPostCard[];
  body?: PortableTextBlock[];
  bodyPreview?: PortableTextBlock[];
  mainImage?: SanityImage;
  author?: Author;
  tags?: string[];
  publishedAt?: string;
  _updatedAt?: string;
};
