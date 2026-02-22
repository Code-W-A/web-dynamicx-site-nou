import { StaticImport } from "next/dist/shared/lib/get-img-props";
import type { ReactNode } from "react";

export type Portfolio = {
  id: string | number;
  title: string;
  slug: string;
  sortDescription: string;
  image: string | StaticImport;
  tags: string[];
  categories?: string[];
  website?: string;
  liveUrl?: string;
  location?: string;
  completedDate?: string;
  details?: ReactNode;
};
