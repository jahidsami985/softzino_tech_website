# Softzino Project Guide

This is a Next.js App Router project styled with Tailwind CSS.

## Main App Files

- `app/layout.tsx` wraps every page with the shared `Header` and `Footer`, and defines default SEO metadata.
- `app/globals.css` loads Tailwind, sets global fonts/colors, focus styles, and mobile overflow protection.
- `app/page.tsx` controls the homepage: hero, trust metrics, services, process, solutions preview, about preview, and CTAs.
- `app/about/page.tsx` controls the About page: mission hero, stats, awards, partners, compliance, and booking CTA.
- `app/off-the-shelf-solutions/page.tsx` controls the Solutions page: product hero, ERP/CRM/HRMS/Zenith cards, and consultation CTA.
- `app/hire-developers/page.tsx` controls the Hire Developers page: hero, engagement models, hiring process image, and request form.
- `app/services/page.tsx` controls the Services page: hero, full service listing, and custom-engagement CTA.
- `app/services/*/page.tsx` service-detail routes render individual services such as Mobile App Development, IoT & Wearable Solutions, Semiconductor Testing, and Skill Development.
- `app/privacy-notice`, `app/terms-and-conditions`, `app/cookie-notice`, `app/imprint`, and `app/press-kit` are lightweight utility pages linked from the footer.

## Shared Components

- `components/Header.tsx` renders the sticky navigation, desktop Services mega-menu, mobile menu, active link styles, and CTA button.
- `components/Footer.tsx` renders footer icons, office addresses, legal links, and copyright text.
- `components/Breadcrumb.tsx` renders the small `Home > Current Page` trail on secondary pages.
- `components/TalentRequestForm.tsx` renders the Hire Developers lead form and mocked submit flow.
- `components/ServiceDetailPage.tsx` renders the reusable service-detail layout used by the individual service pages.
- `components/InfoPage.tsx` renders the reusable layout for footer utility pages.
- `components/PlaceholderMedia.tsx` is a fallback visual block for future sections that do not have real images yet.

## Shared Data

- `lib/services-data.ts` is the source of truth for service categories and service names. It feeds both the Header mega-menu and the Services page.
- `lib/service-detail-data.tsx` stores the per-page content for the reusable service-detail pages.

## Styling And Assets

- `tailwind.config.ts` stores Figma-derived design tokens such as colors, fonts, border radius, max content width, and shadows.
- `public/images/*` stores the cropped image assets used by the pages.
- `qa-screenshots/*` stores local QA screenshots and logs from visual testing.

## Common Edits

- To edit homepage card copy, change the arrays near the top of `app/page.tsx`.
- To edit the Services mega-menu and Services page together, change `lib/services-data.ts`.
- To add a real detail page for a service, create a route under `app/services/...` and add its path to `getServiceHref()` in `lib/services-data.ts`.
- To edit the Hire Developers form fields, change helper usage inside `components/TalentRequestForm.tsx`.
- To update colors, spacing tokens, or shared shadows, change `tailwind.config.ts`.
