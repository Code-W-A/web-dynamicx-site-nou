import type { PortableTextBlock } from "sanity";

type BlogTextSource = {
  metaDescription?: string;
  excerpt?: string;
  metadata?: string;
  body?: PortableTextBlock[];
  bodyPreview?: PortableTextBlock[];
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
