/**
 * Mapare topic cluster → blocuri de internal linking pentru articole.
 * Adaugă intrări noi aici când extinzi serviciile; nu hardcoda în pagină.
 */

export type TopicClusterEntry = {
  id: string;
  minimumPostCountToIndex?: number;
  match: {
    categories: string[];
    topicClusters: string[];
  };
  serviceSlugs: string[];
  serviceHref: string;
  serviceBlockTitle: string;
  serviceBlockDescription: string;
  serviceCtaLabel: string;
  hub: {
    title: string;
    metaTitle: string;
    metaDescription: string;
    intro: string;
    ctaLabel: string;
  };
  serviceSection: {
    eyebrow: string;
    title: string;
    intro: string;
    ctaLabel: string;
  };
  portfolioHubHref?: string;
  portfolioHubTitle?: string;
  portfolioHubDescription?: string;
  portfolioHubCtaLabel?: string;
};

type TopicClusterMatchCandidate = {
  category?: string;
  topicCluster?: string;
};

const DEFAULT_CLUSTER_MINIMUM_POST_COUNT = 3;

export const TOPIC_CLUSTER_ENTRIES: TopicClusterEntry[] = [
  {
    id: "mobile-apps",
    minimumPostCountToIndex: 3,
    match: {
      categories: ["mobile-app-development"],
      topicClusters: ["mobile-apps"],
    },
    serviceSlugs: ["dezvoltare-aplicatii-mobile"],
    serviceHref: "/servicii/dezvoltare-aplicatii-mobile",
    serviceBlockTitle: "Vrei să lansezi o aplicație mobilă pentru business-ul tău?",
    serviceBlockDescription:
      "Vezi cum abordăm dezvoltarea aplicațiilor mobile pentru firme, de la MVP și structură până la publicare.",
    serviceCtaLabel: "Vezi serviciul de dezvoltare aplicații mobile",
    hub: {
      title: "Articole despre dezvoltarea aplicațiilor mobile",
      metaTitle: "Articole despre dezvoltarea aplicațiilor mobile, MVP și lansare | Web Dynamicx",
      metaDescription:
        "Ghiduri despre dezvoltarea aplicațiilor mobile: MVP, costuri, lansare, UX, backend și deciziile tehnice care influențează produsul.",
      intro:
        "Cluster editorial despre dezvoltarea aplicațiilor mobile pentru firme: de la MVP, costuri și lansare până la experiență de produs, backend și retenție.",
      ctaLabel: "Vezi serviciul de dezvoltare aplicații mobile",
    },
    serviceSection: {
      eyebrow: "Resurse utile",
      title: "Ghiduri despre dezvoltarea aplicațiilor mobile",
      intro:
        "Dacă vrei să aprofundezi etapele, costurile și deciziile tehnice din spatele unui produs mobil, poți continua cu articolele din clusterul dedicat aplicațiilor mobile.",
      ctaLabel: "Vezi toate articolele din cluster",
    },
    portfolioHubHref: "/portofoliu-aplicatii-mobile",
    portfolioHubTitle: "Vezi și exemple reale de aplicații mobile publicate",
    portfolioHubDescription:
      "Explorează proiecte pentru booking, comenzi, recomandări și produse digitale, cu fluxuri deja livrate pentru utilizatori reali.",
    portfolioHubCtaLabel: "Vezi portofoliul complet de aplicații mobile",
  },
  {
    id: "web-sites",
    minimumPostCountToIndex: 3,
    match: {
      categories: ["web-development", "web-design"],
      topicClusters: ["websites"],
    },
    serviceSlugs: ["web-design", "creare-site-prezentare", "creare-site-web"],
    serviceHref: "/servicii/creare-site-web",
    serviceBlockTitle: "Vrei un site care să îți aducă clienți?",
    serviceBlockDescription:
      "De la structură și design la implementare — îți putem livra un site aliniat obiectivelor tale.",
    serviceCtaLabel: "Vezi serviciul de creare site web",
    hub: {
      title: "Articole despre creare site și web design",
      metaTitle: "Articole despre creare site, structură web și web design | Web Dynamicx",
      metaDescription:
        "Ghiduri despre creare site, web design, structură de pagină, UX și deciziile tehnice care influențează performanța și conversia.",
      intro:
        "Cluster editorial despre creare site, web design și structură de conținut pentru pagini care explică mai bine oferta și convertesc mai bine.",
      ctaLabel: "Vezi serviciul de creare site web",
    },
    serviceSection: {
      eyebrow: "Articole din cluster",
      title: "Articole despre creare site și web design",
      intro:
        "Dacă vrei context suplimentar despre structură, UX, copy și deciziile tehnice din spatele unui website bun, poți continua cu aceste articole din cluster.",
      ctaLabel: "Vezi toate articolele din cluster",
    },
  },
  {
    id: "seo",
    minimumPostCountToIndex: 3,
    match: {
      categories: ["seo"],
      topicClusters: ["seo"],
    },
    serviceSlugs: ["optimizare-seo", "promovare-site"],
    serviceHref: "/servicii/optimizare-seo",
    serviceBlockTitle: "Vrei mai multă vizibilitate în căutări?",
    serviceBlockDescription:
      "Optimizare și strategie SEO adaptate site-ului tău și pieței tale.",
    serviceCtaLabel: "Vezi serviciile SEO",
    hub: {
      title: "Articole despre SEO și vizibilitate organică",
      metaTitle: "Articole despre SEO, ranking și trafic organic | Web Dynamicx",
      metaDescription:
        "Ghiduri despre SEO, ranking, optimizare on-page, structură de conținut și deciziile care influențează vizibilitatea în Google.",
      intro:
        "Cluster editorial despre SEO și vizibilitate organică: articole practice despre optimizare on-page, arhitectură internă, conținut și semnale care susțin rankingul.",
      ctaLabel: "Vezi serviciile SEO",
    },
    serviceSection: {
      eyebrow: "Articole din cluster",
      title: "Articole despre SEO și vizibilitate în căutări",
      intro:
        "Dacă vrei să aprofundezi auditul, optimizarea on-page, arhitectura internă și procesul prin care crește vizibilitatea organică, poți continua cu aceste articole din cluster.",
      ctaLabel: "Vezi toate articolele din cluster",
    },
  },
];

