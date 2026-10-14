const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");
const assert = require("node:assert/strict");
const { isDeepStrictEqual } = require("node:util");
const Module = require("node:module");
const sharp = require("sharp");
const { createClient } = require("@sanity/client");
const articles = require("./software-article-content.cjs");
const root = path.resolve(__dirname, "../..");
const folder = path.join(root, "docs/seo/2026-10-14/software-expansion");
require("@next/env").loadEnvConfig(root, false, { info() {}, error() {} });
const token = process.env.SANITY_API_WRITE_TOKEN || process.env.SANITY_API_TOKEN;
if (!token) throw new Error("Lipsește tokenul privat de scriere Sanity.");
const client = createClient({ projectId: "tsi99x6a", dataset: "production", apiVersion: "2023-06-19", useCdn: false, perspective: "raw", token });
const write = process.argv.includes("--write");
const softwareHref = "/servicii/dezvoltare-software-la-comanda";
const existingSlug = "aplicatie-web-vs-aplicatie-mobila";

// Run the same validation and linking rules used by the site without importing Next's server runtime.
const ts = require("typescript");
const resolve = Module._resolveFilename;
Module._resolveFilename = function (id, ...args) { return resolve.call(this, id.startsWith("@/") ? path.join(root, "src", id.slice(2)) : id, ...args); };
require.extensions[".ts"] = (mod, file) => mod._compile(ts.transpileModule(fs.readFileSync(file, "utf8"), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText, file);
const { collectPostBlockingIssues } = require(path.join(root, "src/sanity/post-validation.ts"));
const { buildArticleInternalLinkingPlan } = require(path.join(root, "src/lib/blog-article-internal-links.ts"));
let sequence = 0;
function block(text, style = "normal", label, href) {
  const key = `software${++sequence}`;
  const result = { _type: "block", _key: key, style, markDefs: [], children: [{ _type: "span", _key: `${key}s`, text, marks: [] }] };
  if (label) {
    const index = text.indexOf(label);
    assert(index >= 0, "Anchor absent");
    result.markDefs = [{ _type: "link", _key: `${key}link`, href, blank: false }];
    result.children = [
      { _type: "span", _key: `${key}a`, text: text.slice(0, index), marks: [] },
      { _type: "span", _key: `${key}b`, text: label, marks: [`${key}link`] },
      { _type: "span", _key: `${key}c`, text: text.slice(index + label.length), marks: [] },
    ].filter((span) => span.text);
  }
  return result;
}
function image(ref, alt) { return { _type: "image", asset: { _type: "reference", _ref: ref }, alt }; }
function clean(document) { return Object.fromEntries(Object.entries(document).filter(([key]) => !["_rev", "_createdAt", "_updatedAt"].includes(key))); }
function hrefPath(href) { return href?.replace("https://www.webdynamicx.ro", "").split(/[?#]/)[0]; }
function validate(document) {
  assert.deepEqual(collectPostBlockingIssues(document), [], document.slug.current);
  assert(document.metaTitle.length <= 65);
  assert(document.metaDescription.length >= 70 && document.metaDescription.length <= 160);
  assert(document.excerpt.length >= 80 && document.excerpt.length <= 220);
  const keys = new Set();
  const counts = new Map();
  for (const b of document.body) {
    assert(b._key && !keys.has(b._key)); keys.add(b._key);
    if (b._type !== "block") continue;
    const defs = new Set(b.markDefs.map((def) => def._key));
    const childKeys = new Set();
    for (const child of b.children) {
      assert.equal(child._type, "span"); assert(typeof child.text === "string");
      assert(!childKeys.has(child._key)); childKeys.add(child._key);
      for (const mark of child.marks) assert(defs.has(mark) || ["strong", "em"].includes(mark));
    }
    for (const def of b.markDefs) {
      if (def._type === "link" && hrefPath(def.href)?.startsWith("/servicii/")) counts.set(hrefPath(def.href), (counts.get(hrefPath(def.href)) || 0) + 1);
    }
  }
  const plan = buildArticleInternalLinkingPlan(document, "https://www.webdynamicx.ro");
  assert(plan.cluster);
  const primary = plan.cluster.serviceHref;
  counts.set(primary, (counts.get(primary) || 0) + 1 + (plan.showAutoServiceBlock ? 1 : 0));
  for (const item of plan.manualRelatedServices) counts.set(item.href, (counts.get(item.href) || 0) + 1);
  assert([...counts.values()].every((count) => count <= 2), JSON.stringify([...counts]));
  return { slug: document.slug.current, cluster: plan.cluster.id, serviceLinks: Object.fromEntries(counts) };
}

async function variant(source, filename, width, height, format, alt) {
  const buffer = await sharp(path.join(root, source)).resize(width, height, { fit: "cover", withoutEnlargement: true }).toFormat(format, { quality: 84 }).toBuffer();
  fs.mkdirSync(path.join(folder, "images"), { recursive: true });
  fs.writeFileSync(path.join(folder, "images", filename), buffer);
  const metadata = await sharp(buffer).metadata();
  const extension = format === "jpeg" ? "jpg" : format;
  const hash = crypto.createHash("sha1").update(buffer).digest("hex");
  const ref = `image-${hash}-${metadata.width}x${metadata.height}-${extension}`;
  if (write) {
    const asset = await client.assets.upload("image", buffer, { filename, contentType: `image/${format}` });
    assert.equal(asset._id, ref, "Unexpected uploaded image reference");
  }
  return image(ref, alt);
}

async function main() {
  fs.mkdirSync(folder, { recursive: true });
  const slugs = [...articles.map((article) => article.slug), existingSlug];
  const current = await client.fetch('*[_type == "post" && slug.current in $slugs]', { slugs });
  const author = await client.fetch('*[_type == "author" && name == "Web Dynamicx"][0]{_id}');
  assert(author?._id, "Author absent");
  fs.writeFileSync(path.join(folder, `before-${Date.now()}.json`), JSON.stringify(current, null, 2));
  const prepared = [];
  for (const article of articles) {
    const id = `drafts.${article.id}`;
    const matches = current.filter((doc) => doc.slug.current === article.slug);
    assert(matches.every((doc) => doc._id === id), `Slug already exists: ${article.slug}`);
    const existing = matches[0];
    const mainImage = await variant(article.imageSource, `${article.id}-main.webp`, 1536, 864, "webp", article.imageAlt);
    const ogImage = await variant(article.imageSource, `${article.id}-og.jpg`, 1200, 630, "jpeg", article.imageAlt);
    const document = {
      _id: id, _type: "post", title: article.title, metaTitle: article.metaTitle,
      metaDescription: article.metaDescription, excerpt: article.excerpt,
      slug: { _type: "slug", current: article.slug }, category: "software-development", topicCluster: "software",
      author: { _type: "reference", _ref: author._id }, accessLevel: "free",
      mainImage, ogImage, imageVariantMainAssetRef: mainImage.asset._ref,
      publishedAt: existing?.publishedAt || new Date().toISOString(),
      body: article.sections.map((section) => block(...section)),
    };
    prepared.push({ document, before: existing || null });
  }
  const original = current.find((doc) => doc.slug.current === existingSlug && !doc._id.startsWith("drafts."));
  assert(original, "Published comparison absent");
  const draftId = `drafts.${original._id}`;
  const draft = current.find((doc) => doc._id === draftId);
  const source = draft || original;
  const revised = { ...clean(source), _id: draftId };
  revised.body = source.body.filter((b) => !b._key.startsWith("seo-web-flow-"));
  const additions = [
    block("Aplicații în browser, portaluri și procese interne", "h2"),
    block("O aplicație web poate fi potrivită când utilizatorii trebuie să lucreze din browser cu date, formulare și operațiuni interne. Un portal poate oferi clienților acces la propriile solicitări sau documente, cu drepturi stabilite. Evaluarea include dispozitivele folosite, conectivitatea, permisiunile și integrările necesare; aceste funcții se delimitează pentru fiecare proiect."),
    block("Alegerea între web și mobil pornește de la activitatea utilizatorului. Funcțiile care depind de dispozitiv, notificările și distribuția prin magazine se evaluează separat. Pentru un proces intern, verifică mai întâi dacă o interfață în browser poate susține operațiunile, fără a presupune că aceasta este soluția potrivită în orice situație."),
    block("Pentru aplicații web și portaluri definite după cerințe, vezi serviciul de software la comandă.", "normal", "software la comandă", softwareHref),
  ];
  additions.forEach((b, index) => { b._key = `seo-web-flow-${index}`; });
  const nextHeading = revised.body.findIndex((b, index) => index > 1 && b.style === "h2");
  revised.body.splice(nextHeading < 0 ? revised.body.length : nextHeading, 0, ...additions);
  revised.relatedServices = (revised.relatedServices || []).filter((item) => hrefPath(item.href) !== softwareHref);
  for (const field of ["slug", "author", "mainImage", "ogImage", "publishedAt", "category", "topicCluster"]) assert.deepEqual(revised[field], source[field]);
  prepared.push({ document: revised, before: draft || null, publishedId: original._id, publishedRev: original._rev });
  const checks = prepared.map((item) => validate(item.document));
  fs.writeFileSync(path.join(folder, "prepared.json"), JSON.stringify(prepared, null, 2));
  fs.writeFileSync(path.join(folder, "validation.json"), JSON.stringify(checks, null, 2));
  if (!write) { console.log(JSON.stringify({ prepared: checks, saved: false }, null, 2)); return; }

  const fresh = await client.fetch('*[_type == "post" && slug.current in $slugs]', { slugs });
  assert.deepEqual(fresh.map((doc) => [doc._id, doc._rev]).sort(), current.map((doc) => [doc._id, doc._rev]).sort(), "An article changed during preparation");
  let transaction = client.transaction();
  let changes = 0;
  for (const item of prepared) {
    if (item.before && isDeepStrictEqual(clean(item.before), item.document)) continue;
    if (item.before) transaction = transaction.patch(item.document._id, { ifRevisionID: item.before._rev, set: Object.fromEntries(Object.entries(item.document).filter(([key]) => !key.startsWith("_"))) });
    else transaction = transaction.create(item.document);
    changes++;
  }
  if (changes) await transaction.commit({ visibility: "sync" });
  const after = await client.fetch('*[_type == "post" && slug.current in $slugs]', { slugs });
  for (const item of prepared) assert.deepEqual(clean(after.find((doc) => doc._id === item.document._id)), item.document);
  assert.equal(after.find((doc) => doc._id === original._id)?._rev, original._rev);
  assert(!after.some((doc) => articles.some((article) => doc.slug.current === article.slug) && !doc._id.startsWith("drafts.")));
  prepared.map((item) => validate(after.find((doc) => doc._id === item.document._id)));
  fs.writeFileSync(path.join(folder, "saved.json"), JSON.stringify(after, null, 2));
  console.log(JSON.stringify({ savedDrafts: prepared.map((item) => item.document._id), changes, publishedUnchanged: true }, null, 2));
}
main().catch((error) => { console.error(error.message); process.exitCode = 1; });
