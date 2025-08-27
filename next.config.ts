import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.netmeds.tech",
      },
      {
        protocol: "https",
        hostname: "cdn.pixelbin.io",
      },
    ],
  },
};

export default nextConfig;
