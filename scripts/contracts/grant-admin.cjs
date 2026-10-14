// Run with: node --env-file=.env.local scripts/contracts/grant-admin.cjs EMAIL
// No mail is sent. Use "Am uitat parola" on the admin login screen to choose a password.
const { randomBytes } = require("node:crypto");
const {
  initializeApp,
  cert,
  applicationDefault,
} = require("firebase-admin/app");
const { getAuth } = require("firebase-admin/auth");
const { getFirestore } = require("firebase-admin/firestore");
async function main() {
  const email = process.argv[2];
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    throw new Error(
      "Usage: node --env-file=.env.local scripts/contracts/grant-admin.cjs EMAIL",
    );
  const projectId = process.env.CONTRACTS_FIREBASE_PROJECT_ID;
  if (!projectId) throw new Error("CONTRACTS_FIREBASE_PROJECT_ID is required");
  const privateKey = process.env.CONTRACTS_FIREBASE_PRIVATE_KEY?.replace(
    /\\n/g,
    "\n",
  );
  initializeApp({
    projectId,
    ...(process.env.FIRESTORE_EMULATOR_HOST
      ? {}
      : {
          credential: privateKey
            ? cert({
                projectId,
                clientEmail: process.env.CONTRACTS_FIREBASE_CLIENT_EMAIL,
                privateKey,
              })
            : applicationDefault(),
        }),
  });
  const auth = getAuth();
  let user;
  try {
    user = await auth.getUserByEmail(email);
  } catch (e) {
    if (e.code !== "auth/user-not-found") throw e;
    user = await auth.createUser({
      email,
      password: randomBytes(32).toString("base64url"),
    });
  }
  if (user.disabled)
    throw new Error("The account is disabled; review before granting access.");
  await getFirestore()
    .collection("contractAdmins")
    .doc(user.uid)
    .set(
      { active: true, email, grantedAt: new Date().toISOString() },
      { merge: true },
    );
  console.log(
    `Administrator authorized: ${email} (UID: ${user.uid}). Use the password reset button to set your password.`,
  );
}
main().catch((e) => {
  console.error(e.message);
  process.exitCode = 1;
});
