# SEO Launch QA Checklist

Date: 2026-09-08

Use this before final production release.

## Crawl and Indexing

- [ ] Production domain is confirmed.
- [ ] Vercel preview URLs are not used as canonicals.
- [ ] `/robots.txt` returns 200.
- [ ] `/sitemap.xml` returns 200.
- [ ] Sitemap contains only approved canonical URLs.
- [ ] Sitemap is submitted in Google Search Console.
- [ ] No unwanted pages are indexable.
- [ ] No priority page is blocked by robots.

## Metadata

- [ ] Every priority page has one SEO title.
- [ ] Every priority page has one meta description.
- [ ] Priority titles are unique.
- [ ] Priority meta descriptions are unique.
- [ ] Canonical tags are present on priority pages.
- [ ] Open Graph title, description, URL, image, and type are present.
- [ ] Twitter card metadata is present.

## Content

- [ ] Every priority page has exactly one H1.
- [ ] H2/H3 hierarchy is logical.
- [ ] Primary keyword appears naturally in title, H1, intro, and body.
- [ ] No hidden SEO text exists.
- [ ] No unverified office, client, award, pricing, or metric claims exist.
- [ ] CTAs are clear and working.
- [ ] Internal links follow `07-INTERNAL-LINK-MAP.csv`.

## Structured Data

- [ ] Organization schema validates.
- [ ] WebSite schema validates.
- [ ] Breadcrumb schema validates on inner pages.
- [ ] Service schema validates on service pages.
- [ ] FAQPage schema is used only when FAQs are visible.
- [ ] No fake review, rating, price, or local schema exists.

## Analytics and Leads

- [ ] GA4 is installed.
- [ ] GTM is installed, if used.
- [ ] GSC is verified.
- [ ] Lead form sends data to approved destination.
- [ ] Lead form success event fires only after real successful submission.
- [ ] Lead form error event fires on failure.
- [ ] Email and phone click events are tracked.
- [ ] CRM stores landing page, source, medium, campaign, and service interest.

## Performance

- [ ] Homepage Lighthouse check completed.
- [ ] Priority service page Lighthouse check completed.
- [ ] Large images are compressed.
- [ ] Hero image has acceptable LCP.
- [ ] Mobile layout has no overlapping text.
- [ ] Forms are usable on mobile.

## Final Signoff

| Item | Owner | Date | Status |
|---|---|---|---|
| Business facts approved |  |  |  |
| Technical SEO QA passed |  |  |  |
| Analytics QA passed |  |  |  |
| Lead routing QA passed |  |  |  |
| Production release approved |  |  |  |

