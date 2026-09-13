# SEO Launch QA Checklist

Date: 2026-09-08

Use this before final production release.

## Crawl and Indexing

- [x] Production canonical domain is confirmed as `https://www.softzino.com`.
- [ ] Vercel preview URLs are not used as canonicals.
- [ ] `/robots.txt` returns 200.
- [ ] `/sitemap.xml` returns 200.
- [ ] Sitemap contains only approved canonical URLs.
- [ ] Sitemap is submitted in Google Search Console.
- [ ] No unwanted pages are indexable.
- [ ] No priority page is blocked by robots.

## Metadata

- [ ] Every priority page has one SEO title.
- [ ] Every priority page has one meta description.
- [ ] Priority titles are unique.
- [ ] Priority meta descriptions are unique.
- [ ] Canonical tags are present on priority pages.
- [ ] Open Graph title, description, URL, image, and type are present.
- [ ] Twitter card metadata is present.

## Content

- [ ] Every priority page has exactly one H1.
- [ ] H2/H3 hierarchy is logical.
- [ ] Primary keyword appears naturally in title, H1, intro, and body.
- [ ] No hidden SEO text exists.
- [ ] No unverified office, client, award, pricing, or metric claims exist.
- [ ] CTAs are clear and working.
- [ ] Internal links follow `07-INTERNAL-LINK-MAP.csv`.

## Structured Data

- [ ] Organization schema validates.
- [ ] WebSite schema validates.
- [ ] Breadcrumb schema validates on inner pages.
- [ ] Service schema validates on service pages.
- [ ] FAQPage schema is used only when FAQs are visible.
- [ ] No fake review, rating, price, or local schema exists.

## Analytics and Leads

- [ ] GA4 is installed.
- [ ] GTM is installed, if used.
- [ ] GSC is verified.
- [ ] Lead form sends data to approved destination.
- [ ] Lead form success event fires only after real successful submission.
- [ ] Lead form error event fires on failure.
- [ ] Email and phone click events are tracked.
- [ ] CRM stores landing page, source, medium, campaign, and service interest.

## Performance

- [ ] Homepage Lighthouse check completed.
- [ ] Priority service page Lighthouse check completed.
- [ ] Large images are compressed.
- [ ] Hero image has acceptable LCP.
- [ ] Mobile layout has no overlapping text.
- [ ] Forms are usable on mobile.

## Final Signoff

| Item | Owner | Date | Status |
|---|---|---|---|
| Business facts approved |  |  |  |
| Technical SEO QA passed |  |  |  |
| Analytics QA passed |  |  |  |
| Lead routing QA passed |  |  |  |
| Production release approved |  |  |  |

## Local QA Run 2026-09-10

| Area | Result | Notes |
|---|---|---|
| Hosting method | Verified | Next.js 14 App Router; normal Next.js build by default; `GITHUB_PAGES=true` enables static export. |
| Redirects | Partially configured | Apex-to-www canonical 301 redirect is configured in `next.config.mjs` for non-GitHub Pages builds; legacy redirect sources remain `TBD`. |
| Lint | Passed | `npm.cmd run lint` passed with no ESLint warnings or errors. |
| TypeScript | Passed | `npx.cmd tsc --noEmit` passed. |
| Preview build | Passed | `VERCEL_ENV=preview` build passed; homepage noindex and robots disallow validated. |
| Production build | Passed | `npm.cmd run build` passed with non-fatal webpack cache warning: `Unable to snapshot resolve dependencies`. |
| Robots | Passed locally | `/robots.txt` returned 200 on local Next server and allows production crawling. |
| Sitemap | Passed locally | `/sitemap.xml` returned 200; 44 URLs, all using `https://www.softzino.com`. |
| Metadata | Passed locally | 44 pages checked; 0 missing titles, descriptions, canonicals; 0 duplicate titles. |
| H1 | Passed locally | 44 pages checked; 0 pages with missing or multiple H1s. |
| Canonicals | Passed locally | 0 generated canonicals outside `https://www.softzino.com`. |
| Schema | Passed locally | 134 JSON-LD blocks parsed; 0 invalid; no LocalBusiness, Review, AggregateRating, or price schema. |
| Internal links | Passed locally | 0 generated pages with broken internal links. |
| 404 behavior | Passed locally | Missing URL returned 404 on local Next server. |
| Forms and analytics | Blocked for production | Code is safely gated, but no local `.env*`, lead endpoint, analytics IDs, consent approval, CRM, or GSC verification is available. |
| Deployment/indexing | Not marked | Local QA only; no page marked `Deployed` or `Indexed`. |

