export type LeadSource = "lead-web-site" | "lead-magazin-online";
export type LeadPackage = {
  name: string;
  price: string;
  audience: string;
  items: string[];
  delivery?: string;
};
export type LeadPageConfig = {
  source: LeadSource;
  path: string;
  thankYouPath: string;
  formName: string;
  submitEvent: string;
  label: string;
  title: string;
  description: string;
  cta: string;
  startingPrice: string;
  heroProject: string;
  heroCaption: string;
  heroImage?: string;
  projects: { slug: string; description: string; features: string[] }[];
  packages: LeadPackage[];
  included: string[];
  projectTypes: string[];
  messageHint: string;
  faqs: { question: string; answer: string }[];
};

export function getWebCommerceSource(path: string): LeadSource | null {
  if (path === "/leads/creare-site-web") return "lead-web-site";
  if (path === "/leads/creare-magazin-online") return "lead-magazin-online";
  return null;
}
