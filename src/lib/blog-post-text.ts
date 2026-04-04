import type { PortableTextBlock } from "sanity";

type BlogTextSource = {
  metaDescription?: string;
  excerpt?: string;
  metadata?: string;
  body?: PortableTextBlock[];
  bodyPreview?: PortableTextBlock[];
};

type BlogCanonicalSource = {
  canonicalUrl?: string;
  slug?: { current?: string } | string;
};

function normalizeWhitespace(value?: string) {
  return value?.replace(/\s+/g, " ").trim() ?? "";
}

function truncateAtWordBoundary(value: string, maxLength: number) {
  if (value.length <= maxLength) {
    return value;
  }

  const clipped = value.slice(0, maxLength + 1);
  const lastSpace = clipped.lastIndexOf(" ");

  if (lastSpace > Math.floor(maxLength * 0.6)) {
    return `${clipped.slice(0, lastSpace).trimEnd()}…`;
  }

  return `${value.slice(0, maxLength).trimEnd()}…`;
}

function normalizeSiteOrigin(siteUrl: string) {
  try {
    return new URL(siteUrl).origin;
  } catch {
    return "https://www.webdynamicx.ro";
  }
}

function resolveSlugValue(slug?: { current?: string } | string) {
  if (typeof slug === "string") {
    return slug.trim();
  }

  if (slug && typeof slug === "object" && typeof slug.current === "string") {
    return slug.current.trim();
  }

  return "";
}

export function portableTextToPlainText(blocks?: PortableTextBlock[]) {
  if (!Array.isArray(blocks) || blocks.length === 0) {
    return "";
  }

  const parts = blocks.flatMap((block) => {
    if (!block || typeof block !== "object" || block._type !== "block") {
      return [];
    }

    const children = Array.isArray((block as { children?: unknown[] }).children)
      ? (block as { children: Array<{ text?: string }> }).children
      : [];

    const text = children
      .map((child) => (typeof child?.text === "string" ? child.text : ""))
      .join("");

    const normalized = normalizeWhitespace(text);
    return normalized ? [normalized] : [];
  });

  return parts.join(" ");
}

function resolveBodyText(source: BlogTextSource) {
  const fullBodyText = portableTextToPlainText(source.body);
  if (fullBodyText) {
    return fullBodyText;
  }

  return portableTextToPlainText(source.bodyPreview);
}

export function resolvePostSeoDescription(source: BlogTextSource, fallback: string) {
  const candidate = normalizeWhitespace(
    source.metaDescription ||
      source.excerpt ||
      resolveBodyText(source) ||
      source.metadata ||
      fallback,
  );

  return truncateAtWordBoundary(candidate || fallback, 160);
}

export function resolvePostTeaser(source: BlogTextSource, fallback = "") {
  const candidate = normalizeWhitespace(
    source.excerpt ||
      source.metaDescription ||
      resolveBodyText(source) ||
      source.metadata ||
      fallback,
  );

  if (!candidate) {
    return "";
  }

  return truncateAtWordBoundary(candidate, 220);
}

export function resolveBlogCanonicalUrl(source: BlogCanonicalSource, siteUrl: string) {
  const siteOrigin = normalizeSiteOrigin(siteUrl);
  const slug = resolveSlugValue(source.slug);
  const fallback = slug ? `${siteOrigin}/blog/${slug}` : `${siteOrigin}/blog`;
  const candidate = source.canonicalUrl?.trim();

  if (!candidate) {
    return fallback;
  }

  try {
    const parsed = new URL(candidate);

    if (parsed.origin !== siteOrigin || parsed.search || parsed.hash) {
      return fallback;
    }

    if (slug && parsed.pathname !== `/blog/${slug}`) {
      return fallback;
    }

    return parsed.toString();
  } catch {
    return fallback;
  }
}
