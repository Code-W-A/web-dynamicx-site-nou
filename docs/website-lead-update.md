# Website lead landing update — 2026-09-28

Local implementation for `/leads/creare-site-web`. No deployment, real inquiry, production analytics request or Ads/GTM account change.

## Changes and files

- `src/app/(site)/leads/creare-site-web/_components/content.ts`: exact approved hero copy, included benefits and package subtitles. Existing prices, page limits, features and timelines retained.
- `src/app/(site)/leads/creare-site-web/_components/studio-site-example.tsx`: one Studio case study, three authentic views, discreet external link and package disclaimer.
- `src/app/(site)/leads/_components/web-commerce-lead-flow.tsx`: website-specific hero/project/pricing branches; website mobile sticky bar omitted. Commerce content retained.
- `src/components/Leads/lead-pages.css`: all new styles scoped to `[data-kind="site"]`; commercial notes at least 14 px.
- `src/components/Leads/chrome.tsx`: website navigation label only.
- `src/components/Leads/form.tsx`: approved form copy, visible changeable/removable package selection, original description in the website request, confirmed success only.
- `src/components/Leads/interactions.tsx` and `events.ts`: separate Studio project click, static metadata only.
- `src/components/Leads/web-site-confirmation.ts`: session marker without PII, written only after accepted API response and consumed once. Storage failure suppresses measurement without blocking confirmation.
- `src/app/(site)/multumim-site-web/page.tsx` and `_components/thank-you-page-view.tsx`: exact success message and single-use conversion.
- `src/app/api/contact/route.ts`: stronger server validation for `lead-web-site` only. New `description` string is required for this source; the existing `message` remains the email summary. Other callers retain their original contract.
- `scripts/test-web-site-contact.cjs`: actual route exercised with a mocked email transport; no SMTP connection.

The route metadata, middleware protection, sitemap, contact details, dependencies and global analytics loader were not changed.

## Screenshot provenance

Captured from the public Studio website on 2026-09-28 with optional cookies rejected. Screenshots include website UI, are not generated, and preserve the whole captured viewport. Converted to WebP at quality 85 using the existing Sharp dependency.

| Local asset under `public/images/leads/` | Source | Viewport | Size |
| --- | --- | --- | --- |
| `studio-design.webp` | https://www.studiobycristian.com/design | 1440 × 1000 | 119,038 bytes |
| `studio-satkara.webp` | https://www.studiobycristian.com/satkara-restaurant-turn-key-renovation | 1440 × 1000 | 80,448 bytes |
| `studio-design-mobile.webp` | https://www.studiobycristian.com/design | 390 × 844 | 35,486 bytes |

Hero continues to use `studio-by-cristian.webp`, the existing 1440 × 1000 homepage capture documented in `leads-conversion-redesign.md`. The new screenshots are lazy-loaded via Next Image; only the hero has priority.

## Measurement contract

This update supersedes the website-flow measurement notes in `leads-conversion-redesign.md`; commerce behavior is unchanged.

For `lead-web-site`, the only submission conversion emitted is `site_web_thank_you_page_view`, after API acceptance and navigation to the cookie-protected confirmation. `generate_lead` and `lead_web_site_form_submit` are no longer emitted for this source. Refresh/revisit without a fresh successful submission does not convert again. A fresh submission creates a new marker.

CTA, form start, validation/request errors, phone/email/WhatsApp and `project_click` remain distinct interactions. No entered form values, selectedProject query content, query strings or URL hashes are included in the website lead events. Session storage contains only a boolean-style marker, not contact data.

A browser-side marker is deduplication, not an anti-fraud mechanism or server idempotency key. Global GTM/Ads mapping must still be checked separately: code cannot establish whether a container also converts based on page URLs or another trigger. Storage unavailable means the request succeeds but this conversion is not measured.

## Outstanding confirmations

- TVA treatment and domain inclusion/renewal are not confirmed in the landing configuration.
- Existing copy confirms design/content and content administration; exact quantities, licensing and responsibilities for texts/images are not established here.
- Hosting is included for 12 months. Subsequent hosting and recurring maintenance amounts are unspecified and must be agreed in the offer. Initial package support remains distinct.
- No implemented CAPTCHA, honeypot or rate limiting was found in this contact flow. Marketing descriptions elsewhere are not evidence of actual protection. No new anti-spam service was introduced.
- The form's personal-data agreement and privacy link remain. No analytics consent manager was identifiable in the inspected code; external GTM/CMP behavior was not verified or changed.

## Verification

- `npm run lint`: passed, no ESLint warnings/errors. Next reports the existing `next lint` deprecation.
- `./node_modules/.bin/tsc --noEmit`: passed.
- `npm run build`: passed, 82 pages generated. Existing Node local-storage and edge/static-generation warnings remain.
- `node --test scripts/test-web-site-contact.cjs`: 22/22 passed. Includes email/phone, malformed contacts, field limits, original-description validation, simulated SMTP failure, HTML escaping, confirmation cookies and commerce contract compatibility.
- Production build served locally on port 3100; initial rendering and errors checked with agent-browser. Automated Chrome/Playwright checks passed for both website and commerce routes at 390 × 900, 768 × 900 and 1440 × 900. Additional viewport screenshots reviewed at 390 × 844 and desktop/tablet sizes.
- All website images loaded; one form, three Studio detail views, no horizontal overflow, no website sticky bar, first-screen CTA visible. Canonical/noindex and header offsets verified. Package selection/change/removal and all offer anchors passed.
- Mocked HTTP 500, network failure and HTTP 200 with `{ok:false}` preserve input and do not convert. Email and phone submissions, no-package submission, double submit, retry and exact success copy passed.
- One conversion per successful request; none on CTA/error, confirmation refresh/revisit or missing session-storage access. Direct confirmation access without its cookie redirects to the landing. Phone/WhatsApp/project clicks emit distinct events. Captured analytics contain no form PII or query content.
- FAQ activation with Enter, form Tab order and visible focus passed. Commerce keeps its two projects, original request contract and original success events. No browser page errors recorded.
- Browser harness intercepted every `/api/contact` request and blocked every non-local network request. External link default navigation was prevented when checking event handlers. No browser test contacted a real recipient or analytics endpoint.
- `git diff --check`: passed.

Local browser evidence: `/tmp/wd-site-{390,768,1440}.png`, `/tmp/wd-shop-{390,768,1440}.png`, `/tmp/wd-hero-390.png`, `/tmp/wd-project-desktop.png`, `/tmp/wd-form-error.png`, `/tmp/wd-success.png`, `/tmp/wd-browser-results.json`. The temporary browser harness is `/tmp/wd-browser-check.cjs` and uses the already available Playwright installation and Chrome. These are local, temporary artifacts, not production evidence.
