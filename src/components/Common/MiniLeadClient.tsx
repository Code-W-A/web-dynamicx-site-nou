"use client";

import dynamic from "next/dynamic";

const MiniLeadFormNoSSR = dynamic(() => import("@/components/Common/MiniLeadForm"), {
  ssr: false,
  loading: () => null,
});

export default function MiniLeadClient() {
  return <MiniLeadFormNoSSR />;
}


