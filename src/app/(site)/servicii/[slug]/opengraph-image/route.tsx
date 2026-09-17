import { createOgImage } from "@/lib/og-image";
import { serviceData } from "@/static-data/service";

export const runtime = "edge";

type Context = {
  params: Promise<{ slug: string }>;
};

export async function GET(_request: Request, { params }: Context) {
  const { slug } = await params;
  const service = serviceData.find((item) => item.slug === slug);

  if (!service) {
    return new Response(null, { status: 404 });
  }

  return createOgImage({
    eyebrow: "Servicii Web Dynamicx",
    title: service.title,
    description: service.metaDescription || service.description,
  });
}
