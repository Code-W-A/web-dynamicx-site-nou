export type PortfolioSupportedService = {
  slug: string;
  reason: string;
};

export type Portfolio = {
  id: string | number;
  title: string;
  slug: string;
  sortDescription: string;
  image: string;
  imageAlt: string;
  tags: string[];
  categories?: string[];
  clientLabel: string;
  headline: string;
  metaTitle: string;
  metaDescription: string;
  context: string;
  challenge: string;
  solution: string;
  outcome: string[];
  supportedServices: PortfolioSupportedService[];
  relatedSlugs: string[];
  website?: string;
  liveUrl?: string;
  location?: string;
  completedDate?: string;
};