## Canonical Domain QA 2026-09-13

| Area | Result | Notes |
|---|---|---|
| Approved canonical | Confirmed | Production canonical origin is `https://www.softzino.com`. |
| Central source | Confirmed | `lib/site-config.mjs` owns the production origin and `lib/seo.ts` re-exports it for SEO helpers. |
| Host redirect | Configured with deployment caveat | `next.config.mjs` redirects apex host requests to the approved `www` origin with status 301 for non-GitHub Pages builds; static export hosts need the same permanent redirect at the host/CDN layer. |
| Required checks | Passed | `npm.cmd run lint`, `npx.cmd tsc --noEmit`, and `npm.cmd run build` passed on 2026-09-13. |
| Generated output | Passed | 0 bad canonical origins, 0 localhost references, 0 `.vercel.app` references, 0 duplicate title groups, 0 broken internal links, and 0 production noindex on indexable routes. |
| Live DNS/site | Not changed | No DNS, hosting, or live website changes were made. |

## Vercel Client Review Deployment 2026-09-13

| Area | Required Setting | Expected Result |
|---|---|---|
| Indexing gate | `SEO_INDEXING_ENABLED=false` on the Vercel review deployment | HTML metadata outputs `noindex, nofollow`, `X-Robots-Tag` returns `noindex, nofollow`, and `/robots.txt` disallows all crawlers. |
| Vercel environment | Review deployments must use Vercel Preview, so `VERCEL_ENV=preview` is supplied by Vercel | Indexing remains blocked even if another variable is misconfigured. |
| Launch-only indexing | Set `SEO_INDEXING_ENABLED=true` only with `VERCEL_ENV=production` for the approved launch deployment | Noindex is removed and approved production robots rules are served. |
| Canonicals | Keep shared production origin as `https://www.softzino.com` | Review URLs and `.vercel.app` URLs are never used as canonicals. |
| Analytics | Keep `NEXT_PUBLIC_GA_MEASUREMENT_ID`, `NEXT_PUBLIC_GTM_ID`, and `NEXT_PUBLIC_ANALYTICS_CONSENT_GRANTED` unset on review | Production GA/GTM tracking does not load on the review deployment. |
| Lead form | Leave `NEXT_PUBLIC_LEAD_ENDPOINT` unset unless a staging endpoint is supplied with `NEXT_PUBLIC_LEAD_ENDPOINT_ENV=staging` | Review form submissions do not go to production systems. |
| DNS/live site | No DNS, domain, or live website changes | Client review is isolated to Vercel preview. |

## Vercel Review Indexing QA 2026-09-13

| Check | Result | Notes |
|---|---|---|
| Indexing env matrix | Passed | Indexing is allowed only for `SEO_INDEXING_ENABLED=true` with `VERCEL_ENV=production`; the other three combinations block indexing. |
| Review build | Passed | Built with `SEO_INDEXING_ENABLED=false`, `VERCEL_ENV=preview`, and `NEXT_PUBLIC_SITE_ENV=review`; all 44 indexable pages output `noindex, nofollow`. |
| Review headers | Passed | Local `next start` check returned `X-Robots-Tag: noindex, nofollow` on the homepage and robots.txt. |
| Review robots.txt | Passed | Generated robots.txt disallows all crawlers and keeps the sitemap URL on `https://www.softzino.com`. |
| Launch build | Passed | Built with `SEO_INDEXING_ENABLED=true`, `VERCEL_ENV=production`, and `NEXT_PUBLIC_SITE_ENV=production`; 44 indexable pages output `index, follow`. |
| Launch headers | Passed | Local `next start` check returned no `X-Robots-Tag` header and robots.txt allowed crawling. |
| Canonicals | Passed | Review and launch artifacts had 0 bad canonical origins, 0 `.vercel.app` references, 0 localhost references, and 0 old non-www references. |
| Final local artifact | Review-safe | Rebuilt with review env values after launch verification, leaving `.next` non-indexable. |
