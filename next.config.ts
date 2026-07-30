import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isGitHubPages ? "/cf2loc-project-page" : "",
  assetPrefix: isGitHubPages ? "/cf2loc-project-page/" : "",
};

export default nextConfig;
