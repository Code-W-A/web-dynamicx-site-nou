import { createOgImage } from "@/lib/og-image";

export const runtime = "edge";

export function GET() {
  return createOgImage({
    eyebrow: "Agenție web din România",
    title: "Website-uri clare, rapide și pregătite pentru creștere",
    description:
      "Web design, dezvoltare web, SEO și aplicații mobile construite pentru rezultate măsurabile.",
  });
}
