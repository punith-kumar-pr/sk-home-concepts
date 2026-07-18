import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;

if (process.env.NODE_ENV === "development") {
  eval("import('@opennextjs/cloudflare')").then((m: any) => m.initOpenNextCloudflareForDev());
}
