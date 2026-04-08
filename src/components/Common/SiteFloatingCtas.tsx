"use client";

import { usePathname } from "next/navigation";
import BottomCTA from "./BottomCTA";

export default function SiteFloatingCtas() {
  const pathname = usePathname();
  const isLeadPage = pathname?.startsWith("/leads");
  const isMobileAppsThankYou = pathname === "/multumim-aplicatie-mobile";

  if (isLeadPage || isMobileAppsThankYou) {
    return null;
  }

  return <BottomCTA />;
}
