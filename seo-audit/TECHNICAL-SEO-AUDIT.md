# Technical SEO Audit

Date: 2026-09-05

Scope: Read-only audit of the Next.js source and rendered static output. No website source files were edited.

## Executive Summary

Softzino has a broad service catalog and enough business substance to support B2B SEO, but the technical SEO foundation is incomplete. The largest issues are missing crawl/index files, missing canonical and social metadata, missing structured data, weak conversion instrumentation, overlapping service intent, and several pages that need more search-intent depth.

The highest commercial risk is not purely technical: the lead form appears to be a simulated frontend submission, so organic leads may not reach sales even if rankings improve.

## Verified Stack And SEO-Relevant Configuration

| Area | Finding | Evidence |
|---|---|---|
| Framework | Next.js 14 App Router | `package.json`, `app/` directory |
| Static export support | Conditional GitHub Pages export with `basePath` and `assetPrefix` | `next.config.mjs` |
| Image handling | `images.unoptimized = true` | `next.config.mjs` |
| Metadata | Default site title and description in root layout | `app/layout.tsx` |
| Base URL | No `metadataBase` found | Source search |
| Sitemap | No `sitemap.xml`, `app/sitemap.ts`, or `public/sitemap.xml` found | Source and public folder search |
| Robots | No `robots.txt`, `app/robots.ts`, or `public/robots.txt` found | Source and public folder search |
| Structured data | No JSON-LD or schema.org implementation found | Source search |
| Canonicals | No canonical metadata found | Source search |
| Social metadata | No Open Graph or Twitter metadata found | Source search |
| Analytics | No GA4, Tag Manager, dataLayer, HubSpot, Calendly, or similar tracking found | Source search |
| Lead capture | Form submission is simulated client-side | `components/TalentRequestForm.tsx` |

## Page Inventory

| URL | Current Title | Meta Description | H1 | H2 Count | Audit Notes |
|---|---|---|---|---:|---|
| `/` | Softzino Technologies \| Engineering Digital Products That Drive Business Growth | Helps startups and enterprises scale with custom software engineering, cloud, data, and augmented technical talent. | Engineering Digital Products That Drive Business Growth | 7 | Strong brand message, but homepage should more directly target software development/product engineering intent. |
| `/about` | About Us \| Softzino Technologies | Learn about Softzino Technologies, our engineering culture, global delivery model, and commitment to building scalable digital products. | Empowering Global Enterprises Through Intelligent Software Engineering | 4 | Useful trust page; needs richer E-E-A-T, leadership, awards explanation, and consistent office info. |
| `/services` | Services \| Softzino Technologies | Explore Softzino Technologies services across product engineering, cloud, data, digital transformation, consultancy, and co-creation models. | Accelerating Digital Excellence Through Engineering. | Multiple service sections | Good hub structure; should become a stronger service hub with internal linking and search-intent copy. |
| `/hire-developers` | Hire Developers \| Softzino Technologies | Hire skilled developers from Softzino Technologies for frontend, backend, mobile, QA, DevOps, and full-stack product engineering needs. | Hire Skilled Developers to Build, Scale & Accelerate Your Product | 66 | Commercially important page, but heading hierarchy is noisy and the form is not wired to persistent lead capture. |
| `/off-the-shelf-solutions` | Off-the-Shelf Solutions \| Softzino Technologies | Explore Softzino Technologies portfolio-ready ERP, POS, education, and automotive workflow solutions built for real businesses. | Portfolio Solutions Built for Real Business Workflows | 5 | Product proof exists, but solution pages/screenshots/case studies are missing. |
| `/services/data-platform-engineering` | Modern Data Platform Engineering \| Softzino Technologies | Design scalable data architectures, lakes, warehouses, and real-time processing pipelines with Softzino's data engineering experts. | Modern Data Platform Engineering | 0 | Thin/incomplete compared with other service pages. |
| Service pages | Service-specific titles and descriptions | Mostly present | One H1 per page | Varies | Strong breadth, but most pages need sharper keyword targeting, proof, FAQs, schema, and internal links. |
| Utility pages | Legal/company titles | Present | One H1 per page | Low | Consider noindex for legal utility pages unless there is a reason to rank them. |

## Technical Issues

