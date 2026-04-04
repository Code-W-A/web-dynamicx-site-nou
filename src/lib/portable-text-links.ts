import type { PortableTextBlock } from "sanity";

const DEFAULT_SITE_HOSTS = new Set(["www.webdynamicx.ro", "webdynamicx.ro"]);

function stripHashQuery(path: string): string {
  const noHash = path.split("#")[0] ?? path;
  const noQuery = noHash.split("?")[0] ?? noHash;
  return noQuery;
}

/**
 * Normalizează href din PT sau CMS la path intern comparabil (ex. /servicii/...).
 */
export function normalizeInternalHref(href: string, siteUrl?: string): string | null {
  const raw = href?.toString()?.trim();
  if (!raw) return null;

  if (/^mailto:|^tel:/i.test(raw)) return null;

  if (/^https?:\/\//i.test(raw)) {
    try {
      const u = new URL(raw);
      const hostOk =
        DEFAULT_SITE_HOSTS.has(u.hostname.toLowerCase()) ||
        (siteUrl && (() => {
          try {
            return u.hostname === new URL(siteUrl).hostname;
          } catch {
            return false;
          }
        })());
      if (!hostOk) return null;
      return stripHashQuery(u.pathname || "/") || "/";
    } catch {
      return null;
    }
  }

  const path = raw.startsWith("/") ? raw : `/${raw.replace(/^\/+/, "")}`;
  return stripHashQuery(path) || "/";
}

function isPortableBlock(value: unknown): value is PortableTextBlock & { markDefs?: unknown[] } {
  return Boolean(value && typeof value === "object" && (value as { _type?: string })._type === "block");
}

/**
 * Extrage toate href-urile din mark-uri de tip link în Portable Text.
 */
export function extractLinkHrefsFromPortableText(body: unknown): string[] {
  if (!Array.isArray(body)) return [];
  const out: string[] = [];

  for (const block of body) {
    if (!isPortableBlock(block)) continue;
    const defs = block.markDefs;
    if (!Array.isArray(defs)) continue;
    for (const def of defs) {
      if (!def || typeof def !== "object") continue;
      const d = def as { _type?: string; href?: string };
      if (d._type === "link" && typeof d.href === "string" && d.href.trim()) {
        out.push(d.href.trim());
      }
    }
  }

  return out;
}

export function normalizedPathsFromBody(body: unknown, siteUrl?: string): string[] {
  const hrefs = extractLinkHrefsFromPortableText(body);
  const paths: string[] = [];
  for (const h of hrefs) {
    const p = normalizeInternalHref(h, siteUrl);
    if (p) paths.push(p);
  }
  return paths;
}

export function bodyLinksToPath(body: unknown, path: string, siteUrl?: string): boolean {
  const target = normalizeInternalHref(path, siteUrl) ?? path;
  return normalizedPathsFromBody(body, siteUrl).some((p) => p === target);
}

export function countBodyLinksToPath(body: unknown, path: string, siteUrl?: string): number {
  const target = normalizeInternalHref(path, siteUrl) ?? path;
  return normalizedPathsFromBody(body, siteUrl).filter((p) => p === target).length;
}
