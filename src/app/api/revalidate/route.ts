import { revalidatePath, revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";
import { getTopicClusterEntries } from "@/config/blog-topic-clusters";

export async function POST(req: NextRequest) {
  try {
    const webhookSecret = process.env.SANITY_HOOK_SECRET;

    if (!webhookSecret) {
      return new Response("Missing SANITY_HOOK_SECRET", { status: 500 });
    }

    const { body, isValidSignature } = await parseBody<{
      _type: string;
      slug?: string | undefined;
    }>(req, webhookSecret);

    if (!isValidSignature) {
      return new Response("Invalid Signature", { status: 401 });
    }

    if (!body?._type) {
      return new Response("Bad Request", { status: 400 });
    }

    revalidateTag(body._type);

    if (body._type === "post") {
      const clusterEntries = getTopicClusterEntries();
      const servicePaths = new Set(
        clusterEntries.flatMap((entry) => entry.serviceSlugs.map((slug) => `/servicii/${slug}`)),
      );

      revalidatePath("/");
      revalidatePath("/blog");
      revalidatePath("/blog/tag/[tag]", "page");
      revalidatePath("/sitemap.xml");
      clusterEntries.forEach((entry) => {
        revalidatePath(`/blog/topic/${entry.id}`);
      });
      servicePaths.forEach((path) => {
        revalidatePath(path);
      });

      if (typeof body.slug === "string" && body.slug.trim()) {
        revalidatePath(`/blog/${body.slug.trim()}`);
      }
    }

    if (body._type === "tagDetail") {
      revalidatePath("/blog/tag/[tag]", "page");
      revalidatePath("/sitemap.xml");
    }

    return NextResponse.json({
      status: 200,
      revalidated: true,
      now: Date.now(),
      body,
    });
  } catch (error: any) {
    console.error(error);
    return new Response(error.message, { status: 500 });
  }
}
