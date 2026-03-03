/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
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
