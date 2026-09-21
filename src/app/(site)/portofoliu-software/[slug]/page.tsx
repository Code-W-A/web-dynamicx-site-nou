import { notFound } from "next/navigation";
import CaseStudyPage, {
  caseStudyMetadata,
} from "@/components/Portfolio/CaseStudyPage";
import {
  softwarePortfolio,
  softwarePortfolioHubPath,
} from "@/static-data/portfolio-additions";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return softwarePortfolio.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const study = softwarePortfolio.find((item) => item.slug === slug);
  if (!study) notFound();
  return caseStudyMetadata(study, softwarePortfolioHubPath);
}
export default async function Page({ params }: Props) {
  const { slug } = await params;
  const study = softwarePortfolio.find((item) => item.slug === slug);
  if (!study) notFound();
  const related = softwarePortfolio.filter((item) =>
    study.relatedSlugs.includes(item.slug),
  );
  return (
    <CaseStudyPage
      study={study}
      hub={softwarePortfolioHubPath}
      hubLabel="Software & platforme"
      related={related}
    />
  );
}
