# Softzino SEO Implementation System

Version: 1.0  
Last updated: 2026-09-09  
Project: Softzino Technologies website  
Website framework: Next.js 14, App Router, TypeScript, static export  
Document owner: Softzino project owner  

## Purpose

This directory is the source of truth for researching, approving, implementing, testing, launching, and monitoring SEO for the new Softzino website.

SEO recommendations must not be copied directly into the website unless the relevant page is marked `Ready to Implement` in `13-IMPLEMENTATION-STATUS.csv`. Research records, hypotheses, and proposed claims are not automatically approved website content.

The SEO program should generate qualified software-development leads from the United States, Canada, the United Kingdom, and selected high-value European countries. Each country must be researched separately. “Europe” must not be treated as one keyword database or one uniform market.

## Current State

The current SEO package reports:

- 83 keyword seeds.
- 29 keyword clusters.
- 44 mapped website pages.
- A business and buyer analysis.
- A technical SEO audit.
- A priority roadmap.
- A detailed Custom Software SEO implementation report.
- Local implementation and validation of `/solutions/custom-software-solutions`, according to the supplied implementation report.

The website repository must be inspected before treating any reported implementation as verified. The SEO documents alone do not prove that code has been deployed to production.

Most keyword metrics are still unverified. Country-specific search volume, CPC, keyword difficulty, rankings, traffic, conversions, and lead-quality data must be added before full-site prioritization.

## Approved URL Decision

Use this route as the only Custom Software commercial service page:

```text
/solutions/custom-software-solutions
```

Primary keyword:

```text
custom software development company
```

Do not create `/services/custom-software-development` unless Softzino intentionally replaces the approved route and provides a migration and redirect plan. Two pages must not target the same commercial intent.

The expected production domain is:

```text
https://www.softzino.com
```

The project owner must confirm the production domain before sitewide canonical URLs, `metadataBase`, sitemap URLs, structured data identifiers, redirects, or Search Console submission are finalized.

## Target Audiences

Primary buyer groups:

1. Startup founders, CTOs, product leaders, and funded SaaS teams.
2. Mid-market companies modernizing workflows and legacy systems.
3. Enterprise engineering, IT, operations, and procurement teams.
4. Businesses seeking dedicated developers, staff augmentation, or managed engineering teams.
5. Organizations evaluating cloud, data, AI, web, mobile, QA, IoT, embedded, or semiconductor capabilities.

Primary target markets:

1. United States.
2. Canada.
3. United Kingdom.
4. Selected European countries approved by the business owner.

Country or city landing pages must not be created without genuine market relevance, approved proof, contract support, time-zone information, and localized buyer content.

## Directory Structure

The completed SEO package should use this structure:

```text
seo/
├── 00-SEO-README.md
├── 01-BUSINESS-FACTS.md
├── 02-SITE-INVENTORY.csv
├── 03-KEYWORD-MASTER.csv
├── 04-KEYWORD-CLUSTERS.csv
├── 05-PAGE-KEYWORD-MAP.csv
├── 06-CONTENT-BRIEFS/
├── 07-INTERNAL-LINK-MAP.csv
├── 08-REDIRECT-MAP.csv
├── 09-TECHNICAL-SEO-SPEC.md
├── 10-SCHEMA-MAP.csv
├── 11-ANALYTICS-MEASUREMENT-PLAN.md
├── 12-LAUNCH-QA-CHECKLIST.md
├── 13-IMPLEMENTATION-STATUS.csv
├── 14-POST-LAUNCH-MONITORING.md
└── data/
    ├── raw/
    └── competitors/
```

Raw Semrush, Ahrefs, Google Search Console, GA4, CRM, crawler, and competitor exports must remain unchanged under `data/raw/` or `data/competitors/`. Cleaned or approved data belongs in the master files, not in the raw exports.

## File Responsibilities