| ID | Severity | Issue | Evidence | SEO Impact | Recommendation |
|---|---|---|---|---|---|
| T-01 | Critical | No sitemap | No `sitemap.xml` or `app/sitemap.ts` found | Search engines lack a clean URL discovery and canonical signal set | Add dynamic or static sitemap with absolute canonical URLs for indexable pages only. |
| T-02 | Critical | No robots file | No `robots.txt` or `app/robots.ts` found | Crawl guidance and sitemap discovery are absent | Add robots file that allows public content and references the sitemap. |
| T-03 | High | No canonical URLs | No canonical metadata found | Duplicate or alternate deployment URLs can dilute signals, especially with `basePath` and static export modes | Add self-referential canonical metadata using a confirmed production domain. |
| T-04 | High | No `metadataBase` | Root metadata does not define base URL | Next metadata cannot reliably create absolute URLs for canonical and social tags | Add `metadataBase` once the production domain is confirmed. |
| T-05 | High | No Open Graph/Twitter metadata | No `openGraph` or `twitter` metadata found | Poor share previews and weaker title/description consistency signals | Add default OG/Twitter metadata and page-specific social images for core pages. |
| T-06 | High | No structured data | No JSON-LD/schema.org found | Missed eligibility for enriched understanding and breadcrumb/service/entity clarity | Add Organization, WebSite, BreadcrumbList, Service, and FAQPage schema where appropriate. |
| T-07 | Critical | Lead form appears frontend-only | `submitLeadRequest()` waits and returns success without network call | Organic traffic may not generate actual sales leads | Connect form to backend, CRM, email, or booking workflow before major traffic pushes. |
| T-08 | High | No analytics or conversion tracking found | No GA4/GTM/dataLayer/CRM scripts found | SEO performance cannot be attributed to leads, calls, or revenue | Implement GA4/GTM, form-submit events, phone/email clicks, and CRM lead source tracking. |
| T-09 | High | `/services/data-platform-engineering` appears thin | Rendered output has H1 but no H2 sections | Hard to rank for competitive data engineering queries | Expand with problems, architecture, platforms, process, use cases, FAQs, proof, and CTA. |
| T-10 | Medium | Heading hierarchy noisy on `/hire-developers` | Rendered output has 66 H2 elements | Weak semantic structure and lower scan quality | Reduce card-level H2s; reserve H2 for major sections and use H3/H4 for cards. |
| T-11 | Medium | Service pages are broad and similarly structured | Service templates share generic sections | Pages may not satisfy unique search intent or differentiate expertise | Add intent-led sections, industry examples, FAQs, proof, and related service links. |
| T-12 | Medium | Team model pages overlap | Hire Developers, Staff Augmentation, Dedicated Development Team, Team Extension, IT Staffing, Managed Engineering Team overlap | Cannibalization risk for "hire developers", "dedicated team", and "staff augmentation" queries | Define one primary intent per page and cross-link using clear comparison copy. |
| T-13 | Medium | API and web service pages overlap | `/services/api-development` and `/services/web-service-development` target adjacent backend integration intent | Query cannibalization risk | Position API page around API strategy/integrations and web service page around backend service engineering. |
| T-14 | Medium | UI/UX and Experience Design overlap | `/services/ui-ux-design` and `/services/experience-design` both cover design | Query cannibalization risk | Position UI/UX around product interface execution and Experience Design around research/service/customer journey strategy. |
| T-15 | Medium | Office information is inconsistent | Footer and imprint list different Dhaka/Singapore addresses; about/press kit list 4 regions | Local trust and local SEO risk | Confirm one official address set before adding LocalBusiness or country pages. |
| T-16 | Medium | Proof metrics need validation | Cloud page includes numeric claims such as cost reduction, uptime, migrations | Unsupported claims can weaken trust or create compliance risk | Confirm source and permission for all stats before surfacing in metadata/schema/case studies. |
| T-17 | Medium | Product/portfolio proof is shallow | Hishabi, Bidyava, Autoofix, ERP mentioned without detail pages | Lower vendor-shortlist conversion | Build case studies or product proof pages with screenshots, problem, solution, stack, outcome. |
| T-18 | Medium | No resource/blog content found | No education or comparison content found in route inventory | Difficult to rank for research-stage B2B queries | Add guides for cost, comparison, hiring models, modernization, cloud migration, QA automation, AI adoption. |
| T-19 | Medium | Image optimization risk | Large PNG assets in `public/images`; `images.unoptimized = true` | Potential LCP/page speed drag | Compress, resize, and convert key images to WebP/AVIF; audit Core Web Vitals. |
| T-20 | Low | Legal utility pages may be indexable | Privacy, terms, cookie, imprint, press kit have normal metadata | Index bloat is possible | Decide which pages should be noindex and include only necessary utility URLs in sitemap. |

