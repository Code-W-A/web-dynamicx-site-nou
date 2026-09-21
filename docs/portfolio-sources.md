# Portfolio expansion — sources and editorial boundaries

Reviewed on 2026-09-21. These are source notes for maintainers, not public page copy.

## New case studies

- Web: `/portofoliu/ainevoie-website`, `/portofoliu/coffeebuzz-website`, `/portofoliu/pntmm-cluj`, `/portofoliu/operio-website`, `/portofoliu/astroai`.
- Mobile: `/portofoliu-aplicatii-mobile/operio-tehnicieni`, `/portofoliu-aplicatii-mobile/otp-parking-rezervari`.
- Software: `/portofoliu-software/operio`, `/portofoliu-software/otp-parking`, `/portofoliu-software/fom`.
- New hub: `/portofoliu-software`.

## Screenshot provenance

All new assets are in `public/images/portofoliu/studii/`, encoded as WebP from browser screenshots or the public store screenshots. No generated UI images are used.

| Asset prefix | Source | Scope |
| --- | --- | --- |
| `ainevoie` | https://www.ai-nevoie.ro/ (Romanian presentation) | Public landing and feature presentation |
| `coffeebuzz` | https://coffebuz-website.vercel.app/ | Public landing, menu and explicitly demonstrative payment flow |
| `pntmm` | https://pntmm-web.vercel.app/ | Public website and editorial sections |
| `operio`, `operio-detail` | https://operioapp.ro/ | Public product presentation; illustrated job data is demonstrative |
| `astroai` | https://www.astro-ai.ro/ro | Public landing and explanation of the onboarding/agent flow |
| `operio-mobile-*` | https://play.google.com/store/apps/details?id=ro.operio.tech | First three public app screenshots; test company shown in the app |
| `parking-mobile-*` | https://play.google.com/store/apps/details?id=ro.otpparking.mobile | First three public app screenshots |
| `parking` | https://www.otp-parking.ro/ | Public entry into booking; does not attribute the entire WordPress website design to this project |
| `fom` | Local FOM checkout, `/dashboard`, with `NEXT_PUBLIC_E2E_TEST_MODE=true` | Real application UI with bundled mock data; Google API requests blocked in the capture browser |

## Evidence and exclusions

- Operio: Laravel/Livewire web application and Flutter technician application; store listing corroborates job lists, navigation, GPS check-in/out, photos and signatures. The case study does not claim an independently measured operational improvement or a from-scratch implementation of every module.
- OTP Parking: local `proiect-parcari` code contains booking, Stripe, Oblio, LPR and MultiPark modules. Public store listing corroborates mobile booking, tariff estimates, payment choices and account details. Inspecting code and public presentation is not an end-to-end production transaction test. The reservations subdomain redirected to admin login during review, so the public CTA uses the customer-facing website.
- FOM: local code contains work orders, contracts, equipment, offers, reports and team modules. Only the local mock dashboard was captured; no client production records are included. No public administration URL is exposed.
- AstroAI: public landing and local `COSMIC-AI` implementation support the description of agents, onboarding, conversations and subscription integration. No user conversations or billing data were accessed.
- CoffeeBuzz: local profile storage and demo flows are explicitly described. Publication on Google Play is not treated as evidence of processed commercial orders, live payments or reduced queues.
- AInevoie: existing case-study URL is preserved; description now covers local services. Android listing: https://play.google.com/store/apps/details?id=com.ainevoie.nrb. The external website still contains launch-list messaging; no external project files were edited.
- Alex Relax: the browser rendered the branded hotel, rooms and facilities. The external document title still reads `Riorelax - Luxury Hotel React Template`. Portfolio copy describes presentation only, not verified transactional booking; the accessible external link is retained.
- Promovare Digitală: domain lookup failed during review. The case study and slug remain; the external live link is removed and the entry marked archived.

## Local acceptance checks

Completed locally on 2026-09-21:

- Production build and TypeScript validation passed (80 generated pages).
- All 14 requested studies and 3 category pages passed HTTP, image loading, canonical, JSON-LD and horizontal-overflow checks at 1440px and 390px (34 page/viewport checks).
- 40 internal links returned HTTP 200; sitemap includes all reviewed routes; unknown case-study URLs returned 404; both new mobile Open Graph endpoints returned 200.
- Visual review found and corrected shrinking mobile gallery cards. All four affected mobile studies were rechecked at both widths after the final build.
- Contact CTAs open the existing contact form. No form was submitted.

Checklist:

- Build/type validation, responsive checks at 1440px and 390px for all 10 new and 4 updated studies plus all 3 hubs.
- Check image loading, one H1, canonical metadata, JSON-LD, sitemap membership, links across categories and contact CTAs.
- Unknown study slugs must return 404. New mobile Open Graph endpoints must return images.
- No deployment, real lead submission, payment or production data change is part of this update.