| File | Purpose | Primary owner |
|---|---|---|
| `00-SEO-README.md` | Defines SEO governance, workflow, decisions, and readiness rules | Project owner |
| `01-BUSINESS-FACTS.md` | Holds verified company facts, approved claims, markets, proof, and sales requirements | Softzino management |
| `02-SITE-INVENTORY.csv` | Records every current and proposed URL, metadata, headings, index status, and page state | Codex |
| `03-KEYWORD-MASTER.csv` | Stores country-specific keyword metrics, intent, SERP observations, and sources | SEO owner with ChatGPT analysis |
| `04-KEYWORD-CLUSTERS.csv` | Groups keywords with the same intent into one page opportunity | SEO owner with ChatGPT analysis |
| `05-PAGE-KEYWORD-MAP.csv` | Assigns one primary cluster to each indexable page | SEO owner, approved by project owner |
| `06-CONTENT-BRIEFS/` | Defines page content, metadata, proof, links, CTA, and acceptance criteria | ChatGPT drafts; project owner approves |
| `07-INTERNAL-LINK-MAP.csv` | Defines source page, target page, anchor purpose, and placement | SEO owner and Codex |
| `08-REDIRECT-MAP.csv` | Maps every changed old production URL to its approved destination | Codex drafts; project owner approves |
| `09-TECHNICAL-SEO-SPEC.md` | Defines sitewide Next.js SEO requirements | Codex |
| `10-SCHEMA-MAP.csv` | Defines structured data by page and its approved factual source | SEO owner and Codex |
| `11-ANALYTICS-MEASUREMENT-PLAN.md` | Defines GA4, GTM, CRM, form, consent, and attribution requirements | Marketing and development owners |
| `12-LAUNCH-QA-CHECKLIST.md` | Defines the tests required before production deployment | Codex and project owner |
| `13-IMPLEMENTATION-STATUS.csv` | Tracks approval, implementation, QA, deployment, and indexing | Project owner and Codex |
| `14-POST-LAUNCH-MONITORING.md` | Defines reporting, issue checks, and optimization cadence | SEO and marketing owners |

## Authority And Evidence Rules

Use evidence in this order:

1. Approved business facts supplied by Softzino management.
2. Production website and repository evidence.
3. Google Search Console, GA4, CRM, and backend lead records.
4. Country-specific Semrush, Ahrefs, or Google Keyword Planner exports.
5. Manual review of the current search results.
6. Competitor and backlink research.
7. Strategic hypotheses clearly labelled as hypotheses.

ChatGPT and Codex must not invent:

- Search volume, CPC, keyword difficulty, rankings, traffic, or conversions.
- Offices, legal entities, regional presence, employees, clients, awards, certifications, or partnerships.
- Project outcomes, cost savings, uptime, performance improvements, or other metrics.
- Testimonials, ratings, case studies, pricing, delivery timelines, or security claims.
- CRM results, lead quality, revenue attribution, or market demand.

Unsupported information must be marked `Verification Required` and excluded from public website copy and structured data.

## Keyword Research Rules

Every approved keyword record must include:

- Keyword.
- Country.
- Language.
- Service topic.
- Search intent.
- Buyer-journey stage.
- Search volume.
- CPC.
- Keyword difficulty.
- SERP features.
- Dominant ranking page type.
- Business value.
- Proof availability.
- Target URL.
- Primary or secondary role.
- Source and source date.
- Approval status.

One page should target one main search intent. Closely related variations normally belong on the same page. A new page is justified only when the search intent, buyer need, or SERP page type is materially different.

Commercial and informational keywords must be separated. For example:

- `custom software development company` belongs on a commercial service page.
- `how to choose a custom software development company` belongs in an informational buyer guide.

Words such as “best,” “top,” “leading,” and location-based claims must not be used as unsupported self-promotional claims.

## Page-Mapping Rules

Every indexable page must have:

- One approved purpose.
- One primary keyword cluster.
- A defined search intent and target market.
- One canonical URL.
- A unique title, H1, and meta description.
- An approved content brief.
- A primary conversion action.
- Required supporting evidence.
- Defined internal links.
- Defined structured data, if appropriate.
- An implementation and QA status.