export function getTopicClusterEntries(): TopicClusterEntry[] {
  return TOPIC_CLUSTER_ENTRIES;
}

export function resolveClusterConfigById(clusterId: string): TopicClusterEntry | null {
  const id = clusterId.trim();
  return TOPIC_CLUSTER_ENTRIES.find((entry) => entry.id === id) ?? null;
}

export function resolveClusterConfigByServiceSlug(serviceSlug: string): TopicClusterEntry | null {
  const slug = serviceSlug.trim();
  return TOPIC_CLUSTER_ENTRIES.find((entry) => entry.serviceSlugs.includes(slug)) ?? null;
}

export function resolveClusterConfig(post: {
  category?: string;
  topicCluster?: string;
}): TopicClusterEntry | null {
  return TOPIC_CLUSTER_ENTRIES.find((entry) => matchesTopicClusterEntry(entry, post)) ?? null;
}

export function matchesTopicClusterEntry(entry: TopicClusterEntry, candidate: TopicClusterMatchCandidate) {
  const category = (candidate.category ?? "").trim();
  const topicCluster = (candidate.topicCluster ?? "").trim();

  return Boolean(
    (category && entry.match.categories.includes(category)) ||
      (topicCluster && entry.match.topicClusters.includes(topicCluster)),
  );
}

export function resolveClusterMinimumPostCount(entry: Pick<TopicClusterEntry, "minimumPostCountToIndex">) {
  const value = entry.minimumPostCountToIndex;
  return typeof value === "number" && Number.isFinite(value) && value >= 1
    ? Math.floor(value)
    : DEFAULT_CLUSTER_MINIMUM_POST_COUNT;
}

export function shouldIndexClusterHub(
  entry: Pick<TopicClusterEntry, "minimumPostCountToIndex">,
  publishedPostCount: number,
) {
  return publishedPostCount >= resolveClusterMinimumPostCount(entry);
}

/** Hub portofoliu afișat automat dacă categoria e mobile (în plus față de showPortfolioHub). */
export function shouldAutoShowPortfolioHub(post: {
  category?: string;
  topicCluster?: string;
}): boolean {
  const cat = (post.category ?? "").trim();
  const cluster = (post.topicCluster ?? "").trim();
  return cat === "mobile-app-development" || cluster === "mobile-apps";
}
