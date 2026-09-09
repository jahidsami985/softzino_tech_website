# Technical SEO Specification

Date: 2026-09-08

Purpose: define the technical SEO work needed before final production SEO launch.

## Inputs Required First

- Confirm production domain.
- Confirm whether Vercel preview URLs should be noindexed or left private.
- Confirm which utility pages should be indexable.
- Confirm official organization facts and office addresses.
- Confirm analytics and Search Console access.

## Required Implementation

### 1. Sitewide Metadata Base

Add `metadataBase` in root metadata after confirming the production domain.

Expected result:

- Absolute canonical URLs work correctly.
- Open Graph images resolve to full URLs.
- Metadata is consistent across environments.

### 2. Canonical URLs

Add self-referential canonicals for indexable pages.

Rules:

- Use one canonical production domain.
- Do not canonicalize production pages to Vercel preview URLs.
- Avoid trailing slash inconsistency.
- Utility pages can be noindexed if owner approves.

### 3. Sitemap

Add `app/sitemap.ts` or `public/sitemap.xml`.

Include:

- Homepage.
- About.
- Services hub.
- Priority service pages.
- Custom Software Solutions page.
- Off-the-Shelf Solutions page if owner wants it indexed.

Exclude:

- Preview-only pages.
- Internal QA pages.
- Unapproved country pages.
- Noindex utility pages.

### 4. Robots

Add `app/robots.ts` or `public/robots.txt`.

Rules:

- Allow public pages.
- Reference the production sitemap.
- Do not use robots.txt as a replacement for noindex.

### 5. Open Graph and Twitter Metadata

Add sitewide defaults:

- Site name.
- Default title template.
- Default description.
- Default social image.
- Twitter card type.

Add page-specific metadata for Tier 1 pages.

### 6. Structured Data

Add schema only when facts are approved and content is visible.

Required:

- Organization.
- WebSite.
- BreadcrumbList on inner pages.
- Service schema on service pages.
- FAQPage only when FAQ content is visible.

Avoid:

- Fake reviews.
- Fake ratings.
- Unverified pricing.
- Unverified local office schema.
- Unsupported awards or certifications.

### 7. Noindex Rules

Consider noindex for:

- Cookie notice.
- Privacy notice, if legal discoverability is not required.
- Terms and conditions, if legal discoverability is not required.
- Press kit, if not intended for search.

Keep indexable if business wants these pages discoverable for trust.

### 8. Image SEO and Performance

- Compress large PNG/JPEG assets.
- Use descriptive alt text where images add meaning.
- Leave decorative images with empty alt or aria-hidden when appropriate.
- Use WebP or AVIF for major hero images where possible.
- Check LCP on homepage and priority service pages.

### 9. Lead and Conversion Tracking

Technical SEO is not complete until lead capture works.

Required:

- Real form submission endpoint.
- Success and error logging.
- Spam protection.
- CRM or inbox delivery.
- GA4/GTM conversion events.

## Acceptance Criteria

- `/robots.txt` returns 200 on production.
- `/sitemap.xml` returns 200 on production.
- Sitemap contains only approved canonical URLs.
- Priority pages have title, description, canonical, OG, and Twitter tags.
- Structured data validates without critical errors.
- No page canonical points to Vercel preview domain.
- Lead form sends a real lead and records source data.
- Google Search Console property is verified and sitemap submitted.

