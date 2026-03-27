import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  serverExternalPackages: ["ws"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.behold.pictures",
      },
    ],
  },
};

export default nextConfig;
