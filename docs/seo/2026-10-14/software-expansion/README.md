# Software la comandă și digitalizare — 14 octombrie 2026

## Rezultat

- Pagina `/servicii/dezvoltare-software-la-comanda` este implementată local în template-ul existent, cu înscriere în Home, lista serviciilor și sitemap. Deține grupul comercial software la comandă / dezvoltare software / software personalizat.
- Aplicațiile web, portalurile, modulele CRM și managementul documentelor sunt utilizări explicate în aceeași ofertă, cu funcții și costuri stabilite după cerințe.
- Exemplele ITP White Label și Parcare White Label păstrează statutul demonstrativ. CTA-urile duc la contact și telefon. Pagina de site web trimite și către noul serviciu.
- StyleConnect păstrează URL-ul și capturile. Titlul, descrierile și conținutul explică programările, disponibilitatea și fișele clienților. Rezultatele nemăsurate sunt reformulate ca obiective sau comportamente; notificările rămân condiționate de configurare.
- Clusterul `software` și categoria `software-development` folosesc schema existentă. Arhiva nu este indexabilă până la trei articole publicate.
- Citirile publice Sanity folosesc explicit perspectiva `published`; drafturile sunt excluse din pagini, listări și sitemap. Studio și scripturile de editare păstrează accesul la drafturi.

## Drafturi salvate în Sanity

| Conținut | Document |
| --- | --- |
| [Digitalizarea afacerilor: cu ce procese începi?](digitalizarea-afacerilor-cu-ce-procese-incepi.md) | `drafts.seo-digitalizarea-afacerilor` |
| [Ce înseamnă CRM și când merită o soluție personalizată?](ce-inseamna-crm-si-cand-merita-o-solutie-personalizata.md) | `drafts.seo-ce-inseamna-crm` |
| [Revizia aplicație web vs aplicație mobilă](aplicatie-web-vs-aplicatie-mobila.md) | `drafts.b35b233c-8e55-4d80-a4ed-8826e3193484` |

Articolele noi au aproximativ 785 și 763 de cuvinte. Autorul este documentul existent Web Dynamicx. Imaginile sunt variante ale capturilor demonstrative ITP, cu texte alternative explicite: WebP 1440×810 și JPEG 1200×630. Varianta principală evită mărirea artificială a sursei de 1440×1000; fișierele locale sunt în `images/`.

Revizia comparației web–mobil păstrează autorul, imaginile, slugul, data publicării și clusterul mobil. Secțiunea nouă explică aplicațiile din browser, portalurile și procesele interne și trimite contextual către software la comandă. Documentul publicat a rămas neschimbat.

Nu s-au creat pagini comerciale separate pentru CRM, documente, aplicații web sau pontaj. Pontajul rămâne pentru etapa ulterioară. Nu s-au publicat articole și nu s-a făcut deploy.

## Backup și reluare

- `before-*.json` păstrează documentele recitite înaintea fiecărei pregătiri/salvări. Primul snapshot precedă modificările acestui lot.
- `prepared.json` păstrează documentele pregătite și reviziile sursă; `saved.json` conține documentele recitite după salvare.
- `validation.json` păstrează clasificările și numărul legăturilor către servicii, incluzând CTA-urile generate de renderer.
- `browser-checks.json` și `screenshots/` păstrează verificările și capturile desktop/mobil ale celor două pagini.
- Fișierele Markdown sunt copii lizibile ale drafturilor; JSON-ul păstrează și imaginile și structura Portable Text completă.

Din rădăcina proiectului:

```sh
node scripts/seo/save-software-drafts.cjs
node scripts/seo/save-software-drafts.cjs --write
```

Prima comandă pregătește și validează local după recitirea Sanity. A doua încarcă variantele imaginilor și salvează exclusiv drafturile într-o tranzacție atomică. Tokenul privat este citit din mediul local, fără afișare și fără includere în artefacte. Scriptul refuză coliziunile de slug și modificările concurente; draftul existent este actualizat cu `ifRevisionID`. Reluarea imediată a salvării a raportat `changes: 0`.

## Verificare

- TypeScript, lint și build reușite. Buildul de browser a rulat într-o copie izolată în `/tmp/webdynamicx-software-review`.
- Patru verificări de browser: noul serviciu și StyleConnect la 1440×1000 și 390×844. H1-uri unice, canonical-uri corecte, fără depășire orizontală sau erori JavaScript în sesiunea de verificare.
- Cele șase întrebări și răspunsuri ale serviciului coincid cu JSON-LD. Cele 12 destinații de servicii întâlnite răspund cu succes; CTA-urile folosesc contact și telefon.
- Home și `/servicii` conțin noul serviciu; sitemapul îl include.
- `/blog/topic/software` este `noindex` și absent din sitemap. Pragul funcției de indexare a fost verificat pentru 0, 1, 2 și 3 articole publicate.
- Cele două articole noi returnează 404 public și nu apar pe pagina serviciului sau în sitemap, deoarece sunt drafturi. Pagina publică web–mobil nu afișează secțiunea nouă din draft.
- Drafturile au fost recitite și comparate structural cu documentele pregătite. Validatorul de articol, metadatele, referințele imaginilor și Portable Text trec verificările. Sunt maximum două legături către același serviciu, incluzând blocurile automate.
- Review React: componente server fără hooks sau cereri client suplimentare; carduri cu chei stabile, imagini cu `sizes` și texte alternative, linkuri descriptive și structură de titluri.

Publicarea se face separat: întâi disponibilitatea noii pagini de serviciu prin deploy, apoi publicarea drafturilor care trimit către ea. După indexare, evoluția și posibilele suprapuneri se evaluează în Search Console pe relația căutare → URL; verificările locale nu confirmă clasări Google.
