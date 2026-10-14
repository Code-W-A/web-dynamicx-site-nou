# Contracte Web Dynamicx

Sistemul folosește proiectul Firebase `webdynamicx-contracte`, aplicația web
`1:663224190369:web:b9e7c74a7136dbfeb5f7e0` și Firestore în `europe-west3`
(Frankfurt, UE). Authentication are activată metoda email/parolă.
Nu necesită Storage, Cloud Functions, facturare sau generare PDF.

## Utilizare

1. Deschide `/contracte/admin`. Administratorul inițial este `adrian@webdynamicx.ro`.
   Alege „Am uitat parola” pentru a primi instrucțiunile Firebase și a seta parola.
   Crearea contului nu a trimis email și nu a expus o parolă.
2. Salvează „Date prestator”, apoi creează un șablon cu textul contractului tău.
   Butoanele introduc câmpuri la cursor, de exemplu `{{client.name}}` și `{{price}}`.
   Editorul arată câmpurile neincluse și previzualizarea. Nu există text juridic implicit.
3. Creează o ciornă, completează condițiile, verifică documentul și desenează semnătura
   prestatorului. „Semnează și generează linkul” blochează conținutul și semnătura.
4. Copiază linkul și trimite-l manual clientului. Acesta completează datele, verifică
   documentul, acceptă explicit și semnează. Nu are nevoie de cont sau cod email.
5. Consultă starea și documentul din listă. CSV conține datele pentru Excel; JSON
   conține și documentul final, semnăturile, acceptarea și amprenta SHA-256.

Linkul original se afișează numai la generare. Baza stochează SHA-256 al tokenului.
Generarea unui link nou revocă linkul anterior; anularea revocă accesul clientului.
Linkurile nesemnate expiră după 30 de zile. Linkul contractului semnat permite
consultarea sa în continuare: trebuie tratat ca informație confidențială.
Contractele semnate nu pot fi modificate sau anulate prin acest MVP.
O semnătură desenată nu este prezentată drept semnătură electronică calificată.

## Configurare locală și acces server

Este necesar Node.js 22 sau mai nou (Firebase Admin SDK).

`.env.local` conține configurația Firebase și `GOOGLE_APPLICATION_CREDENTIALS`.
Politica Google interzice crearea cheilor private pentru conturi tehnice.
Accesul local folosește ADC cu impersonarea contului
`contracts-server@webdynamicx-contracte.iam.gserviceaccount.com` de către
`adrian@webdynamicx.ro`. Nu am relaxat politica și nu am creat chei private.
Contul tehnic are `roles/datastore.user` și `roles/firebaseauth.admin`.

`.contracts-credentials.local.json` conține acreditări OAuth locale sensibile,
este exclus din Git și are permisiuni `0600`, ca `.env.local`.
Nu copia acest fișier în browser, într-un build, în Git sau pe hosting.
Pentru hosting configurează Workload Identity Federation sau ADC nativ al
platformei pentru același cont tehnic. Configurarea producției și publicarea
site-ului sunt etape separate; nu s-au făcut în această implementare.
Pe o platformă care permite chei private, codul acceptă și configurația server
`CONTRACTS_FIREBASE_CLIENT_EMAIL` + `CONTRACTS_FIREBASE_PRIVATE_KEY`; acestea
nu trebuie prefixate cu `NEXT_PUBLIC_`.

Pornire cu Firebase real:

```sh
npm run dev
```

Autorizarea altui administrator este o operație controlată, din terminal:

```sh
npm run contracts:grant-admin -- administrator@example.com
```

Scriptul creează contul cu o parolă aleatorie necunoscută, dacă nu există, și
autorizează explicit UID-ul. Folosește resetarea parolei din pagina de autentificare.
Pentru retragerea accesului setează `contractAdmins/{uid}.active` la `false`.
Fiecare cerere admin verifică atât sesiunea, cât și acest document.

## Date și securitate

- Colecții: `contractSettings`, `contractAdmins`, `contractTemplates`, `contracts`,
  `contractLinks`, `contractEvents`. Timestamps sunt ISO UTC, afișate în Europe/Bucharest.
- Fiecare contract păstrează copia șablonului/versionării, prestatorul și condițiile.
  Modificarea șablonului sau setărilor nu modifică acea copie.
- Semnăturile sunt trasee normalizate, maximum 2.000 puncte. În Firestore fiecare
  traseu este un obiect `{ points: [...] }`, deoarece array-urile direct imbricate
  nu sunt suportate. API-ul și exportul JSON folosesc array-uri de trasee.
- Acceptarea, semnăturile, textul final, hashul și evenimentul sunt salvate tranzacțional.
  Repetarea exactă a semnării returnează rezultatul existent; alte date sunt respinse.
- Sesiune HttpOnly, SameSite strict, Secure în producție, maximum 5 zile; protecție
  same-origin pentru mutații și limită de 200 KB pentru request-uri.
- Regulile Firestore interzic orice acces direct client. API-ul serverului validează
  accesul și datele. Șabloanele sunt text simplu, fără HTML executabil.
- Rutele contractelor au layout separat, fără Analytics/GTM, noindex și no-store.
  Nu includem linkuri de contract în sitemap. Exportul CSV neutralizează formulele.
- MVP-ul listează și exportă toate contractele. Pentru volume mari vor fi necesare
  paginare și export în loturi.

## Verificări reproductibile

Terminal 1, emulatoare izolate de Firebase real:

```sh
FIREBASE_EMULATORS_PATH=/tmp/webdynamicx-firebase-emulators firebase emulators:start --only auth,firestore --project demo-contracte
```

Terminal 2, teste de integrare:

```sh
npm run test:contracts
node scripts/contracts/seed-browser.cjs
```

Terminal 3, server pentru browser; nu rula simultan un build în același `.next`:

```sh
NEXT_DIST_DIR=.next-contracts-test CONTRACTS_FIREBASE_PROJECT_ID=demo-contracte CONTRACTS_FIREBASE_API_KEY=demo-key FIRESTORE_EMULATOR_HOST=127.0.0.1:8088 FIREBASE_AUTH_EMULATOR_HOST=127.0.0.1:9098 npx next dev --port 3100
```

După pornire:

```sh
npm run test:contracts:browser
```

Testul browserului folosește Chrome local (`PLAYWRIGHT_CHANNEL=chrome` implicit),
un administrator fictiv și formularul clientului la 390×844. Verifică inclusiv
pierderea răspunsului după salvare, retry, exporturi, absența trackingului și
erorilor JavaScript. Capturile se salvează în directorul temporar al sistemului.

`scripts/contracts/test-live.cjs` este un test explicit pentru proiectul real:
creează și șterge propriile date fictive. Nu îl folosi când există deja setări
reale de prestator; testul refuză acest caz. Nu rulează în mod automat.

## Verificare efectuată la 14 octombrie 2026

- Build Next.js, TypeScript și lint pentru componentele/rutele noi: trecute.
- Firebase Emulator: 14 verificări trecute pentru autentificare, acces pe UID,
  versiuni, snapshot, semnare simultană/idempotentă, expirare, revocare și export.
- Chrome: flux complet admin → client 390×844 → contract semnat → exporturi;
  retry după răspuns pierdut, reîncărcare și absența trackingului/erorilor JS: trecute.
- Firebase real: autentificare, sesiune, salvare contract cu ambele semnături,
  text final/hash, retry, CSV și blocare acces direct: trecute. Datele fictive eliminate.
- Administrator real creat; parola trebuie aleasă de titular prin resetare.
- Site-ul nu a fost publicat; autentificarea serverului de producție rămâne de configurat.
