import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/kenya-ai-rights-observatory",
  assetPrefix: "/kenya-ai-rights-observatory/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
