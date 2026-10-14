// Local browser fixture only. Cannot reach the real Firebase project.
process.env.CONTRACTS_FIREBASE_PROJECT_ID = "demo-contracte";
process.env.FIRESTORE_EMULATOR_HOST = "127.0.0.1:8088";
process.env.FIREBASE_AUTH_EMULATOR_HOST = "127.0.0.1:9098";
require("./register-ts.cjs");
const { auth, db } = require("../../src/lib/contracts/firebase.ts");
async function main() {
  let user;
  try {
    user = await auth().getUserByEmail("admin-browser@example.test");
  } catch {
    user = await auth().createUser({
      email: "admin-browser@example.test",
      password: "LocalBrowserOnly123!",
    });
  }
  await db().collection("contractAdmins").doc(user.uid).set({ active: true });
  console.log("Local browser fixture ready: admin-browser@example.test");
}
main().catch((e) => {
  console.error(e.message);
  process.exitCode = 1;
});
