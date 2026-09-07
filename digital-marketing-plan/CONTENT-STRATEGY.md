# Content Strategy

Date: September 7, 2026

Scope: Planning only. Do not publish new pages, articles, case studies, or claims until owner verification is complete.

## Content Objective

Softzino's content should help B2B buyers understand three things:

1. What Softzino can build.
2. How Softzino works.
3. Why Softzino can be trusted.

The first 90 days should prioritize revenue pages and proof assets over generic blog volume.

## Priority Content Clusters

| Priority | Cluster | Business purpose | Primary page | Relevant file |
|---|---|---|---|---|
| 1 | Custom software development | Main buyer-intent SEO offer | https://softzino.com/solutions/custom-software-solutions/ | `seo-audit/KEYWORD-CLUSTERS.csv` |
| 2 | Dedicated teams and staff augmentation | Recurring revenue and hiring-intent traffic | https://softzino.com/hire-developers/ | `seo-audit/KEYWORD-CLUSTERS.csv` |
| 3 | MVP development | Founder and startup demand | https://softzino.com/services/mvp-development/ | `seo-audit/KEYWORD-CLUSTERS.csv` |
| 4 | Web application development | Core B2B service demand | https://softzino.com/services/web-application-development/ | `seo-audit/KEYWORD-CLUSTERS.csv` |
| 5 | QA and DevOps | Trust, reliability, and recurring support | https://softzino.com/services/quality-engineering/ | `seo-audit/KEYWORD-CLUSTERS.csv` |
| 6 | Software modernization | Enterprise and operations-led opportunities | https://softzino.com/services/application-modernization/ | `seo-audit/KEYWORD-CLUSTERS.csv` |

## Service Pages To Optimize First

| Order | Page | What to improve | Relevant file |
|---|---|---|---|
| 1 | https://softzino.com/solutions/custom-software-solutions/ | Add verified proof, stronger comparison content, clearer process, FAQs, and conversion CTA | `seo-audit/CUSTOM-SOFTWARE-SEO-IMPLEMENTATION.md` |
| 2 | https://softzino.com/hire-developers/ | Confirm lead form routing, improve role filters, add vetting process, add response-time expectations | `components/TalentRequestForm.tsx` |
| 3 | https://softzino.com/services/dedicated-development-team/ | Clarify team structure, onboarding, management model, and proof | `seo-audit/PAGE-KEYWORD-MAP.csv` |
| 4 | https://softzino.com/services/staff-augmentation/ | Differentiate from dedicated team and team extension pages | `seo-audit/PAGE-KEYWORD-MAP.csv` |
| 5 | https://softzino.com/services/mvp-development/ | Add MVP packages, timeline ranges, sample scope, and founder-specific FAQs | `seo-audit/PAGE-KEYWORD-MAP.csv` |
| 6 | https://softzino.com/services/web-application-development/ | Add B2B web app examples, technology approach, and internal links to custom software | `seo-audit/PAGE-KEYWORD-MAP.csv` |
| 7 | https://softzino.com/services/quality-engineering/ | Add QA methods, tools, testing types, and release-quality outcomes | `seo-audit/PAGE-KEYWORD-MAP.csv` |
| 8 | https://softzino.com/services/devops/ | Add DevOps use cases, tools, cloud proof, and boundaries around SLA claims | `seo-audit/PAGE-KEYWORD-MAP.csv` |

## New Pages Recommended

