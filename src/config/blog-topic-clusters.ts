/**
 * Mapare topic cluster → blocuri de internal linking pentru articole.
 * Adaugă intrări noi aici când extinzi serviciile; nu hardcoda în pagină.
 */

export type TopicClusterEntry = {
  id: string;
  match: {
    categories: string[];
    topicClusters: string[];
  };
  serviceHref: string;
  serviceBlockTitle: string;
  serviceBlockDescription: string;
  serviceCtaLabel: string;
  portfolioHubHref?: string;
  portfolioHubTitle?: string;
  portfolioHubDescription?: string;
  portfolioHubCtaLabel?: string;
};

export const TOPIC_CLUSTER_ENTRIES: TopicClusterEntry[] = [
  {
    id: "mobile-apps",
    match: {
      categories: ["mobile-app-development"],
      topicClusters: ["mobile-apps"],
    },
    serviceHref: "/servicii/dezvoltare-aplicatii-mobile",
    serviceBlockTitle: "Vrei să lansezi o aplicație mobilă pentru business-ul tău?",
    serviceBlockDescription:
      "Vezi cum abordăm dezvoltarea aplicațiilor mobile pentru firme, de la MVP și structură până la publicare.",
    serviceCtaLabel: "Vezi serviciul de dezvoltare aplicații mobile",
    portfolioHubHref: "/portofoliu-aplicatii-mobile",
    portfolioHubTitle: "Vezi și exemple reale de aplicații mobile publicate",
    portfolioHubDescription:
      "Explorează proiecte pentru booking, comenzi, recomandări și produse digitale, cu fluxuri deja livrate pentru utilizatori reali.",
    portfolioHubCtaLabel: "Vezi portofoliul complet de aplicații mobile",
  },
  {
    id: "web-sites",
    match: {
      categories: ["web-development", "web-design"],
      topicClusters: ["websites"],
    },
    serviceHref: "/servicii/creare-site-web",
    serviceBlockTitle: "Vrei un site care să îți aducă clienți?",
    serviceBlockDescription:
      "De la structură și design la implementare — îți putem livra un site aliniat obiectivelor tale.",
    serviceCtaLabel: "Vezi serviciul de creare site web",
  },
  {
    id: "seo",
    match: {
      categories: ["seo"],
      topicClusters: ["seo"],
    },
    serviceHref: "/servicii/optimizare-seo",
    serviceBlockTitle: "Vrei mai multă vizibilitate în căutări?",
    serviceBlockDescription:
      "Optimizare și strategie SEO adaptate site-ului tău și pieței tale.",
    serviceCtaLabel: "Vezi serviciile SEO",
  },
];

export function resolveClusterConfig(post: {
  category?: string;
  topicCluster?: string;
}): TopicClusterEntry | null {
  const cat = (post.category ?? "").trim();
  const cluster = (post.topicCluster ?? "").trim();
  for (const entry of TOPIC_CLUSTER_ENTRIES) {
    if (cat && entry.match.categories.includes(cat)) {
      return entry;
    }
    if (cluster && entry.match.topicClusters.includes(cluster)) {
      return entry;
    }
  }
  return null;
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
