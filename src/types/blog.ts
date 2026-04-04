import { PortableTextBlock } from "sanity";

export type SanityImageDimensions = {
  width?: number;
  height?: number;
  aspectRatio?: number;
};

export type SanityImage = {
  alt?: string;
  caption?: string;
  asset?: {
    _ref?: string;
    _type?: string;
    [key: string]: unknown;
  };
  dimensions?: SanityImageDimensions;
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
  ogImage?: SanityImage;
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
  canonicalUrl?: string;
  mainImage?: SanityImage;
  ogImage?: SanityImage;
  publishedAt?: string;
  _updatedAt?: string;
  bodyPreview?: PortableTextBlock[];
};

export type BlogSitemapEntry = {
  slug?: { current?: string };
  publishedAt?: string;
  _updatedAt?: string;
  category?: string;
  topicCluster?: string;
  tags?: string[];
};

export type BlogTagDetail = {
  _id?: string;
  name: string;
  slug?: { current?: string };
  image?: SanityImage;
  title?: string;
  description?: string;
  indexable?: boolean;
  minimumPostCountToIndex?: number;
};

export type Blog = {
  _id?: string | number;
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
  ogImage?: SanityImage;
  author?: Author;
  tags?: string[];
  publishedAt?: string;
  _updatedAt?: string;
};
