"use client";

import { usePathname } from "next/navigation";
import { LeadFooter } from "@/components/Leads/chrome";
import { getWebCommerceSource } from "@/components/Leads/types";
import Footer from "@/components/Footer";

export default function ConditionalSiteFooter() {
  const pathname = usePathname();
  if (pathname === "/multumim-aplicatie-mobile") {
    return null;
  }
  const source = getWebCommerceSource(pathname);
  if (source) return <LeadFooter source={source} />;
  return <Footer />;
}
