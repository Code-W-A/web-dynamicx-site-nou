# Automatizări AI — implementare locală

Pagina: /servicii/automatizari-ai. Alias: /automatizari-ai → 308.
Implementare verificată local pe build de producție; fără deployment.

## Livrat

- Cele 12 secțiuni din brief, cu workflow-uri UI, șase categorii de automatizări, șase industrii și opt întrebări FAQ.
- Design bazat pe culorile, fontul și layout-ul existente; CSS izolat, fără dependențe noi.
- Calculator per persoană, 52 săptămâni, lei/oră; nu estimează economii.
- Formular cu validare client/server și endpoint-ul existent, sursă service-ai-automation.
- Confirmare inline, păstrarea datelor la eroare, blocarea trimiterii duble și generate_lead numai după succes.
- Bară mobilă dedicată, ascunsă la completare sau când formularul este vizibil.
- ITP White Label prezentat ca unic studiu de caz în secțiunea de experiență software, cu statutul original de produs demonstrativ, date fictive și persistență locală.
- Integrare automată în meniul, listele de servicii, footer și sitemap generate din serviceData.
- Metadata cerută, canonical www, Service, BreadcrumbList și FAQPage reutilizate din ruta existentă.

## Verificări

- npm run lint: trecut, fără erori sau avertismente ESLint.
- npx tsc --noEmit: trecut.
- npm run build: trecut, 85 de pagini generate. Build final cu acces la Sanity după o încercare în care sandbox-ul a blocat DNS.
- git diff --check: trecut.
- node --test scripts/test-ai-automation-contact.cjs: 21/21 teste trecute.
- Testele handler-ului folosesc un transport email în memorie, inclusiv erori SMTP, HTML escaping, email/telefon, date invalide și compatibilitatea celor patru surse existente.
- Browser local la 360, 390, 768 și 1440 px: fără overflow orizontal. Capturi inspectate pentru hero, carduri, workflow și formular.
- Calculator: 5 ore × 2 persoane × 52 = 520 ore/an; × 50 lei = 26.000 lei/an. Verificate zero, câmp gol, valori negative și număr fracționar de persoane.
- Formular în browser: câmpuri goale, focus pe prima eroare, contact email, eroare de rețea, HTTP 500, succes și trimitere dublă. Fetch simulat pentru scenariile de eroare/succes; niciun test nu necesită livrare reală SMTP.
- Două submit-uri simultane: o singură cerere și un singur generate_lead; eveniment fără câmpurile personale ale formularului.
- FAQ deschis cu Enter; cele opt răspunsuri din JSON-LD coincid cu textele vizibile.
- 12 secțiuni, H1 unic, fără ID-uri duplicate, imagini de portofoliu încărcate.
- Anchor #ai-exemple lasă secțiunea vizibilă sub header; CTA mobil se ascunde la formular.
- HTTP 200 pentru pagina nouă, homepage, /servicii, creare-site-web, dezvoltare-aplicatii-mobile, imaginea OG și SVG. Studiul ITP White Label folosește ruta existentă /portofoliu-software/itp-white-label.
- Redirect 308 și sitemap verificate; aliasul scurt nu apare ca URL separat în sitemap.
- Homepage și serviciul creare-site-web verificate în browser după schimbări.

Build-ul păstrează avertismentele existente Next.js despre edge runtime, localstorage-file și deprecierea next lint. Nu s-a rulat un audit Lighthouse comparativ; nu se declară un scor de performanță sau o livrare reală de email verificată.

## Fișiere create

- src/app/(site)/servicii/automatizari-ai/content.tsx
- src/app/(site)/servicii/automatizari-ai/page.module.css
- src/app/(site)/servicii/automatizari-ai/data.ts
- src/app/(site)/servicii/automatizari-ai/calculator.tsx
- src/app/(site)/servicii/automatizari-ai/contact-form.tsx
- src/app/(site)/servicii/automatizari-ai/mobile-cta.tsx
- src/app/libs/aiAutomationContact.ts
- public/images/services/automatizari-ai.svg
- scripts/test-ai-automation-contact.cjs
- docs/automatizari-ai-implementation.md

## Fișiere modificate

- src/app/(site)/servicii/[slug]/page.tsx
- src/static-data/service.tsx
- src/app/api/contact/route.ts
- src/components/Common/SiteFloatingCtas.tsx
- next.config.mjs
