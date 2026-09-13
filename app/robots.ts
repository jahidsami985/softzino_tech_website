import type { MetadataRoute } from "next";
import { isSearchIndexingAllowed, productionOrigin } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  if (!isSearchIndexingAllowed()) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
      sitemap: `${productionOrigin}/sitemap.xml`,
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${productionOrigin}/sitemap.xml`,
    host: productionOrigin,
  };
}
