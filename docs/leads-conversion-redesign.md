# Web and e-commerce lead pages

Implemented 2026-09-25. Routes: `/leads/creare-site-web` and `/leads/creare-magazin-online`.

> Website-flow update (2026-09-28): see [website-lead-update.md](./website-lead-update.md). Its website copy, screenshots and single-conversion contract supersede the corresponding notes below. Commerce notes remain applicable.

## Editorial and implementation decisions

- Site: Studio by Cristian is the featured project. Store: D-Toate and Auto Detailing Parts only.
- First-screen starting prices remain 1,800 lei and 4,000 lei. Package prices remain 1,800/3,300/5,500 lei and 4,000/7,000/12,000 lei. Website package limits are consistently 4/8/16 pages.
- All prices are starting estimates, not guaranteed final quotes. Timelines are indicative. No unverified response-time or measured conversion claims.
- Subscription offer is a website FAQ only, with an optional project type. No presentation-site subscription offer on the store page.
- Shared server-rendered sections with small client components for selections, form, contact tracking and sticky CTA. Header/footer changes match exactly these two routes. Mobile-app and standard site navigation retain their existing branches.
- Existing `/api/contact`, source identifiers, success event names, thank-you pages and middleware cookies remain compatible.
- CTA anchors go directly to the form, including on mobile. The sticky CTA hides while the form intersects the viewport.

## Image provenance

- `public/images/leads/studio-by-cristian.webp`: actual 1440 × 1000 browser screenshot of https://www.studiobycristian.com/, captured 2026-09-25 after rejecting optional cookies; compressed to WebP. No generated UI. The homepage's renovation slide was visible at capture time.
- D-Toate and Auto Detailing Parts retain the existing portfolio captures and case-study data. External live sites were not transaction-tested.
- Captures preserve complete horizontal content rather than cropping website controls or headings.

## Research informing the hypotheses

- [Unbounce, professional-services conversion benchmarks](https://unbounce.com/conversion-benchmark-report/professional-services-conversion-rate/): readable copy and mobile usability. Aggregate associations are not a promised conversion lift for this site.
- [CXL, Should You Really Reduce Form Fields?](https://cxl.com/blog/reduce-form-fields/): field count alone does not determine form performance; clarify labels and what happens next.
- [NN/g, Contact Us Page Guidelines](https://www.nngroup.com/articles/contact-us-pages/): accessible contact methods and clarity about contacting a business.

## Events and success criteria

| Event | Meaning |
| --- | --- |
| `cta_click` | Form CTA; `placement` and optional predefined `package_name` |
| `lead_form_start` | First form change or submit attempt, once per mount |
| `lead_form_error` | Validation or request failure, without entered values |
| `contact_click` | Phone, email or WhatsApp action; not a submitted lead |
| `generate_lead` | API returned successful HTTP status and `{ ok: true }` |
| `lead_web_site_form_submit` / `lead_magazin_online_form_submit` | Retained legacy successful-submission events |

These events include a normalized page URL without query/hash, source and fixed UI identifiers. No form values or selectedProject query value are included. Existing thank-you page view events remain informational and do not re-emit `generate_lead`.

A GTM installation receives the events via dataLayer. A GA-only installation uses the existing direct GA helper instead. GTM/Google Ads configuration was not changed; receiving an event locally does not prove its production conversion mapping.

After deployment, compare valid inquiries and qualified leads per page/device/channel. Use accepted `generate_lead` form submissions as the form completion numerator, track phone/WhatsApp separately, and check lead quality with the person handling inquiries. Avoid declaring a winner from low volume or changes in traffic mix.

## Acceptance verification

- TypeScript, focused ESLint, production build and diff whitespace check.
- Both routes at 390, 768 and 1440 px: images load, one H1, canonical and noindex preserved, no horizontal overflow, pricing/project/form/FAQ sections inspected.
- Native FAQ keyboard interaction, input tab order, anchor offsets and mobile CTA visibility.
- Required fields, malformed contact, valid email and phone, focus on first invalid field.
- Package and selected-project preservation, optional company/project type/budget in request.
- Simulated 500 preserves input and permits retry; immediate double submission makes one request; simulated success reaches the correct cookie-protected thank-you page.
- One success conversion, none on failure or thank-you reload, form start once, distinct contact click events, no entered data in emitted events.
- All test submissions intercept `/api/contact` in the browser. No real email delivery, production lead, deployment or campaign change is included.

Verification completed locally against both the development server and the production build on 2026-09-25. Production build generated 82 pages; both redesigned routes have 116 kB first-load JS in the build report. TypeScript and focused ESLint passed. The final production-browser run passed all six route/viewport combinations and both form scenarios above. These are local checks, not production conversion or email-delivery proof.
