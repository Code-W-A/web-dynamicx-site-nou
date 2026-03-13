"use client";

import { usePathname } from "next/navigation";
import BottomCTA from "./BottomCTA";

export default function SiteFloatingCtas() {
  const pathname = usePathname();
  const isLeadPage = pathname?.startsWith("/leads");

  if (isLeadPage) {
    return null;
  }

  return <BottomCTA />;
}
