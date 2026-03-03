import nextAuthMiddleware from "next-auth/middleware";
import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

function isAccountDeletionPath(pathname: string) {
  return pathname === "/account-deletion" || pathname === "/account-deletion/";
}

export default function middleware(request: NextRequest, event: NextFetchEvent) {
  if (isAccountDeletionPath(request.nextUrl.pathname)) {
    const response = NextResponse.next();
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
    return response;
  }

  return (nextAuthMiddleware as any)(request, event);
}

export const config = {
  matcher: [
    "/dashboard",
    "/auth/success",
    "/app/:path*",
    "/other/:path*",
    "/help/:path*",
    "/account-deletion",
    "/account-deletion/",
  ],
};
