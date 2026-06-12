import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/kenya-digital-rights-atlas",
  assetPrefix: "/kenya-digital-rights-atlas/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
