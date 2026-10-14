// Explicit opt-in: creates synthetic records and a temporary Auth user in the new
// project, verifies the real services, then removes only those test resources.
// node --env-file=.env.local scripts/contracts/test-live.cjs --project webdynamicx-contracte
require("./register-ts.cjs");
const assert = require("node:assert/strict");
const { randomBytes } = require("node:crypto");
const {
  auth,
  db,
  firebaseApp,
} = require("../../src/lib/contracts/firebase.ts");
const { deleteApp } = require("firebase-admin/app");
const service = require("../../src/lib/contracts/service.ts");
const { contractsCsv } = require("../../src/lib/contracts/model.ts");
async function main() {
  assert.deepEqual(process.argv.slice(2), [
    "--project",
    "webdynamicx-contracte",
  ]);
  assert.equal(
    process.env.CONTRACTS_FIREBASE_PROJECT_ID,
    "webdynamicx-contracte",
  );
  assert.ok(
    !process.env.FIRESTORE_EMULATOR_HOST &&
      !process.env.FIREBASE_AUTH_EMULATOR_HOST,
  );
  const marker = `SMOKE-${Date.now()}`;
  let user, template, draft;
  const settingsRef = db().collection("contractSettings").doc("provider");
  const previousSettings = await settingsRef.get();
  // Do not overwrite real provider settings for a smoke test.
  assert.ok(
    !previousSettings.exists,
    "Provider settings already exist. Use staging for subsequent smoke tests.",
  );
  try {
    const password = randomBytes(32).toString("base64url");
    user = await auth().createUser({
      email: `${marker.toLowerCase()}@example.test`,
      password,
    });
    await db()
      .collection("contractAdmins")
      .doc(user.uid)
      .set({ active: true, test: marker });
    const response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.CONTRACTS_FIREBASE_API_KEY}`,
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          email: user.email,
          password,
          returnSecureToken: true,
        }),
      },
    );
    const identity = await response.json();
    assert.equal(response.status, 200, identity.error?.message);
    const cookie = await auth().createSessionCookie(identity.idToken, {
      expiresIn: 3600000,
    });
    assert.equal(
      (await auth().verifySessionCookie(cookie, true)).uid,
      user.uid,
    );
    console.log(
      "PASS live: email/password sign-in, session creation and revocation check",
    );
    await service.saveSettings({
      name: "EXCLUSIV TEST TEHNIC",
      taxId: "TEST",
      address: "Date fictive pentru test",
      representative: "TEST",
      email: "test@example.test",
    });
    template = await service.saveTemplate({
      name: marker,
      body: "EXCLUSIV TEST TEHNIC, fără efect contractual\n{{number}} {{provider.name}} {{client.name}} {{client.email}}\n{{service}} {{price}} {{duration}}",
    });
    draft = await service.saveDraft(
      {
        templateId: template.id,
        terms: {
          number: marker,
          date: new Date().toISOString().slice(0, 10),
          service: "TEST",
          price: "0 - TEST",
          duration: "TEST",
        },
      },
      user.uid,
    );
    const signature = [
      [
        { x: 0.1, y: 0.2 },
        { x: 0.5, y: 0.4 },
      ],
    ];
    const { token } = await service.issueLink(
      draft.id,
      { signature },
      user.uid,
    );
    const client = {
      type: "person",
      name: "CLIENT FICTIV TEST",
      address: "TEST",
      email: "test@example.test",
      phone: "0700000000",
      taxId: "",
      representative: "",
    };
    const preview = await service.previewContract(token, { client });
    const payload = {
      client,
      signature,
      accepted: true,
      previewHash: preview.hash,
    };
    const signed = await service.signContract(token, payload);
    assert.deepEqual(await service.signContract(token, payload), signed);
    const stored = await service.getContract(draft.id);
    assert.equal(stored.status, "signed");
    assert.equal(stored.contentHash, preview.hash);
    assert.deepEqual(stored.providerSignature, signature);
    assert.deepEqual(stored.clientSignature, signature);
    assert.match(contractsCsv([stored]), /CLIENT FICTIV TEST/);
    const ruleCheck = await fetch(
      `https://firestore.googleapis.com/v1/projects/webdynamicx-contracte/databases/(default)/documents/contracts/${draft.id}?key=${process.env.CONTRACTS_FIREBASE_API_KEY}`,
    );
    assert.equal(ruleCheck.status, 403);
    console.log(
      "PASS live: Firestore snapshot, two signatures, final text/hash, idempotent retry, CSV and denied direct reads",
    );
  } finally {
    if (draft) {
      const doc = await db().collection("contracts").doc(draft.id).get();
      if (doc.data()?.linkHash)
        await db()
          .collection("contractLinks")
          .doc(doc.data().linkHash)
          .delete();
      const events = await db()
        .collection("contractEvents")
        .where("contractId", "==", draft.id)
        .get();
      const batch = db().batch();
      for (const event of events.docs) batch.delete(event.ref);
      batch.delete(doc.ref);
      await batch.commit();
    }
    if (template)
      await db().collection("contractTemplates").doc(template.id).delete();
    const currentSettings = await settingsRef.get();
    if (currentSettings.data()?.name === "EXCLUSIV TEST TEHNIC")
      await settingsRef.delete();
    if (user) {
      await db().collection("contractAdmins").doc(user.uid).delete();
      await auth().deleteUser(user.uid);
    }
    await deleteApp(firebaseApp());
    console.log("Synthetic live-test resources cleaned up.");
  }
}
main().catch((e) => {
  console.error(e.message);
  process.exitCode = 1;
});
