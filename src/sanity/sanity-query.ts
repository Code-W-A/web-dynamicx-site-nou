import { groq } from "next-sanity";

export const postQuery = groq`*[_type == "post" && !(_id in path("drafts.**"))] | order(publishedAt desc) {
    title,
    metaTitle,
    metadata,
    metaDescription,
    excerpt,
    canonicalUrl,
    slug,
    tags,
    author->{
      _id,
      name,
      slug,
      image,
      bio
    },
    mainImage,
    publishedAt,
    _updatedAt,
    body
  }`;

export const postQueryBySlug = groq`*[_type == "post" && slug.current == $slug][0] {
    title,
    metaTitle,
    metadata,
    metaDescription,
    excerpt,
    canonicalUrl,
    slug,
    tags,
    author->{
      _id,
      name,
      slug,
      image,
      bio
    },
    mainImage,
    publishedAt,
    _updatedAt,
    body
  }`;

export const postQueryByCategory = groq`*[_type == "post" && category->slug.current == $slug] {
    title,
    metaTitle,
    metadata,
    metaDescription,
    excerpt,
    canonicalUrl,
    slug,
    tags,
    author->{
      _id,
      name,
      slug,
      image,
      bio
    },
    mainImage,
    publishedAt,
    _updatedAt,
    body
  }`;

export const categoryQuery = groq`*[_type == "category"] {
        _id,
        name,
        image,
        slug,
      }`;

export const postQueryByTag = groq`*[_type == "post" && $tag in tags] {
    title,
    metaTitle,
    metadata,
    metaDescription,
    excerpt,
    canonicalUrl,
    slug,
    tags,
    author->{
      _id,
      name,
      slug,
      image,
      bio
    },
    mainImage,
    publishedAt,
    _updatedAt,
    body
  }`;

export const postQueryCategory = groq`*[_type == "category"] {
    name,
    slug  
  }`;