## Search Engine Requirements To Apply

Google guidance supports these implementation requirements:

- Sitemaps should list fully qualified absolute URLs and only URLs intended for search.
- Robots files are for crawl access and sitemap discovery; they are not a substitute for `noindex`.
- Canonical signals help consolidate duplicate or similar URLs. Use self-referential canonicals on indexable canonical pages.
- Descriptive and concise title elements help Google generate title links.
- Breadcrumb structured data can help Google understand site hierarchy and breadcrumb display.
- Multi-regional targeting should use unique localized or regional URLs only when there is meaningful regional content; automatic redirects based on location should be avoided.

## Content And Intent Risks

### Highest Cannibalization Areas

| Theme | Pages At Risk | Recommended Role Split |
|---|---|---|
| Hiring and teams | `/hire-developers`, `/services/staff-augmentation`, `/services/dedicated-development-team`, `/services/team-extension`, `/services/managed-engineering-team`, `/services/it-staffing` | Use `/hire-developers` as role/technology hiring hub; staff augmentation for embedded individual contributors; dedicated team for autonomous product squads; managed team for SLA-led outsourced delivery; IT staffing for recruitment/search support. |
| Backend/API | `/services/api-development`, `/services/web-service-development`, `/services/system-integration` | API for external/internal API products; web service for backend service builds; system integration for enterprise systems and workflow connectivity. |
| Design | `/services/ui-ux-design`, `/services/experience-design` | UI/UX for interface design and design systems; experience design for customer journey, research, and service/product experience strategy. |
| AI | `/services/artificial-intelligence`, `/services/forward-deployed-ai-engineering`, `/services/physical-ai` | AI development for software AI features; forward-deployed AI for embedded client-side AI engineers; physical AI for robotics/edge/hardware intelligence. |
| Data | `/services/data-platform-engineering`, `/services/data-strategy-and-governance`, `/services/data-migration`, `/services/reporting-and-business-intelligence` | Platform for architecture/pipelines; governance for policies/quality; migration for data moves; BI for dashboards/decision support. |

## On-Page Recommendations By Template

Each priority service page should include:

1. Keyword-led title and meta description.
2. One H1 aligned to the core buyer intent.
3. Pain and outcome section.
4. Deliverables section with concrete service outputs.
5. Process section.
6. Technology/platform section only when it adds buying confidence.
7. Industry/use-case examples.
8. Relevant testimonial or case proof.
9. FAQ section with real buyer objections.
10. Clear conversion CTA and tracked lead event.
11. Breadcrumb and Service structured data.
12. Links to related services and relevant proof pages.

## Technical Implementation Order

1. Confirm production domain and office/business identity data.
2. Connect the lead form to a real destination and tracking stack.
3. Add `metadataBase`, canonical URLs, Open Graph, and Twitter metadata.
4. Add `robots.txt` and `sitemap.xml` or App Router equivalents.
5. Add Organization, WebSite, BreadcrumbList, Service, and FAQPage schema.
6. Fix `/services/data-platform-engineering` content depth.
7. Fix `/hire-developers` heading hierarchy and team-model intent split.
8. Optimize large hero and service images.
9. Add proof/case study pages and link them from service pages.
10. Add Search Console, GA4, and CRM reporting dashboards.

## External References Used

- Google sitemap guidance: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- Google robots guidance: https://developers.google.com/search/docs/crawling-indexing/robots/intro
- Google canonicalization guidance: https://developers.google.com/search/docs/crawling-indexing/canonicalization
- Google title link guidance: https://developers.google.com/search/docs/appearance/title-link
- Google breadcrumb structured data guidance: https://developers.google.com/search/docs/appearance/structured-data/breadcrumb
- Google multi-regional site guidance: https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites
