import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const siteURL = process.env.SITE_URL || "https://www.webdynamicx.ro";
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Permitem crawl pentru rutele noindex, astfel încât motoarele de căutare
        // să poată citi directiva și să nu le lase "blocked by robots.txt".
        disallow: ["/api"],
      },
    ],
    sitemap: `${siteURL}/sitemap.xml`,
    host: siteURL,
  };
}
