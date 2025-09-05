export type Service = {
  id: string;
  title: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  slug: string;
  image?: string;
  ogImage?: string;
  details: React.ReactNode; // sau JSX.Element
  faqs?: { question: string; answer: string }[];
};

