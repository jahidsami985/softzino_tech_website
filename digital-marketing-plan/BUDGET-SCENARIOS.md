# Budget Scenarios

Date: September 7, 2026

Scope: Planning only. These are directional planning ranges, not approved budgets, forecasts, or guarantees.

## Budget Principles

| Principle | Reason | Relevant file |
|---|---|---|
| Fix tracking before scaling spend | Paid traffic without attribution can waste budget | `digital-marketing-plan/MEASUREMENT-AND-ATTRIBUTION.md` |
| Spend first on revenue pages and proof | Buyers need trust before they convert | `digital-marketing-plan/CONTENT-STRATEGY.md` |
| Keep campaigns narrow | Too many services will dilute performance | `lib/services-data.ts` |
| Review cost per qualified lead weekly | Lead quality matters more than form count | `digital-marketing-plan/KPI-SCORECARD.csv` |

## Monthly Budget Options

| Scenario | Best for | Monthly non-media budget | Monthly paid media | What it funds | Relevant file |
|---|---|---:|---:|---|---|
| Lean | Proving the foundation | USD 3,000 to 7,000 | USD 0 to 1,500 | Technical SEO, analytics setup, 2 to 4 content pieces, proof gathering, light LinkedIn | `digital-marketing-plan/90-DAY-ROADMAP.md` |
| Growth | Building consistent inbound | USD 8,000 to 20,000 | USD 3,000 to 10,000 | Service-page optimization, case studies, SEO content, LinkedIn, retargeting, exact-match search tests | `digital-marketing-plan/CAMPAIGN-PLAN.csv` |
| Scale | Expanding proven channels | USD 25,000 to 60,000 | USD 15,000 to 40,000 | Broader paid search, content clusters, directory growth, partner marketing, deeper reporting | `digital-marketing-plan/12-MONTH-ROADMAP.md` |

## Recommended Starting Budget

Recommended start: Lean to low Growth for the first 90 days.

Reason: Softzino needs measurement, proof, and page quality before larger media spend. A large paid campaign should wait until lead routing and qualification reporting work.

Relevant files: `components/TalentRequestForm.tsx`, `seo-audit/TECHNICAL-SEO-AUDIT.md`, `digital-marketing-plan/MEASUREMENT-AND-ATTRIBUTION.md`.

## Budget Allocation By Phase

| Phase | Allocation focus | Approximate split | Relevant file |
|---|---|---|---|
| Days 1 to 30 | Verification, analytics, technical SEO, lead routing | 50 percent foundation, 30 percent content/proof, 20 percent management | `digital-marketing-plan/90-DAY-ROADMAP.md` |
| Days 31 to 60 | Tier 1 page optimization and first proof assets | 40 percent content/proof, 30 percent SEO, 20 percent conversion, 10 percent light media | `digital-marketing-plan/CONTENT-STRATEGY.md` |
| Days 61 to 90 | Campaign tests and reporting | 30 percent media tests, 30 percent SEO/content, 25 percent conversion, 15 percent reporting | `digital-marketing-plan/CAMPAIGN-PLAN.csv` |

## Paid Media Guardrails

| Rule | Why | Relevant file |
|---|---|---|
| Start with brand, retargeting, and exact-match high-intent keywords | Reduces waste | `seo-audit/KEYWORD-CLUSTERS.csv` |
| Exclude broad job-seeker traffic | Hire Developers pages can attract job seekers if match types are too broad | https://softzino.com/hire-developers/ |
| Do not bid on local office terms without verified presence | Prevents misleading market claims | `seo-audit/SEO-DATA-REQUIRED.md` |
| Pause campaigns if leads do not reach CRM | Protects budget | `components/TalentRequestForm.tsx` |
| Scale only when qualified-lead cost and sales follow-up are visible | Protects pipeline quality | `digital-marketing-plan/KPI-SCORECARD.csv` |

## Tool Budget To Confirm

| Tool category | Examples | Business decision needed | Relevant file |
|---|---|---|---|
| Analytics | GA4, GTM, GSC | Required | `digital-marketing-plan/MEASUREMENT-AND-ATTRIBUTION.md` |
| SEO data | Ahrefs, Semrush, Moz, Google Keyword Planner | Choose one primary paid source plus GSC | `seo-audit/SEO-DATA-REQUIRED.md` |
| CRM | HubSpot, Pipedrive, Zoho, Airtable, Notion CRM | Choose the system of record for leads | `components/TalentRequestForm.tsx` |
| Scheduling | Calendly, HubSpot Meetings, Google Calendar route | Decide whether leads book calls directly | https://softzino.com/solutions/custom-software-solutions/ |
| Heatmaps | Microsoft Clarity, Hotjar | Useful after traffic grows | `digital-marketing-plan/CONVERSION-STRATEGY.md` |

