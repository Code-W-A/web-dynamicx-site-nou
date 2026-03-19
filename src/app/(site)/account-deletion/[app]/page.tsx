import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AccountDeletionClient, {
  type AccountDeletionApp,
} from "../account-deletion-client";

type Props = {
  params: Promise<{ app: string }>;
};

const appLabels: Record<AccountDeletionApp, string> = {
  "my-butterfly": "My Butterfly",
  "do-it-now": "DO IT NOW",
  "cristina-zurba-tarot-astrology": "Cristina Zurba Tarot&Astrology",
};

function parseAppSlug(value: string): AccountDeletionApp | null {
  if (
    value === "my-butterfly" ||
    value === "do-it-now" ||
    value === "cristina-zurba-tarot-astrology"
  ) {
    return value;
  }
  return null;
}

export function generateStaticParams() {
  return [
    { app: "my-butterfly" },
    { app: "do-it-now" },
    { app: "cristina-zurba-tarot-astrology" },
  ];
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const appSlug = parseAppSlug(params.app);

  if (!appSlug) {
    notFound();
  }

  const siteURL = process.env.SITE_URL || "https://www.webdynamicx.ro";
  const siteName = process.env.SITE_NAME || "Web Dynamicx";
  const appName = appLabels[appSlug];

  return {
    title: `${appName} – Account Deletion | ${siteName}`,
    description: `Account deletion page dedicated to the ${appName} mobile app.`,
    alternates: {
      canonical: `${siteURL}/account-deletion/${appSlug}`,
    },
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function AccountDeletionAppPage(props: Props) {
  const params = await props.params;
  const appSlug = parseAppSlug(params.app);

  if (!appSlug) {
    notFound();
  }

  return <AccountDeletionClient forcedApp={appSlug} showAppSelector={false} />;
}