Two pages must not target the same primary intent without an explicitly documented hub-and-spoke relationship.

Utility pages such as privacy, cookie, terms, and imprint pages should not be treated as commercial keyword targets. Their index/noindex status must be decided in the technical specification and sitemap policy.

## Content Standards

Priority commercial pages should normally include:

1. One clear H1 aligned with buyer intent.
2. A concise value proposition.
3. Buyer problems and business outcomes.
4. Concrete service deliverables.
5. Delivery process.
6. Relevant technical capabilities.
7. Industry or use-case examples.
8. Approved case studies, testimonials, or product proof.
9. Real buyer questions and clear answers.
10. One primary, trackable CTA.
11. Related services and proof links.
12. Accurate metadata and canonical URL.

Content must be useful, specific, readable, and factually supported. Keywords should be used naturally. Keyword density targets and repeated exact-match phrasing must not drive the writing.

Visible FAQ content may be used when it helps buyers. `FAQPage` structured data is not an SEO priority because Google stopped showing FAQ rich results in May 2026 and removed the feature documentation in June 2026.

## Technical SEO Requirements

Before production launch, the project must include and validate:

- Confirmed production domain and preferred `www` or non-`www` version.
- Production `metadataBase`.
- Unique page metadata.
- Self-referencing canonical URLs.
- Open Graph and Twitter metadata.
- Crawlable production pages.
- `robots.txt` referencing the production sitemap.
- An absolute-URL sitemap containing indexable canonical pages only.
- `noindex` protection for preview and staging deployments.
- Organization structured data using approved business facts.
- WebSite and BreadcrumbList structured data where appropriate.
- Valid internal links and no unintended orphan pages.
- A useful 404 page and correct HTTP status behavior.
- Image dimensions, compression, and appropriate modern formats.
- Mobile usability and Core Web Vitals review.
- Old-to-new URL redirects.
- A successful lint, TypeScript, and production build.

`Service` schema may describe service content when accurate, but it must not be presented as a guaranteed Google rich-result feature.

## Analytics And Conversion Requirements

SEO traffic must not be launched toward a simulated or unmonitored lead form.

Before significant SEO promotion, confirm:

- The form sends data to a real backend, CRM, email workflow, or approved destination.
- The backend returns real success and failure states.
- Spam protection and privacy requirements are handled.
- Google Search Console is verified for the production domain.
- GA4 or an approved analytics platform is installed.
- Consent behavior supports applicable target markets.
- Lead source, medium, campaign, landing page, and referrer are stored.
- CRM records preserve service interest, country, qualification, stage, and revenue where available.

Required event names:

```text
cta_click
form_start
form_submit_success
form_submit_error
email_click
phone_click
calendar_click
```

`form_submit_success` must fire only after the receiving system confirms the submission.

## Migration Rules

The new frontend is replacing an existing Softzino website. Before changing hosting or DNS:

1. Crawl and export all indexable URLs from the old website.
2. Record current titles, canonicals, status codes, traffic, backlinks, and rankings where available.
3. Match every old URL to the equivalent new URL.
4. Preserve valuable URLs wherever practical.
5. Use permanent 301 redirects for approved URL changes.
6. Do not redirect unrelated pages to the homepage.
7. Test redirects, canonicals, internal links, sitemap URLs, forms, and analytics on the production candidate.
8. Keep the old website recoverable until launch validation succeeds.
9. Submit the production sitemap and monitor indexing after launch.

The redirect implementation must match the selected production host. Redirect support must be confirmed before the domain is switched.

## Status Definitions

Use only these workflow statuses:

| Status | Meaning |
|---|---|
| `Research Required` | Keyword, SERP, competitor, or current-performance evidence is missing |
| `Business Approval Required` | A company fact, claim, proof asset, market, URL, or commercial decision is unresolved |
| `Approved` | Research and business inputs are approved but the implementation brief may still be incomplete |
| `Ready to Implement` | All inputs, mappings, proof, content, technical requirements, and acceptance criteria are complete |
| `Implemented Locally` | Code or content changes exist in the working project but have not passed full QA |
| `QA Passed` | Required automated and manual checks passed against the production build |
| `Deployed` | The approved version is live on the intended environment |
| `Indexed` | Search Console or search-engine inspection confirms indexability/indexing as applicable |
| `Monitoring` | Performance and conversion results are being reviewed after launch |