| Priority | Recommended page | Purpose | Dependency | Relevant file |
|---|---|---|---|---|
| 1 | `/case-studies/` | Central proof library | Client permission and project outcomes | `digital-marketing-plan/BUSINESS-INFORMATION-REQUIRED.md` |
| 2 | `/case-studies/hishabi/` | Product proof for business software | Owner permission, screenshots, metrics | https://softzino.com/off-the-shelf-solutions/ |
| 3 | `/case-studies/bidyava/` | Product proof for education or platform work | Owner permission, screenshots, metrics | https://softzino.com/off-the-shelf-solutions/ |
| 4 | `/services/custom-software-development-cost/` or guide under insights | Capture cost-intent searches | Pricing policy and minimum project size | `seo-audit/KEYWORD-CLUSTERS.csv` |
| 5 | `/services/dedicated-development-team-cost/` or guide under insights | Capture team-cost searches | Rate ranges and model approval | `seo-audit/KEYWORD-CLUSTERS.csv` |
| 6 | `/industries/saas-software-development/` | Target SaaS ICP | Case studies and service fit | `seo-audit/KEYWORD-CLUSTERS.csv` |
| 7 | `/industries/ecommerce-software-development/` | Support ERP, web app, and retail proof | Product proof and client examples | https://softzino.com/off-the-shelf-solutions/ |
| 8 | `/compare/dedicated-team-vs-staff-augmentation/` | Reduce keyword cannibalization and educate buyers | Clear definitions and sales model | `seo-audit/TECHNICAL-SEO-AUDIT.md` |

## Pages That May Compete For The Same Keywords

| Keyword theme | Potential competing pages | Recommended decision | Relevant file |
|---|---|---|---|
| Dedicated development team | `/services/dedicated-development-team/`, `/services/team-extension/`, `/services/staff-augmentation/`, `/hire-developers/` | Give each page a distinct intent and internal-link hierarchy | `seo-audit/TECHNICAL-SEO-AUDIT.md` |
| Web services and API work | `/services/web-application-development/`, `/services/web-service-development/`, `/services/api-development/`, `/solutions/custom-software-solutions/` | Make custom software the parent and define APIs as supporting service | `seo-audit/PAGE-KEYWORD-MAP.csv` |
| UI/UX and experience | `/services/ui-ux-design/`, `/services/experience-design/`, `/services/product-management/` | Separate design execution, experience strategy, and product ownership | `lib/services-data.ts` |
| AI and data | `/services/artificial-intelligence/`, `/services/forward-deployed-ai-engineering/`, `/services/data-platform-engineering/`, `/services/reporting-business-intelligence/` | Avoid AI claims until proof is available; map data pages by business use case | `seo-audit/TECHNICAL-SEO-AUDIT.md` |
| Cloud and DevOps | `/services/cloud-consulting/`, `/services/cloud-migration/`, `/services/cloud-managed-services/`, `/services/devops/` | Define consulting, migration, managed service, and DevOps as separate buyer intents | `lib/services-data.ts` |

## Content That Should Wait

| Content idea | Why it should wait | Relevant file |
|---|---|---|
| Country pages for USA, UK, Canada, Australia, Europe | Office and market claims need verification | `seo-audit/SEO-DATA-REQUIRED.md` |
| Industry pages for healthcare or regulated sectors | Compliance and client proof need verification | `digital-marketing-plan/BUSINESS-INFORMATION-REQUIRED.md` |
| Large AI campaign | AI delivery proof, case studies, and capability boundaries need confirmation | https://softzino.com/services/artificial-intelligence/ |
| Broad blog production across all services | Would dilute resources before Tier 1 pages are fixed | `lib/services-data.ts` |

## Editorial Rules

| Rule | Reason | Relevant file |
|---|---|---|
| Every service page needs one clear target keyword and one clear buyer intent | Prevents cannibalization | `seo-audit/PAGE-KEYWORD-MAP.csv` |
| Every proof claim needs a source | Prevents trust problems | `digital-marketing-plan/BUSINESS-INFORMATION-REQUIRED.md` |
| Every article should link to a revenue page | Keeps content connected to pipeline | `digital-marketing-plan/CONTENT-CALENDAR.csv` |
| Every campaign page should have a conversion event | Enables reporting | `digital-marketing-plan/MEASUREMENT-AND-ATTRIBUTION.md` |

