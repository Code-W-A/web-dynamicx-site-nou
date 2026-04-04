import ImageUrlBuilder from "@sanity/image-url";
import type { SanityImage, SanityImageDimensions } from "@/types/blog";
import clientConfig from "./config/client-config";

export const BLOG_SOURCE_RECOMMENDATION = {
  width: 1536,
  height: 1024,
} as const;

export const BLOG_MAIN_IMAGE_PRESET = {
  width: 1536,
  height: 864,
  quality: 84,
  format: "webp",
} as const;

export const BLOG_OG_IMAGE_PRESET = {
  width: 1200,
  height: 630,
  quality: 84,
  format: "jpg",
} as const;

const BLOG_LISTING_IMAGE_PRESET = {
  width: 768,
  height: 432,
  quality: 82,
  format: "webp",
} as const;

const BLOG_RELATED_IMAGE_PRESET = {
  width: 320,
  height: 256,
  quality: 80,
  format: "webp",
} as const;

const BLOG_BODY_IMAGE_PRESET = {
  width: 1280,
  quality: 82,
} as const;

const AUTHOR_AVATAR_PRESET = {
  width: 96,
  height: 96,
  quality: 80,
} as const;

const BLOG_ARTICLE_SCHEMA_IMAGE_PRESETS = [
  {
    width: 1536,
    height: 864,
    quality: 84,
    format: "webp",
  },
  {
    width: 1200,
    height: 900,
    quality: 84,
    format: "webp",
  },
  {
    width: 1200,
    height: 1200,
    quality: 84,
    format: "webp",
  },
] as const;

export function imageBuilder(source: any) {
  return ImageUrlBuilder(clientConfig as any).image(source);
}

function getImageDimensions(source: SanityImage | undefined): SanityImageDimensions | null {
  const width = source?.dimensions?.width;
  const height = source?.dimensions?.height;

  if (typeof width === "number" && width > 0 && typeof height === "number" && height > 0) {
    return {
      width,
      height,
      aspectRatio:
        typeof source?.dimensions?.aspectRatio === "number" && source.dimensions.aspectRatio > 0
          ? source.dimensions.aspectRatio
          : width / height,
    };
  }

  return null;
}

function resolveOutputDimensions(
  source: SanityImage | undefined,
  preset: { width: number; height: number },
) {
  const sourceDimensions = getImageDimensions(source);

  if (!sourceDimensions?.width || !sourceDimensions?.height) {
    return {
      width: preset.width,
      height: preset.height,
    };
  }

  const scale = Math.min(1, sourceDimensions.width / preset.width, sourceDimensions.height / preset.height);

  return {
    width: Math.max(1, Math.round(preset.width * scale)),
    height: Math.max(1, Math.round(preset.height * scale)),
  };
}

function buildFixedImageUrl(
  source: SanityImage | undefined,
  preset: { width: number; height: number; quality: number; format: "webp" | "jpg" },
) {
  const outputDimensions = resolveOutputDimensions(source, preset);

  return imageBuilder(source)
    .width(outputDimensions.width)
    .height(outputDimensions.height)
    .fit("crop")
    .format(preset.format)
    .quality(preset.quality)
    .url();
}

export function buildBlogListingImageUrl(source: any) {
  return buildFixedImageUrl(source, BLOG_LISTING_IMAGE_PRESET);
}

export function buildBlogHeroImageUrl(source: any) {
  return buildFixedImageUrl(source, BLOG_MAIN_IMAGE_PRESET);
}

export function buildBlogOgImageUrl(source: any) {
  return buildFixedImageUrl(source, BLOG_OG_IMAGE_PRESET);
}

export function getBlogOgImageDimensions(source: SanityImage | undefined) {
  return resolveOutputDimensions(source, BLOG_OG_IMAGE_PRESET);
}

export function buildBlogRelatedImageUrl(source: any) {
  return buildFixedImageUrl(source, BLOG_RELATED_IMAGE_PRESET);
}

export function buildBlogArticleStructuredDataImageUrls(source: SanityImage | undefined) {
  const urls = BLOG_ARTICLE_SCHEMA_IMAGE_PRESETS.map((preset) => {
    const outputDimensions = resolveOutputDimensions(source, preset);
    const pixelCount = outputDimensions.width * outputDimensions.height;

    if (pixelCount < 50_000) {
      return null;
    }

    return imageBuilder(source)
      .width(outputDimensions.width)
      .height(outputDimensions.height)
      .fit("crop")
      .format(preset.format)
      .quality(preset.quality)
      .url();
  }).filter((url): url is string => Boolean(url));

  return Array.from(new Set(urls));
}

export function buildPortableTextImageUrl(source: any) {
  return imageBuilder(source)
    .fit("max")
    .width(BLOG_BODY_IMAGE_PRESET.width)
    .auto("format")
    .quality(BLOG_BODY_IMAGE_PRESET.quality)
    .url();
}

export function buildAuthorAvatarUrl(source: any) {
  return imageBuilder(source)
    .width(AUTHOR_AVATAR_PRESET.width)
    .height(AUTHOR_AVATAR_PRESET.height)
    .fit("crop")
    .auto("format")
    .quality(AUTHOR_AVATAR_PRESET.quality)
    .url();
}

export function getRawSanityImageUrl(source: any) {
  return imageBuilder(source).ignoreImageParams().url();
}
