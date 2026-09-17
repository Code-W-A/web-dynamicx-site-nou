import { createOgImage } from "@/lib/og-image";
import { getCaseStudyBySlug } from "../../mobile-app-portfolio-data";

export const runtime = "edge";

type Context = {
  params: Promise<{ slug: string }>;
};

export async function GET(_request: Request, { params }: Context) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    return new Response(null, { status: 404 });
  }

  return createOgImage({
    eyebrow: "Studiu de caz • Aplicație mobilă",
    title: study.cardTitle,
    description: study.metaDescription,
  });
}
