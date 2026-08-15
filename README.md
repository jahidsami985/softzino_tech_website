# Softzino Technologies - Frontend

Next.js 14 App Router + TypeScript + Tailwind CSS build of the Softzino Technologies
marketing site, based on the provided Figma screens and exported CSS specs.

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Pages Built

- `/` - Homepage
- `/hire-developers` - Talent augmentation hero, engagement models, process, lead form
- `/off-the-shelf-solutions` - Product bento grid for ERP, Aura CRM, HRMS, and Zenith
- `/services` - Services listing page shared with the header Services mega-menu
- `/services/...` - Individual service detail pages across Product Engineering, Digital Transformation, Cloud Engineering, Data Analytics, Co-Creation, and Consultancy
- `/about` - Company mission, awards, partnerships, certifications, and schedule-a-call CTA
- Utility pages for Privacy Notice, Terms, Cookie Notice, Press Kit, and Imprint

## Notable Implementation Choices

- **Design tokens**: colors, radii, and shadows extracted from the Figma CSS are defined
  in `tailwind.config.ts`.
- **Fonts**: local Inter and JetBrains Mono stacks are configured in `app/globals.css`
  so builds do not depend on remote font loading.
- **Icons**: `lucide-react` is used throughout for interface and service icons.
- **Images**: cropped page and service assets live in `public/images`, including
  batch-specific assets under `public/images/batch1`, `public/images/batch2`, and
  `public/images/batch3`.
- **Lead form**: `components/TalentRequestForm.tsx` is a client component with
  client-side submission feedback. Replace it with a real API, CRM, or email
  integration when ready.
- **Services mega-menu**: `lib/services-data.ts` is the source of truth for service
  categories, service names, and real service-detail routes.

## Known Production Follow-ups

- Wire `TalentRequestForm` to a real backend or CRM endpoint.
- Replace generated/cropped visuals with final approved brand photography where needed.
- Build product detail pages if the off-the-shelf products need individual routes.
- Add real social links in `components/Footer.tsx`.
- Confirm final brand font choice.
