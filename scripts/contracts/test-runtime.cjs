// Reproduces the CommonJS loader constraints seen in Vercel serverless functions.
// Run through npm run test:contracts:runtime, which disables native require(esm).
const assert = require("node:assert/strict");
const {
  generateKeyPairSync,
  createSign,
  createVerify,
} = require("node:crypto");
const { createRequire } = require("node:module");

async function main() {
  const firebaseRequire = createRequire(require.resolve("firebase-admin/auth"));
  const jwks = firebaseRequire("jwks-rsa");
  const { getAuth } = require("firebase-admin/auth");
  assert.equal(typeof getAuth, "function");

  // Exercise the actual JWK -> public key conversion, not just the module import.
  const { publicKey, privateKey } = generateKeyPairSync("rsa", {
    modulusLength: 2048,
  });
  const kid = "runtime-regression";
  const client = jwks({
    cache: false,
    rateLimit: false,
    fetcher: async () => ({
      keys: [
        {
          ...publicKey.export({ format: "jwk" }),
          kid,
          use: "sig",
          alg: "RS256",
        },
      ],
    }),
  });
  const key = await client.getSigningKey(kid);
  const payload = "contract-runtime-regression";
  const signature = createSign("RSA-SHA256").update(payload).sign(privateKey);
  assert.ok(
    createVerify("RSA-SHA256")
      .update(payload)
      .verify(key.getPublicKey(), signature),
  );
  assert.equal(
    createVerify("RSA-SHA256")
      .update("modified")
      .verify(key.getPublicKey(), signature),
    false,
  );
  console.log(
    "PASS: Firebase Auth loads in CommonJS; JWKS key conversion verifies RSA signatures and rejects modified payloads.",
  );
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
