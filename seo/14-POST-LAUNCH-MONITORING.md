# Post-Launch SEO Monitoring

Date: 2026-09-09

Purpose: monitor rankings, indexing, traffic, conversions, redirects, errors, and lead quality after the approved SEO implementation goes live.

## First 24 Hours

- Confirm production pages, `/robots.txt`, and `/sitemap.xml` are live on the approved domain.
- Submit the sitemap in Google Search Console.
- Inspect homepage and priority URLs in GSC URL Inspection.
- Confirm canonical URLs, indexability, and production-only sitemap URLs.
- Submit test leads and confirm CRM, inbox, API, webhook, or calendar delivery.
- Confirm required analytics events fire in GA4 DebugView and live reports.
- Check redirect behavior for approved legacy URLs.

## Weekly Checks

| Area | Check | Source | Action If Weak |
|---|---|---|---|
| Rankings | Track priority keywords by country | Rank tracker or manual SERP review | Mark Research Required if rank source is missing; update content only after pattern is clear |
| Indexing | Review indexed, discovered, crawled, excluded, and canonical-selected URLs | GSC | Inspect priority URLs and fix noindex, canonical, robots, sitemap, or redirect issues |
| Traffic | Review organic clicks, impressions, CTR, landing pages, and country mix | GSC and GA4 | Improve titles, snippets, internal links, or content depth |
| Conversions | Review CTA clicks, form starts, form success, form errors, email, phone, and calendar clicks | GA4 and CRM | Fix broken forms, weak CTAs, or lead routing issues |
| Redirects | Test priority redirects and watch 404s | Hosting logs, crawler, GSC | Add or correct 301 redirects; avoid homepage dumping |
| Errors | Review 404s, 5xx, JavaScript errors, form errors, and sitemap errors | Hosting logs, GSC, GA4 | Prioritize errors affecting indexable pages and conversion paths |
| Lead quality | Review service interest, country, qualification, and sales feedback | CRM | Adjust page targeting, CTA, and qualification questions |

## Monthly Checks

| Area | Check | Source | Action If Weak |
|---|---|---|---|
| Rankings | Compare keyword movement by page, country, and cluster | Rank tracker, GSC queries | Add proof, FAQs, comparison sections, or supporting content |
| Indexing | Confirm sitemap and priority pages remain indexed | GSC | Resolve duplicate canonical, soft 404, crawl anomaly, or blocked-page issues |
| Traffic | Compare month-over-month clicks, impressions, CTR, engagement, and country mix | GSC, GA4 | Refresh metadata or expand content where impressions exist but CTR is weak |
| Conversions | Review landing-page conversion rate and funnel drop-off | GA4, CRM | Improve form UX, CTA placement, proof, and qualification flow |
| Redirects | Crawl legacy redirects and internal links | Screaming Frog, Sitebulb, or equivalent | Fix chains, loops, 302s, and broken internal links |
| Errors | Review Core Web Vitals, mobile usability, schema validation, and crawl errors | GSC, PageSpeed Insights, validator | Create technical backlog with owner and priority |
| Lead quality | Compare qualified leads by page, keyword theme, and country | CRM | Reprioritize content and market focus based on qualified pipeline |

## Quarterly Checks

| Area | Check | Source | Action |
|---|---|---|---|
| Strategy | Review market performance for US, Canada, UK, and approved European countries separately | GSC, GA4, CRM, keyword tool | Approve or pause market-specific page expansion |
| Content | Reassess cannibalization, stale pages, and missing proof | Page map, briefs, SERP analysis | Merge, improve, or create pages only with distinct intent |
| Authority | Review competitor movement, directory profiles, backlinks, and PR opportunities | SEO tool, competitor review | Build approved proof and authority assets |
| Conversion | Review lead quality, close rate, response speed, and revenue attribution | CRM and sales notes | Update CTAs, qualification questions, routing, and sales SLA |
| Technical | Re-run full crawl and production build QA | Crawler and repository checks | Fix high-impact technical SEO issues before new content batches |

## Reporting Cadence

- Weekly for the first 90 days after launch.
- Monthly once indexing and tracking are stable.
- Quarterly for strategy, market prioritization, and content roadmap updates.

## Interpretation Rule

Judge early launch quality by tracking accuracy, indexability, crawl health, redirect health, and lead routing. Judge ranking, traffic, and pipeline impact after enough country-specific data accumulates.

## Live Monitoring Run 2026-09-10

Source: live HTTP checks against `https://www.softzino.com` on 2026-09-10. No Search Console, GA4, CRM, hosting log, or lead inbox access was available.

### Confirmed Results

| Area | Result | Affected URLs | Status |
|---|---|---|---|
| Live canonical domain | Production responds on the approved `www` canonical host; live pages still need validation after the approved build is deployed. | `/`, `/solutions/custom-software-solutions` | Review Required |
| Production build match | Live pages are the old Softzino site, not the approved local SEO implementation. | `/`, `/solutions/custom-software-solutions` | Urgent |
| Priority URLs | Approved routes return 404 on production. | `/hire-developers`, `/services`, `/services/web-application-development`, `/services/mobile-app-development` | Urgent |
| Sitemap | Live sitemap contains 55 approved-host URLs but old URL patterns instead of the approved implementation route set. | `/sitemap.xml` | Urgent |
| Robots | Live robots allows general crawling, but it is not the approved generated robots output and no approved sitemap directive was confirmed. | `/robots.txt` | Review Required |
| Redirects | Legacy URLs return 200 while approved replacement URLs return 404; no approved redirect behavior is live. | `/hireus`, `/services/web-development`, `/services/mobile-application-development` | Urgent |
| Metadata | Live titles are old production titles, not the approved SEO metadata. | `/`, `/solutions/custom-software-solutions`, legacy service URLs | Urgent |
| Schema | Live pages contain JSON-LD, but schema was not the approved implementation output. | `/`, `/solutions/custom-software-solutions` | Review Required |
| Forms | A live form exists on `/solutions/custom-software-solutions`, but public markup does not expose a confirmed form action. | `/solutions/custom-software-solutions` | Blocked |
| Analytics | Live public markup includes GA/GTM scripts, but account access was unavailable and approved conversion events could not be confirmed. | `/`, `/solutions/custom-software-solutions`, `/hireus` | Blocked |

### Unavailable Data

- Search Console indexing: unavailable; no URL marked `Indexed`.
- Search Console sitemap status: unavailable.
- Search performance: unavailable.
- GA4 conversions and DebugView validation: unavailable.
- Lead-quality, CRM, inbox, API, webhook, and calendar delivery: unavailable.
- Hosting logs, crawl error logs, and server redirect configuration: unavailable.

### Next Actions

- Deploy the approved SEO implementation to the production domain before post-launch SEO validation.
- Enforce the canonical host redirect from apex to `https://www.softzino.com` at the selected production host.
- Re-run live metadata, schema, robots, sitemap, and priority URL checks after deployment.
- Approve legacy redirect sources before implementing migration redirects.
- Provide Search Console, GA4/GTM, lead endpoint, consent, and CRM or inbox access for indexing, conversion, and lead-quality validation.
