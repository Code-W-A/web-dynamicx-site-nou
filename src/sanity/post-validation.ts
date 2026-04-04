import { TOPIC_CLUSTER_ENTRIES } from "../config/blog-topic-clusters";

export type PostBlockingIssue = {
  key: string;
  label: string;
};

function isFilledString(value: unknown) {
  return typeof value === "string" && value.trim().length > 0;
}

function collectBodyImageAltIssues(body: unknown): PostBlockingIssue[] {
  if (!Array.isArray(body)) {
    return [];
  }

  const issues: PostBlockingIssue[] = [];
  let imageIndex = 0;

  body.forEach((block) => {
    if (!block || typeof block !== "object" || (block as { _type?: string })._type !== "image") {
      return;
    }

    imageIndex += 1;

    if (!isFilledString((block as { alt?: string }).alt)) {
      issues.push({
        key: `body-image-alt-${imageIndex}`,
        label: `Alt text pentru imaginea ${imageIndex} din Body`,
      });
    }
  });

  return issues;
}

export function collectPostBlockingIssues(document: any): PostBlockingIssue[] {
  const issues: PostBlockingIssue[] = [];
  const currentMainImageRef = document?.mainImage?.asset?._ref?.trim();
  const generatedMainImageRef = document?.imageVariantMainAssetRef?.trim();

  if (!isFilledString(document?.title)) issues.push({ key: "title", label: "Title" });
  if (!isFilledString(document?.metaDescription)) issues.push({ key: "metaDescription", label: "Meta Description" });
  if (!isFilledString(document?.excerpt)) issues.push({ key: "excerpt", label: "Excerpt" });
  if (!isFilledString(document?.category)) issues.push({ key: "category", label: "Category" });
  if (!isFilledString(document?.topicCluster)) issues.push({ key: "topicCluster", label: "Topic cluster" });
  if (!isFilledString(document?.slug?.current)) issues.push({ key: "slug", label: "Slug" });
  if (!document?.author?._ref) issues.push({ key: "author", label: "Author" });
  if (!document?.mainImage?.asset?._ref) issues.push({ key: "mainImage", label: "Main image" });
  if (!isFilledString(document?.mainImage?.alt)) issues.push({ key: "mainImageAlt", label: "Main image alt" });
  if (!document?.ogImage?.asset?._ref) issues.push({ key: "ogImage", label: "Open Graph image" });
  if (!isFilledString(document?.ogImage?.alt)) issues.push({ key: "ogImageAlt", label: "Open Graph image alt" });
  if (currentMainImageRef && generatedMainImageRef && currentMainImageRef !== generatedMainImageRef) {
    issues.push({
      key: "mainImageRegeneration",
      label: "Regenerare imagini dupa schimbarea Main image",
    });
  }
  if (!document?.publishedAt) issues.push({ key: "publishedAt", label: "Published at" });
  if (!Array.isArray(document?.body) || document.body.length === 0) issues.push({ key: "body", label: "Body" });

  issues.push(...collectBodyImageAltIssues(document?.body));

  if (document?.category && document?.topicCluster) {
    const matchingEntry = TOPIC_CLUSTER_ENTRIES.find((entry) => entry.match.categories.includes(document.category));
    if (matchingEntry && !matchingEntry.match.topicClusters.includes(document.topicCluster)) {
      issues.push({
        key: "topicClusterCategoryMismatch",
        label: `Topic cluster compatibil cu category "${document.category}"`,
      });
    }
  }

  return issues;
}

export function formatPostBlockingIssues(issues: PostBlockingIssue[]) {
  return issues.map((issue) => issue.label).join(", ");
}
