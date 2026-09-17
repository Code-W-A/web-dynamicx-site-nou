"use client";

import NextTopLoader from "nextjs-toploader";
import ToasterContext from "../context/ToastContext";

export default function ClientProviders() {
  return (
    <>
      <NextTopLoader
        color="#006BFF"
        crawlSpeed={300}
        showSpinner={false}
        shadow="none"
        zIndex={9999999}
      />
      <ToasterContext />
    </>
  );
}
