# Measurement and Attribution

Date: September 7, 2026

Scope: Planning only. Do not install scripts, tags, pixels, CRMs, or production tracking until approved.

## Measurement Goal

Softzino needs to know which channels create qualified conversations, not just traffic. The first measurement goal is to connect website actions to sales outcomes.

## Required Tools

| Tool | Purpose | Setup status | Source or relevant file |
|---|---|---|---|
| Google Analytics 4 | Website events and conversion reporting | Required | https://support.google.com/analytics/answer/9267735 |
| Google Tag Manager | Controlled deployment of analytics and marketing tags | Required | `seo-audit/TECHNICAL-SEO-AUDIT.md` |
| Google Search Console | Search impressions, clicks, indexing, and keyword data | Required | https://support.google.com/webmasters/answer/7576553 |
| CRM or lead database | Track leads, qualification, pipeline, and revenue | Required | `components/TalentRequestForm.tsx` |
| UTM governance | Keep campaigns readable and comparable | Required | https://ga-dev-tools.google/campaign-url-builder/ |
| Rank and keyword tool | Track rankings, search volume, difficulty, CPC | Required | `seo-audit/SEO-DATA-REQUIRED.md` |
| Call and email click tracking | Attribute phone and email leads | Recommended | `components/layout/Footer.tsx` |

## Event Plan

| Event name | Trigger | Recommended parameter examples | Relevant URL or file |
|---|---|---|---|
| `generate_lead` | Form successfully submits to CRM or backend | service, page_path, lead_type, market | https://softzino.com/hire-developers/ |
| `request_developer` | Hire Developers form submit or CTA click | role, engagement_model, developer_count | https://softzino.com/hire-developers/ |
| `book_consultation` | Booking CTA click or calendar booking | service, page_path | https://softzino.com/solutions/custom-software-solutions/ |
| `click_email` | Email link click | location, page_path | `components/layout/Footer.tsx` |
| `click_phone` | Phone link click | location, page_path | `components/layout/Footer.tsx` |
| `view_case_study` | Case study page view | case_study, industry, service | `digital-marketing-plan/CONTENT-STRATEGY.md` |
| `download_asset` | Future guide or PDF download | asset_name, service, funnel_stage | `digital-marketing-plan/CONTENT-CALENDAR.csv` |

Google references: recommended events at https://support.google.com/analytics/answer/9267735 and custom events at https://support.google.com/analytics/answer/12229021.

## UTM Naming Rules

| Field | Rule | Example |
|---|---|---|
| `utm_source` | Platform or referring source | linkedin, google, clutch |
| `utm_medium` | Traffic type | organic_social, paid_search, referral, email |
| `utm_campaign` | Offer and period | custom_software_discovery_2026_q4 |
| `utm_content` | Creative or message variant | proof_case_study, cost_guide, founder_post |
| `utm_term` | Paid keyword where relevant | custom_software_development_company |

Use Google's campaign URL builder for QA: https://ga-dev-tools.google/campaign-url-builder/.

## CRM Attribution Fields

| CRM field | Why it matters | Relevant file |
|---|---|---|
| Lead source | Shows first touch source | `digital-marketing-plan/KPI-SCORECARD.csv` |
| Lead medium | Separates SEO, paid, referral, email, direct | `digital-marketing-plan/KPI-SCORECARD.csv` |
| Landing page | Shows which page generated demand | `seo-audit/PAGE-KEYWORD-MAP.csv` |
| Service interest | Routes and reports by service | `lib/services-data.ts` |
| Market or country | Helps validate first target market | `digital-marketing-plan/ICP-AND-BUYER-PERSONAS.md` |
| Lead status | Tracks qualification and follow-up | `digital-marketing-plan/KPI-SCORECARD.csv` |
| Opportunity value | Connects marketing to pipeline | `digital-marketing-plan/BUDGET-SCENARIOS.md` |
| Close reason | Improves messaging and targeting | `digital-marketing-plan/BUSINESS-INFORMATION-REQUIRED.md` |

## KPI Scorecard Rules

| Rule | Relevant file |
|---|---|
| Review marketing KPIs weekly for the first 90 days | `digital-marketing-plan/KPI-SCORECARD.csv` |
| Separate total leads from qualified leads | `digital-marketing-plan/KPI-SCORECARD.csv` |
| Track pipeline value by service, not just form count | `digital-marketing-plan/KPI-SCORECARD.csv` |
| Do not judge SEO by rankings alone | `seo-audit/SEO-DATA-REQUIRED.md` |
| Do not scale spend until cost per qualified lead is known | `digital-marketing-plan/BUDGET-SCENARIOS.md` |

## Keyword Metrics Still Missing

| Missing metric | Why it matters | Relevant file |
|---|---|---|
| Search volume by target country | Determines which services and markets are worth prioritizing | `seo-audit/KEYWORD-CLUSTERS.csv` |
| CPC | Estimates paid search cost and commercial intent | `seo-audit/SEO-DATA-REQUIRED.md` |
| Keyword difficulty | Helps choose realistic SEO targets | `seo-audit/SEO-DATA-REQUIRED.md` |
| Current ranking position | Shows which pages are already close to ranking | `seo-audit/SEO-DATA-REQUIRED.md` |
| Click-through rate | Shows title/meta and SERP performance | Google Search Console |
| Conversion rate by landing page | Shows which pages create leads | GA4 and CRM |
| Backlink profile by page | Shows authority gaps | `seo-audit/SEO-DATA-REQUIRED.md` |
| Competitor ranking pages | Shows what content format Google rewards | `digital-marketing-plan/COMPETITOR-ANALYSIS.md` |

