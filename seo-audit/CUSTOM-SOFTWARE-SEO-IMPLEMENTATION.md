# Custom Software SEO Implementation

Date: 2026-09-05

Scope: Implement the approved SEO keyword cluster for the Custom Software Solutions page and directly related SEO/audit data. No commit, push, or deployment was performed.

## Page And Route Updated

Updated route:

- `/solutions/custom-software-solutions`

Route decision:

- The requested live URL was not present in the current frontend before implementation.
- No existing Custom Software Solutions page was found under another route.
- A new route was added at the requested live URL path.
- No redirect was implemented because no alternate existing route was found and no redirect system was already established in the project.

## Files Modified

Website files:

- `app/solutions/custom-software-solutions/page.tsx`
- `app/services/page.tsx`

Audit files:

- `seo-audit/KEYWORD-SEED-LIST.csv`
- `seo-audit/KEYWORD-CLUSTERS.csv`
- `seo-audit/PAGE-KEYWORD-MAP.csv`
- `seo-audit/CUSTOM-SOFTWARE-SEO-IMPLEMENTATION.md`

## Primary And Secondary Keyword Placement

Primary keyword:

- `custom software development company`

Placement:

- SEO title: `Custom Software Development Company | Softzino`
- H1: `Custom Software Development Company`
- Opening hero copy: used naturally in the first paragraph
- Body section: used in the custom software services and FAQ content
- Internal link anchor: added to `/services` as `custom software development company services`
- Meta description: describes custom software development and end-to-end delivery

Secondary keywords used naturally:

- `custom software development services`
- `custom software solutions company`
- `custom application development company`
- `enterprise custom software development`
- `custom software developers`
- `end-to-end custom software development`

USA keyword handling:

- The page targets the United States keyword cluster without calling Softzino USA-based.
- The page says Softzino supports companies in the United States and worldwide.
- This wording is based on existing site/audit evidence that Softzino serves clients across the USA.
- No US office, US address, local team, "best", or "top" claim was added.

## Metadata Implemented

Implemented on `/solutions/custom-software-solutions`:

- Title: `Custom Software Development Company | Softzino`
- Meta description: `Build secure, scalable software around your business requirements. Softzino provides end-to-end custom software development, testing, deployment and support.`
- Canonical: `https://softzino.com/solutions/custom-software-solutions`
- Open Graph title, description, URL, site name, type, and image
- Twitter summary large image metadata

No duplicate metadata system was created. The page uses the existing Next.js `export const metadata` pattern.

## Content Sections Improved

The new page includes:

1. Hero section with one H1, value proposition, and consultation CTA.
2. Custom Software Development Services.
3. Software Tailored to Business Requirements.
4. Custom Software Development Process.
5. Connected Engineering Services.
6. Relevant Industries.
7. Why Work With Softzino.
8. Case Studies and Product References.
9. Frequently Asked Questions.
10. Final CTA.

## Internal Links Added

Links from the Custom Software Solutions page:

- `/hire-developers#request-talent`
- `/services`
- `/services/web-application-development`
- `/services/mobile-app-development`
- `/services/ui-ux-design`
- `/services/quality-engineering`
- `/services/devops`
- `/services/system-integration`
- `/off-the-shelf-solutions`

Related link added from:

- `/services` to `/solutions/custom-software-solutions`

No links were added to missing `/contact`, `/case-studies`, `/industries`, or `/services/saas-development` routes.

## Structured Data Added

Added page-local JSON-LD:

- `Service`
- `BreadcrumbList`
- `FAQPage`

FAQPage schema was added because the FAQ content is visibly rendered on the page.

No fabricated ratings, reviews, prices, awards, certifications, locations, or client claims were added.

## Redirect Handling

- Requested URL: `/solutions/custom-software-solutions`
- Existing matching route before implementation: not found
- Existing alternate custom software route before implementation: not found
- Redirect implemented: no
- Redirect recommendation: if the old production site has a different legacy custom software URL, add a permanent 301 redirect from that legacy URL to `/solutions/custom-software-solutions` using the project's redirect system once that legacy URL is confirmed.

## Accessibility Checks

Checked:

- Exactly one H1 in rendered HTML.
- Logical H2/H3 hierarchy on the implemented page.
- CTA buttons use accessible link text.
- Hero image has meaningful alt text.
- Icons used decoratively include `aria-hidden` where appropriate.
- Internal link text is descriptive.
- No hidden SEO text was added.

## Validation Commands And Results

Commands run:

- `npm.cmd run lint`
  - Result: passed with no ESLint warnings or errors.
- `npx.cmd tsc --noEmit`
  - Result: passed.
- `npm.cmd run build`
  - Result: passed; route `/solutions/custom-software-solutions` generated successfully.
  - Note: Next/Webpack printed a cache warning: `Caching failed for pack: Error: Unable to snapshot resolve dependencies`. The build still completed successfully.

Local production verification:

- URL checked: `http://127.0.0.1:3001/solutions/custom-software-solutions`
- HTTP status: 200.
- H1 count: 1.
- Title output: `Custom Software Development Company | Softzino`.
- Meta description output: correct.
- Canonical output: `https://softzino.com/solutions/custom-software-solutions`.
- Open Graph title and URL output: correct.
- Twitter card output: `summary_large_image`.
- JSON-LD script count: 3.
- JSON-LD parse result: `Service`, `BreadcrumbList`, and `FAQPage` valid.
- Anchor internal link check: 16 anchors, 0 missing internal routes.
- Desktop screenshot: styled and visually stable.
- Mobile-breakpoint screenshot at 500px CSS width: styled and visually stable.

## Remaining Warnings

- The existing lead form destination still needs business/technical approval and a real backend or CRM integration. This was outside the page-only content/SEO scope.
- The page uses `/hire-developers#request-talent` as the contact destination because no `/contact` route exists in the project.
- The 390px raw Chrome screenshot command produced misleading cropping because Chrome used a wider CSS viewport than the screenshot image width. A 500px mobile-breakpoint screenshot was used for reliable styled layout validation.
- The new page references existing product evidence but does not include detailed case study pages because those routes do not exist and case study data was not provided.

## Business Information Still Requiring Verification

Before publishing or expanding this cluster further, verify:

1. Whether `100+ professionals` is current.
2. Whether Softzino should explicitly say it serves US businesses on this page.
3. Which US client/project proof can be used publicly.
4. Whether Hishabi, Bidyava, Autoofix, and ERP Systems can be described in more detail.
5. Whether screenshots, logos, metrics, and testimonials can be used on this page.
6. The final lead destination for consultation requests.
7. Whether a legacy production URL requires a 301 redirect into `/solutions/custom-software-solutions`.
8. Whether the production domain is definitively `https://softzino.com`.
