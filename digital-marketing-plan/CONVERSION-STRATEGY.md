# Conversion Strategy

Date: September 7, 2026

Scope: Planning only. Do not change forms, scripts, analytics, pages, or production systems from this document alone.

## Simple Conversion Diagnosis

Softzino has useful commercial pages, but the conversion system needs verification. The most serious risk is that the Hire Developers form appears to simulate submission rather than send a real lead to a CRM, inbox, or database. This must be fixed before paid campaigns or serious outbound traffic.

Relevant files: `components/TalentRequestForm.tsx`, https://softzino.com/hire-developers/.

## Primary Conversion Paths

| Path | Current role | Recommended improvement | Relevant URL or file |
|---|---|---|---|
| Hire Developers form | Main high-intent lead form | Connect to CRM/email, add event tracking, confirm thank-you behavior | https://softzino.com/hire-developers/ |
| Custom Software page CTA | Main custom software inquiry route | Add proof-led CTA and discovery form or booking route | https://softzino.com/solutions/custom-software-solutions/ |
| Contact details in footer | Secondary conversion path | Track mailto, phone clicks, and office-location engagement | `components/layout/Footer.tsx` |
| Service page CTAs | Service-specific conversion path | Standardize CTA copy by buyer intent | https://softzino.com/services/ |
| Case studies | Trust-to-lead path | Add "discuss a similar project" CTA after verified case studies exist | https://softzino.com/off-the-shelf-solutions/ |

## Recommended Lead Form Fields

| Field | Why it matters | Relevant URL or file |
|---|---|---|
| Name | Basic contact | https://softzino.com/hire-developers/ |
| Work email | Lead qualification and follow-up | https://softzino.com/hire-developers/ |
| Company | B2B qualification | https://softzino.com/hire-developers/ |
| Website | Helps sales understand company context | `components/TalentRequestForm.tsx` |
| Service needed | Routes lead to correct sales/service owner | `lib/services-data.ts` |
| Budget range | Prevents wasted sales time if approved by owner | `digital-marketing-plan/BUSINESS-INFORMATION-REQUIRED.md` |
| Timeline | Helps qualify urgency | https://softzino.com/hire-developers/ |
| Project details | Supports initial discovery | https://softzino.com/hire-developers/ |
| Consent checkbox | Needed for email follow-up compliance | `digital-marketing-plan/MEASUREMENT-AND-ATTRIBUTION.md` |

## Conversion Events To Track

| Event | Description | Relevant URL or file |
|---|---|---|
| `generate_lead` | Successful lead form submission | `components/TalentRequestForm.tsx` |
| `book_consultation` | Meeting booked or booking CTA clicked | https://softzino.com/solutions/custom-software-solutions/ |
| `click_email` | Visitor clicks email address | `components/layout/Footer.tsx` |
| `click_phone` | Visitor clicks phone number | `components/layout/Footer.tsx` |
| `request_developer` | Hire Developers intent action | https://softzino.com/hire-developers/ |
| `view_service_page` | Visitor views priority service page | https://softzino.com/services/ |
| `view_case_study` | Visitor views proof page after case studies are added | `digital-marketing-plan/CONTENT-STRATEGY.md` |

## Trust Elements Needed On Conversion Pages

| Element | Why it helps | Relevant URL or file |
|---|---|---|
| Verified office locations | Reduces buyer uncertainty | `components/layout/Footer.tsx` |
| Delivery process | Shows how work will start and be managed | https://softzino.com/solutions/custom-software-solutions/ |
| Case studies | Shows real delivery evidence | https://softzino.com/off-the-shelf-solutions/ |
| Testimonials | Supports credibility if usage permission is current | `components/home/TestimonialsSection.tsx` |
| Technology stack | Helps technical buyers qualify fit | https://softzino.com/hire-developers/ |
| Response time | Sets expectation after form submission | `digital-marketing-plan/BUSINESS-INFORMATION-REQUIRED.md` |

## Conversion Work Order

| Order | Work | Relevant URL or file |
|---|---|---|
| 1 | Confirm where every form submission goes | `components/TalentRequestForm.tsx` |
| 2 | Define lead owner and SLA for response time | `digital-marketing-plan/BUSINESS-INFORMATION-REQUIRED.md` |
| 3 | Add GA4/GTM events and test them | `digital-marketing-plan/MEASUREMENT-AND-ATTRIBUTION.md` |
| 4 | Improve CTA clarity on Tier 1 service pages | `seo-audit/PAGE-KEYWORD-MAP.csv` |
| 5 | Add proof sections only after owner verification | `digital-marketing-plan/BUSINESS-INFORMATION-REQUIRED.md` |
| 6 | Start paid or outbound tests only after tracking works | `digital-marketing-plan/BUDGET-SCENARIOS.md` |

