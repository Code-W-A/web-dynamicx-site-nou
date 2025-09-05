import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const siteURL = process.env.SITE_URL || "https://www.webdynamicx.ro";
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteURL}/sitemap.xml`,
    host: siteURL,
  };
}
