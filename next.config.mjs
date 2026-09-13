import { apexHost, productionOrigin } from "./lib/site-config.mjs";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const repoName = "softzino_tech_website";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: isGitHubPages ? "export" : undefined,
  basePath: isGitHubPages ? `/${repoName}` : "",
  assetPrefix: isGitHubPages ? `/${repoName}/` : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: isGitHubPages ? `/${repoName}` : "",
  },
  async redirects() {
    if (isGitHubPages) {
      return [];
    }

    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: apexHost,
          },
        ],
        destination: `${productionOrigin}/:path*`,
        statusCode: 301,
      },
    ];
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: isGitHubPages,
};

export default nextConfig;
