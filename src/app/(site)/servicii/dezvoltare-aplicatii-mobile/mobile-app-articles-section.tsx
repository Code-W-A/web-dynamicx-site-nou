import TopicClusterArticlesSection from "@/components/Blog/internal-linking/topic-cluster-articles-section";
import { resolveClusterConfigById } from "@/config/blog-topic-clusters";
import { getPostsByCluster } from "@/sanity/sanity-utils";

export default async function MobileAppArticlesSection() {
  const cluster = resolveClusterConfigById("mobile-apps");
  if (!cluster) {
    return null;
  }

  const articles = await getPostsByCluster(cluster.match, 3);

  if (articles.length === 0) return null;

  return (
    <TopicClusterArticlesSection
      eyebrow={cluster.serviceSection.eyebrow}
      title={cluster.serviceSection.title}
      intro={cluster.serviceSection.intro}
      articles={articles}
      hubHref={`/blog/topic/${cluster.id}`}
      hubCtaLabel={cluster.serviceSection.ctaLabel}
    />
  );
}
