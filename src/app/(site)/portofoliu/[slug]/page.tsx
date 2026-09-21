import { notFound } from "next/navigation";
import CaseStudyPage, {
  caseStudyMetadata,
} from "@/components/Portfolio/CaseStudyPage";
import {
  getPortfolioBySlug,
  getRelatedPortfolioItems,
  portfolioData,
  portfolioHubPath,
} from "@/static-data/portfolio";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return portfolioData.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: Props) {
  const study = getPortfolioBySlug((await params).slug);
  if (!study) notFound();
  return caseStudyMetadata(study, portfolioHubPath);
}
export default async function Page({ params }: Props) {
  const study = getPortfolioBySlug((await params).slug);
  if (!study) notFound();
  return (
    <CaseStudyPage
      study={study}
      hub={portfolioHubPath}
      hubLabel="Portofoliu web"
      related={getRelatedPortfolioItems(study.relatedSlugs)}
    />
  );
}
