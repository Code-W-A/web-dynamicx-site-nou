"use client";
import { SessionProvider } from "next-auth/react";
import { integrations } from "../../../integrations.config";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  if (!integrations?.isAuthEnabled) {
    return <>{children}</>;
  }

  return (
    <SessionProvider
      refetchOnWindowFocus={false}
      refetchWhenOffline={false}
      refetchInterval={0}
    >
      {children}
    </SessionProvider>
  );
}
