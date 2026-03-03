import type { Metadata } from "next";
import AccountDeletionClient from "./account-deletion-client";

const siteName = process.env.SITE_NAME || "Web Dynamicx";

export const metadata: Metadata = {
  title: `Ștergerea contului (Account deletion) | ${siteName}`,
  description:
    "Instrucțiuni pentru ștergerea contului din aplicație sau prin cerere web.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AccountDeletionPage() {
  return <AccountDeletionClient />;
}
