/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep isolated browser-test servers from sharing artifacts with normal builds.
  distDir: process.env.NEXT_DIST_DIR || ".next",
  async redirects() {
    return [
      {
        source: "/automatizari-ai",
        destination: "/servicii/automatizari-ai",
        statusCode: 308,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "webdynamicx.ro",
          },
        ],
        destination: "https://www.webdynamicx.ro/:path*",
        permanent: true,
      },
      {
        source: "/servicii/optimizare-seo-site",
        destination: "/servicii/optimizare-seo",
        statusCode: 301,
      },
      {
        source: "/my-butterfly-legal",
        destination: "/apps/my-butterfly/legal",
        statusCode: 308,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/contracte/:path*",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" },
          { key: "Cache-Control", value: "private, no-store" },
          { key: "Referrer-Policy", value: "no-referrer" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
        ],
      },
      {
        source: "/api/contracte/:path*",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" },
          { key: "Cache-Control", value: "private, no-store" },
          { key: "Referrer-Policy", value: "no-referrer" },
          { key: "X-Content-Type-Options", value: "nosniff" },
        ],
      },
      {
        source: "/apps/my-butterfly/legal",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow",
          },
        ],
      },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
      {
        protocol: "https",
        hostname: "api.microlink.io",
        port: "",
      },
    ],
  },
};

export default nextConfig;
