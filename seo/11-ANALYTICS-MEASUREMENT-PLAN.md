# Analytics and Measurement Plan

Date: 2026-09-09

Purpose: make organic search performance measurable from search impression to qualified lead. Use shared facts in `01-BUSINESS-FACTS.md`; do not send campaign traffic until lead routing and event validation are complete.

## Required Tools

| Tool | Purpose | Status |
|---|---|---|
| Google Search Console | Query, page, country, indexing, sitemap submission | Verification Required |
| GA4 | Sessions, landing pages, events, conversions | Verification Required |
| Google Tag Manager | Event rules and marketing tags | Verification Required |
| CRM or lead database | Lead quality, service interest, sales stage, revenue attribution | Verification Required |
| Consent management | Region-appropriate consent behavior | Verification Required |
| Dashboard | Weekly SEO and lead reporting | Verification Required |

## Event Specification

| Event Name | Trigger | Parameters | Destination | Validation Method |
|---|---|---|---|---|
| `cta_click` | User clicks a primary or secondary CTA | `page_path`, `cta_text`, `cta_location`, `destination_url`, `service`, `journey_stage` | GA4 event; CRM attribution if session later converts | GTM Preview, GA4 DebugView, click test on priority pages |
| `form_start` | User focuses or changes the first meaningful lead-form field | `page_path`, `form_name`, `service`, `form_location`, `landing_page`, `referrer` | GA4 event | Test once per form variant; confirm no duplicate event fires |
| `form_submit_success` | Backend, CRM, API, webhook, or approved email workflow confirms receipt | `page_path`, `form_name`, `service`, `lead_type`, `country`, `submission_id`, `landing_page`, `utm_source`, `utm_medium`, `utm_campaign` | GA4 conversion event; CRM lead record | Submit test lead; confirm receiving system record and GA4 event timestamp |
| `form_submit_error` | Form validation, network, backend, CRM, API, webhook, or email workflow fails | `page_path`, `form_name`, `service`, `error_type`, `error_message_group` | GA4 event; error log if available | Force validation and backend failure tests; confirm success event does not fire |
| `email_click` | User clicks a `mailto:` link | `page_path`, `email_location`, `email_label`, `service` | GA4 event | GTM Preview and GA4 DebugView |
| `phone_click` | User clicks a `tel:` link | `page_path`, `phone_location`, `phone_label`, `service` | GA4 event | Mobile and desktop click test; GA4 DebugView |
| `calendar_click` | User clicks a booking/calendar link | `page_path`, `calendar_location`, `calendar_provider`, `service`, `destination_url` | GA4 event; calendar source tracking where supported | Click test through to booking page; confirm outbound destination |

## CRM Fields

| Field | Purpose | Status |
|---|---|---|
| Lead source | Organic, paid, referral, direct, LinkedIn, email | Verification Required |
| Lead medium | SEO, paid search, organic social, referral, campaign | Verification Required |
| Landing page | First page that generated the session | Verification Required |
| Conversion page | Page where form or CTA occurred | Verification Required |
| Service interest | Custom software, hire developers, web, mobile, QA, cloud, AI, data, DevOps, integration | Verification Required |
| Country or market | Validate target-market quality | Verification Required |
| Campaign fields | Store UTM source, medium, campaign, content, term | Verification Required |
| Lead status | New, contacted, qualified, proposal, won, lost | Verification Required |
| Opportunity value | Pipeline reporting where available | Verification Required |
| Close reason | Improve targeting and content | Verification Required |

## Validation Checklist

| Check | Owner | Status |
|---|---|---|
| Confirm production domain in GA4 and GSC | Marketing/Developer | Verification Required |
| Confirm no preview/staging traffic pollutes production reporting | Developer | Verification Required |
| Confirm consent behavior for target markets | Marketing/Legal | Verification Required |
| Confirm `form_submit_success` fires only after receiving-system success | Developer | Verification Required |
| Confirm `form_submit_error` captures failure without exposing private data | Developer | Verification Required |
| Confirm CRM stores landing page, referrer, UTM, service interest, and country | Sales/Developer | Verification Required |
| Confirm weekly dashboard includes GSC, GA4, and CRM lead quality | Marketing | Verification Required |

## Launch Rule

Do not start paid campaigns or active SEO promotion until lead routing, conversion events, GSC, sitemap submission, consent behavior, and sales ownership are verified.
