"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";

export default function ConditionalSiteFooter() {
  const pathname = usePathname();
  if (pathname === "/multumim-aplicatie-mobile") {
    return null;
  }
  return <Footer />;
}
