# Optimizare SEO — 14 octombrie 2026

Cele șapte pagini de servicii au fost optimizate local. Cele șapte revizii de articole sunt **salvate ca drafturi în Sanity**, folosind tokenul privat Editor configurat în `.env.local`. Recitirea confirmă că toate câmpurile drafturilor coincid cu reviziile pregătite și că reviziile articolelor publicate sunt neschimbate. Nu s-au publicat articole și nu s-a făcut deploy. Tentativa inițială cu tokenul Viewer a fost respinsă integral; tokenul Editor a rezolvat blocajul.

## Pagini optimizate

| Pagină | Intenție principală | Schimbări |
| --- | --- | --- |
| `/servicii/creare-magazin-online` | Creare magazin online, preț și ofertă | Catalog, livrabile, plăți/livrare, costuri separate și 6 FAQ; reperul de 1.200 EUR păstrat |
| `/servicii/creare-magazin-online-shopify` | Creare magazin online Shopify | Temă, catalog, aplicații, costuri separate și 6 FAQ; reperul de 900 EUR păstrat |
| `/servicii/dezvoltare-aplicatii-mobile` | Dezvoltare aplicații mobile iOS/Android | Estimare MVP, backend, livrabile și 8 FAQ; reperul de 1.500 EUR păstrat |
| `/servicii/creare-site-web` | Creare site web personalizat | Ofertă, structură/integrări, responsabilități și 4 FAQ; reperul de 600 EUR păstrat |
| `/servicii/creare-site-prezentare` | Creare site de prezentare | Pagini pentru firmă/servicii, livrabile și 5 FAQ; reperul de 800 EUR păstrat |
| `/servicii/web-design` | Servicii web design, UX/UI și redesign | Delimitarea designului de implementare și 4 FAQ; reperul de 500 EUR păstrat |
| `/servicii/mentenanta-website` | Mentenanță site și estimarea prețului | Întreținere recurentă, modificări punctuale, intervenții la cerere, responsabilități și 6 FAQ; ofertă după audit |

Prețurile și paginile de Ads nu au fost modificate. Nu s-au adăugat rute, scheme sau API-uri. Legăturile existente dintre serviciile complementare au fost păstrate și verificate.

## Revizii salvate și identificatori

Acești identificatori reprezintă drafturile salvate și recitite din Sanity.

| Revizie | ID draft |
| --- | --- |
| [Cost aplicație mobilă](cat-costa-dezvoltarea-unei-aplicatii-mobile.md) | `drafts.32e9f3ef-b259-4b24-a72e-4493d9966cb9` |
| [Durată aplicație mobilă](cat-dureaza-dezvoltarea-unei-aplicatii-mobile.md) | `drafts.3059954a-d559-493e-b308-1a9bf056affc` |
| [Etapele dezvoltării](etapele-dezvoltarii-unei-aplicatii-mobile.md) | `drafts.552dcb21-207a-4797-94e4-5cc0e952aae9` |
| [Aplicații pentru firme](de-ce-au-nevoie-firmele-de-aplicatii-mobile.md) | `drafts.a8f00de6-d5b4-46e0-89e1-3ba4ef5a2656` |
| [Web vs mobil](aplicatie-web-vs-aplicatie-mobila.md) | `drafts.b35b233c-8e55-4d80-a4ed-8826e3193484` |
| [Buget total website](cum-estimezi-costurile-unui-site-web.md) | `drafts.ac3137ae-c25c-4de7-9210-780596e9697f` |
| [Preț site de prezentare](cat-cost-un-site-de-prezentare-ghid-complet-pentru-2025.md) | `drafts.cccdab11-e738-42a5-91f3-8b4cdc90a610` |

Ghidul de cost mobil explică reperul MVP și cheltuielile recurente fără intervale de preț prezentate ca rezultate reale nesusținute. Celelalte patru articole mobile primesc legături contextuale către serviciu; metadatele prea lungi sunt scurtate unde este necesar.

Cele două articole web rămân distincte: bugetul total al unui website, respectiv prețul unui site de prezentare. Ambele folosesc `category: web-development` și `topicCluster: websites`. Titlul și conținutul despre 2025 sunt actualizate fără schimbarea slugului. Autorii, imaginile și datele publicării originale sunt păstrate. Pentru articolul vechi fără OG, revizia folosește referința imaginii principale și completează textele alternative lipsă, fără upload nou.

## Fișiere și salvare ulterioară

- `sanity-originals.json`: snapshotul documentelor originale, inclusiv reviziile, salvat înaintea tentativei de scriere.
- `sanity-before-save.json`: recitirea documentelor pentru verificarea fără scrieri a importatorului; confirmă că reviziile publicate sunt neschimbate și că drafturile propuse nu există.
- `sanity-prepared.json`: cele șapte documente draft în Portable Text, cu metadate și referințe păstrate.
- Fișierele Markdown: versiunile lizibile pentru revizuire; datele complete pentru import sunt în JSON.
- `save-drafts.cjs`: import exclusiv în drafturi. Necesită un token privat `SANITY_API_WRITE_TOKEN` sau `SANITY_API_TOKEN` cu permisiune de creare drafturi. Tokenul nu se adaugă în fișierele versionate și nu folosește prefixul `NEXT_PUBLIC_`.

Din rădăcina proiectului, după configurarea tokenului privat:

```sh
node docs/seo/2026-10-14/save-drafts.cjs
node docs/seo/2026-10-14/save-drafts.cjs --write
```

Prima comandă verifică reviziile și salvează local un snapshot proaspăt, fără scrieri în Sanity. A doua salvează atomic drafturile. Pentru drafturile deja identice, reluarea nu produce alte scrieri. Scriptul refuză un articol publicat modificat sau un draft diferit apărut între timp; pentru drafturi existente folosește `ifRevisionID`. Nu modifică documentele publicate. Dacă sursa s-a schimbat, conținutul pregătit trebuie revizuit înainte de import.

`sanity-saved.json` conține snapshotul celor șapte drafturi recitite după salvare. Verificarea compară structural câmpurile, independent de ordinea proprietăților JSON.

## Verificări

- TypeScript, lint și build reușite. Browserul a folosit un build izolat în `/tmp/webdynamicx-seo/preview`, pentru a evita interferența cu artefactele `.next` din workspace.
- 14 verificări de browser: 7 pagini la 1440×1000 și 390×844. Fiecare are un H1, titlu distinct, canonical corect și fără depășire orizontală.
- FAQ-urile randate coincid cu JSON-LD; toate cele 11 destinații de servicii întâlnite pe fiecare pagină răspund cu succes.
- Interacțiunea accordionului FAQ mobil verificată. Nicio eroare JavaScript raportată de sesiunea de browser.
- Toate cele trei pagini `/leads/` păstrează `noindex, nofollow` și canonical-urile existente.
- Cele 7 revizii pregătite trec validările de articol, lungimile metadatelor, structura Portable Text și păstrarea referințelor. Maximum două linkuri către același serviciu, incluzând CTA-urile generate de renderer.
- Scriptul de import a trecut verificarea de sintaxă și verificarea fără scrieri pentru toate cele șapte documente, folosind accesul de citire existent.
- Rezultatele celor 14 verificări sunt în `browser-checks.json`; capturile sunt în `/tmp/webdynamicx-seo/desktop-*.png` și `/tmp/webdynamicx-seo/mobile-*.png`.

Verificările nu demonstrează creșterea clasărilor sau absența canibalizării în Google. După publicare și deploy, evaluarea se face în Search Console pe relația căutare → URL. Conținutul live al articolelor rămâne cel original până la publicarea separată a drafturilor salvate.
