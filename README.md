# Softzino Technologies — Frontend

Next.js 14 (App Router) + TypeScript + Tailwind CSS build of the Softzino Technologies
marketing site, based on the provided Figma screens and exported CSS specs.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Pages built (Phase 1)

- `/` — Homepage
- `/hire-developers` — Talent augmentation hero, engagement models, process, lead form
- `/off-the-shelf-solutions` — Product bento grid (ERP, Aura CRM, HRMS, Zenith)
- `/services` — Single listing page; the header's Services mega-menu links here via anchors
- `/about` — Company mission, awards, partnerships, certifications, schedule-a-call

## Notable implementation choices

- **Design tokens**: colors, radii, and shadows extracted from the Figma CSS are defined
  in `tailwind.config.ts` (e.g. `navy-deep`, `teal-primary`, `teal-secondary`, `gold`,
  `bg-cream`, `bg-offwhite`, `bg-warm-gray`, `bg-card-gray`).
- **Fonts**: Inter (body/headings) and JetBrains Mono (eyebrows/labels/mono UI text),
  loaded via `next/font/google` in `app/layout.tsx`.
- **Icons**: [lucide-react](https://lucide.dev) throughout, standing in for the generic
  colored icon placeholders in the Figma file.
- **Images**: product screenshots and illustrations use `components/PlaceholderMedia.tsx`
  (a gradient + dot-grid block) since no real image assets were provided. Swap these out
  with real screenshots/photography when available.
- **Lead form**: `components/TalentRequestForm.tsx` is a client component with a **mocked**
  submission handler (`mockSubmitLead`) that simulates a network call and randomly fails
  ~5% of the time so the error state is reachable. Replace `mockSubmitLead` with a real
  `fetch()` call to your API / HubSpot / email service when ready — the form fields and
  payload shape are already wired up.
- **Services mega-menu**: `lib/services-data.ts` is the single source of truth for the
  6 service categories and their sub-items, shared by the header mega-menu and the
  `/services` listing page so they never drift out of sync.
- **Routes not yet built**: individual service/product detail pages, Contact Us as a
  standalone page, and legal pages (Privacy Notice, Terms, Cookie Notice, Press Kit,
  Imprint) are linked from the footer as placeholder routes but have no page content yet.

## Still TODO for a production launch

- Wire `TalentRequestForm` to a real backend/CRM endpoint
- Replace `PlaceholderMedia` blocks with real product screenshots/illustrations
- Build out individual service detail pages and product detail pages
- Build legal/policy pages linked from the footer
- Add real social links in `components/Footer.tsx`
- Confirm final brand font choice if Inter/JetBrains Mono are placeholders vs. final