## Ready-To-Implement Gate

A page may be marked `Ready to Implement` only when all of the following are true:

- The production URL and canonical are approved.
- The target country and language are defined.
- The primary and secondary keywords have verified source data.
- Current SERP intent has been reviewed.
- The page does not create unresolved cannibalization.
- The title, H1, description, outline, CTA, links, and schema plan are complete.
- Every company claim and proof asset is approved.
- The content brief has testable acceptance criteria.
- The CTA has a real destination and measurement plan.
- Any required redirect has been documented.
- The project owner has approved implementation.

If any requirement is missing, keep the page in `Research Required`, `Business Approval Required`, or `Approved` status.

## Implementation Sequence

Implement SEO in controlled batches.

### Roadmap Tracker

| Phase | Task | Dependency | Owner | Expected Outcome | Status |
|---|---|---|---|---|---|
| Phase 1 | Confirm production domain, legal name, offices, target markets, and public proof | Owner business approval | Softzino management | Approved facts for metadata, schema, regional wording, and content proof | Verification Required |
| Phase 1 | Connect lead form, email, phone, and calendar paths to real destinations | CRM, inbox, API, webhook, or calendar decision | Sales/Developer | SEO traffic reaches a monitored lead workflow | Verification Required |
| Phase 1 | Configure GA4, GSC, GTM, consent behavior, and required conversion events | Analytics access and production domain | Marketing/Developer | Search, CTA, form, and lead quality reporting works | Verification Required |
| Phase 1 | Crawl existing production website and complete redirect map | Production crawl and legacy URL export | SEO/Developer | Approved redirects before replacing the current site | Research Required |
| Phase 2 | Implement metadataBase, canonical strategy, sitemap, robots, OG, and Twitter metadata | Confirmed production domain and approved URL list | Developer | Crawlable production SEO foundation | Business Approval Required |
| Phase 2 | Add Organization, WebSite, BreadcrumbList, and accurate page schema | Approved company facts and schema map | Developer/SEO | Structured data uses verified facts only | Business Approval Required |
| Phase 2 | Validate technical SEO, forms, links, images, status codes, and production build | Code implementation and launch checklist | Developer/Codex | QA evidence for launch candidate | Research Required |
| Phase 3 | Verify `/solutions/custom-software-solutions` implementation and proof gaps | Approved proof, domain, analytics, QA | Developer/Owner | Custom software page ready for production SEO | Implemented Locally |
| Phase 3 | Prepare homepage, services, hire developers, web app, and mobile app updates | Content briefs and business approval | Content/Developer | First priority commercial batch ready for implementation | Business Approval Required |
| Phase 3 | Prepare additional high-priority service briefs | SERP research, proof, and owner approval | Content/SEO | API, modernization, AI, cloud, data, DevOps, QA, team pages ready later | Research Required |
| Phase 4 | Publish approved proof assets and case-study content | Client/product permissions and owner approval | Marketing/Owner | Stronger trust, conversion, and E-E-A-T signals | Verification Required |
| Phase 5 | Launch, submit sitemap, inspect URLs, monitor rankings and leads | QA passed and owner launch approval | SEO/Developer/Marketing | Controlled production launch with weekly monitoring | Business Approval Required |

### Phase 1: Business, conversion, and measurement

1. Confirm the production domain, company facts, offices, target markets, and approved proof.
2. Connect the lead form to a real destination.
3. Configure analytics, Search Console, conversion events, CRM attribution, and consent behavior.
4. Crawl the existing production website and prepare the redirect map.

### Phase 2: Sitewide technical foundation

