export type ServiceLandingLink = {
  label: string;
  href: string;
};

export type ServiceLandingStat = {
  label: string;
  value: string;
};

export type ServiceLandingCard = {
  title: string;
  description: string;
  image?: string;
  alt?: string;
  eyebrow?: string;
};

export type ServiceLandingFaqItem = {
  question: string;
  answer: string;
};

export type ServiceLandingTimelineStep = {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  tags: string[];
  duration?: string;
};

export type ServiceLandingDeliverableGroup = {
  title: string;
  items: string[];
};

export type ServiceLandingResourceItem = {
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
};

export type ServiceLandingSectionIntro = {
  eyebrow?: string;
  title: string;
  intro: string;
};

export type ServiceLandingData = {
  slug: string;
  title: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  image: string;
  ogImage?: string;
  ogAlt: string;
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    bullets: string[];
    ctaPrimary: ServiceLandingLink;
    ctaSecondary: ServiceLandingLink;
    ctaMicrocopy: string;
    trustLine?: string;
    trustLinkLabel?: string;
    trustLinkHref?: string;
    stats: ServiceLandingStat[];
  };
  context: ServiceLandingSectionIntro & {
    cards: ServiceLandingCard[];
    proofTitle: string;
    proofItems: string[];
    proofLink?: ServiceLandingLink;
  };
  valueProps: ServiceLandingSectionIntro & {
    items: ServiceLandingCard[];
  };
  audience: ServiceLandingSectionIntro & {
    items: string[];
    outro: string;
  };
  useCases: ServiceLandingSectionIntro & {
    featured: ServiceLandingCard[];
    additional?: ServiceLandingCard[];
    outro?: string;
    outroLink?: ServiceLandingLink;
  };
  comparison?: ServiceLandingSectionIntro & {
    items: ServiceLandingCard[];
    outro?: string;
    outroLink?: ServiceLandingLink;
  };
  process: ServiceLandingSectionIntro & {
    steps: ServiceLandingTimelineStep[];
  };
  deliverables: ServiceLandingSectionIntro & {
    groups: ServiceLandingDeliverableGroup[];
    outro?: string;
  };
  pricing: {
    eyebrow?: string;
    budgetTitle: string;
    budgetText: string;
    budgetHighlight: string;
    budgetFactors: string[];
    durationTitle: string;
    durationText: string;
    durationHighlight: string;
    durationNote: string;
    cta: {
      title: string;
      text: string;
      primary: ServiceLandingLink;
      secondary?: ServiceLandingLink;
      microcopy: string;
    };
  };
  reasons: ServiceLandingSectionIntro & {
    items: string[];
    outro?: string;
  };
  faq: {
    eyebrow?: string;
    title: string;
    intro: string;
    items: ServiceLandingFaqItem[];
  };
  resources?: {
    eyebrow?: string;
    title: string;
    intro: string;
    items: ServiceLandingResourceItem[];
  };
  relatedServices: {
    eyebrow?: string;
    title: string;
    description: string;
    items: ServiceLandingLink[];
  };
  finalCta: {
    eyebrow?: string;
    title: string;
    text: string;
    supporting: string;
    primary: ServiceLandingLink;
    secondary?: ServiceLandingLink;
  };
};

export type NonMobileServiceSlug =
  | "web-design"
  | "creare-logo-branding"
  | "creare-magazin-online"
  | "creare-magazin-online-shopify"
  | "optimizare-seo"
  | "creare-site-prezentare"
  | "mentenanta-website"
  | "creare-site-web"
  | "promovare-site";
