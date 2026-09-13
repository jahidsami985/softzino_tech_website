export const noindexRobotsValue = "noindex, nofollow";

export function isSearchIndexingAllowed(env = process.env) {
  return env.SEO_INDEXING_ENABLED === "true" && env.VERCEL_ENV === "production";
}

export function shouldBlockSearchIndexing(env = process.env) {
  return !isSearchIndexingAllowed(env);
}