1. Add `metadataBase`, title templates, canonical URLs, Open Graph, and Twitter metadata.
2. Add robots and sitemap outputs suitable for the static Next.js build.
3. Add Organization, WebSite, and BreadcrumbList structured data where accurate.
4. Add staging index controls.
5. Validate status codes, internal links, images, mobile behavior, and Core Web Vitals.

### Phase 3: Priority commercial pages

Recommended first batch:

1. `/solutions/custom-software-solutions` — verify the reported implementation and unresolved claims.
2. `/hire-developers` — repair the form, heading hierarchy, differentiation, and proof.
3. `/` — clarify the main commercial positioning and buyer routes.
4. `/services` — strengthen the service hub and internal links.
5. `/services/web-application-development`.
6. `/services/mobile-app-development`.

Implement additional pages only after their keyword data and content briefs reach `Ready to Implement`.

### Phase 4: Proof and authority

1. Publish approved case studies.
2. Add product screenshots, technical evidence, and testimonials with permission.
3. Publish decision-stage guides based on genuine expertise and business data.
4. Develop relevant backlinks, partnerships, directory profiles, and digital PR.

### Phase 5: Launch and monitoring

1. Complete the launch QA checklist.
2. Deploy without changing the domain first.
3. Test the production candidate.
4. Switch the domain only after approval.
5. Submit the sitemap and inspect priority URLs.
6. Monitor indexing, rankings, conversions, leads, redirects, and errors.

## AI Responsibilities

ChatGPT may:

- Analyze supplied keyword and performance data.
- Classify intent and create keyword clusters.
- Draft page maps, content briefs, metadata, copy, FAQs, and reporting plans.
- Review current SERPs when browsing is available.
- Identify likely gaps, overlaps, and implementation risks.

Codex may:

- Inspect the repository and generate the technical site inventory.
- Compare routes and content with the approved page map.
- Implement approved metadata, content, links, schema, redirects, analytics, and technical SEO.
- Run lint, type checking, builds, route checks, metadata checks, and launch QA.
- Update implementation evidence and statuses.

Softzino management must:

- Approve business priorities, company facts, locations, claims, proof, client permissions, pricing, legal language, security statements, and deployment decisions.
- Supply private Semrush, Search Console, GA4, CRM, sales, and lead-quality data.
- Authorize account access, credentials, DNS changes, analytics properties, CRM connections, and production deployment.

## Change-Control Rules

- Update `Last updated` whenever this README changes.
- Preserve raw research exports without modification.
- Record the source date for all metrics.
- Update the audit and roadmap after implementation so they do not describe stale project conditions.
- Do not allow the roadmap, page map, and implementation reports to specify different canonical URLs.
- Record completed work with exact file paths, commands, test results, unresolved warnings, and deployment status.
- Do not mark a task deployed or indexed based only on a successful local build.

## Immediate Next Actions

1. Complete `01-BUSINESS-FACTS.md` with Softzino management.
2. Generate `02-SITE-INVENTORY.csv` from the latest repository and crawl the current production website.
3. Import country-specific Semrush and Search Console data into `03-KEYWORD-MASTER.csv`.
4. Reconcile the existing seed list, cluster file, page map, roadmap, audit, and Custom Software implementation report.
5. Create `08-REDIRECT-MAP.csv` before replacing the existing website.
6. Complete the technical and measurement specifications.
7. Prepare page briefs and implementation statuses for the first approved batch.

## Reference Guidance

- Google Search Essentials: https://developers.google.com/search/docs/essentials
- Google title-link guidance: https://developers.google.com/search/docs/appearance/title-link
- Google canonicalization guidance: https://developers.google.com/search/docs/crawling-indexing/canonicalization
- Google sitemap guidance: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- Google robots guidance: https://developers.google.com/search/docs/crawling-indexing/robots/intro
- Google structured-data gallery: https://developers.google.com/search/docs/appearance/structured-data/search-gallery
- Google international-site guidance: https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites
- Google Search Console performance documentation: https://support.google.com/webmasters/answer/10268906
