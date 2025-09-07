"use client";

import { ThemeProvider } from "next-themes";
import NextTopLoader from "nextjs-toploader";
import AuthProvider from "../context/AuthContext";
import ToasterContext from "../context/ToastContext";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider enableSystem={false} attribute="class" defaultTheme="light">
      <NextTopLoader color="#006BFF" crawlSpeed={300} showSpinner={false} shadow="none" zIndex={9999999} />
      <AuthProvider>
        <ToasterContext />
        {children}
      </AuthProvider>
    </ThemeProvider>
  );
}


