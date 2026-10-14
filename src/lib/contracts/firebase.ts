import {
  applicationDefault,
  cert,
  getApps,
  initializeApp,
} from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

export function firebaseApp() {
  const existing = getApps().find((app) => app.name === "contracts");
  if (existing) return existing;
  const projectId = process.env.CONTRACTS_FIREBASE_PROJECT_ID;
  if (!projectId) throw new Error("CONTRACTS_FIREBASE_PROJECT_ID lipsește.");
  const emulator = process.env.FIRESTORE_EMULATOR_HOST;
  if (
    process.env.NODE_ENV === "production" &&
    (emulator || process.env.FIREBASE_AUTH_EMULATOR_HOST)
  )
    throw new Error("Emulatoarele sunt interzise în producție.");
  const privateKey = process.env.CONTRACTS_FIREBASE_PRIVATE_KEY?.replace(
    /\\n/g,
    "\n",
  );
  return initializeApp(
    {
      projectId,
      ...(emulator
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
    },
    "contracts",
  );
}
export const db = () => getFirestore(firebaseApp());
export const auth = () => getAuth(firebaseApp());
