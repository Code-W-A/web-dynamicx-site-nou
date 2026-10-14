// Dry run by default. Use --write only with a private Sanity token that can create drafts.
const fs = require("node:fs");
const path = require("node:path");
const { loadEnvConfig } = require("@next/env");
const { createClient } = require("@sanity/client");

loadEnvConfig(process.cwd(), false, { info() {}, error() {} });
const token = process.env.SANITY_API_WRITE_TOKEN || process.env.SANITY_API_TOKEN;
if (!token) {
  console.error("Configurează un token privat SANITY_API_WRITE_TOKEN cu permisiune de creare drafturi.");
  process.exit(1);
}
const client = createClient({
  projectId: "tsi99x6a",
  dataset: "production",
  apiVersion: "2023-06-19",
  useCdn: false,
  perspective: "raw",
  token,
});
const prepared = JSON.parse(fs.readFileSync(path.join(__dirname, "sanity-prepared.json"), "utf8"));

async function main() {
  const ids = prepared.flatMap((p) => [p.publishedId, p.document._id]);
  const current = await client.fetch("*[_id in $ids]", { ids });
  // Keep a fresh local snapshot before any attempt to write.
  fs.writeFileSync(path.join(__dirname, "sanity-before-save.json"), JSON.stringify(current, null, 2));
  let transaction = client.transaction();
  for (const p of prepared) {
    if (p.document._id !== `drafts.${p.publishedId}` || p.document._type !== "post") {
      throw new Error(`Document invalid: ${p.slug}`);
    }
    const published = current.find((d) => d._id === p.publishedId);
    const draft = current.find((d) => d._id === p.document._id);
    if (!published || published._rev !== p.publishedRev) {
      throw new Error(`Articolul publicat s-a schimbat; revizuiește conținutul pregătit: ${p.slug}`);
    }
    if (draft) {
      if (!p.existingDraftRev || draft._rev !== p.existingDraftRev) {
        throw new Error(`Există un draft nou sau modificat; nu îl suprascriem: ${p.slug}`);
      }
      transaction = transaction.patch(draft._id, {
        ifRevisionID: draft._rev,
        set: Object.fromEntries(Object.entries(p.document).filter(([key]) => !key.startsWith("_"))),
      });
    } else {
      if (p.existingDraftRev) throw new Error(`Draftul inițial a fost eliminat: ${p.slug}`);
      // Create fails atomically if a draft appears between this read and the commit.
      transaction = transaction.create(p.document);
    }
  }
  if (!process.argv.includes("--write")) {
    console.log(`Verificare reușită: ${prepared.length} drafturi pregătite. Nicio scriere în Sanity.`);
    return;
  }
  await transaction.commit({ visibility: "sync" });
  const after = await client.fetch("*[_id in $ids]", { ids });
  for (const p of prepared) {
    const published = after.find((d) => d._id === p.publishedId);
    const draft = after.find((d) => d._id === p.document._id);
    if (published?._rev !== p.publishedRev || !draft) throw new Error(`Verifică rezultatul salvării: ${p.slug}`);
    for (const [key, value] of Object.entries(p.document)) {
      if (JSON.stringify(draft[key]) !== JSON.stringify(value)) throw new Error(`Diferență după salvare: ${p.slug}/${key}`);
    }
  }
  console.log(JSON.stringify({ savedDrafts: prepared.map((p) => p.document._id), publishedUnchanged: true }, null, 2));
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
