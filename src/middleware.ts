import nextAuthMiddleware from "next-auth/middleware";
import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

function isAccountDeletionPath(pathname: string) {
  return pathname === "/account-deletion" || pathname === "/account-deletion/";
}

function isMobileLeadPath(pathname: string) {
  return (
    pathname === "/leads/dezvoltare-aplicatii-mobile" ||
    pathname === "/leads/dezvoltare-aplicatii-mobile/" ||
    pathname === "/leads/creare-site-web-magazin-online" ||
    pathname === "/leads/creare-site-web-magazin-online/"
  );
}

export default function middleware(request: NextRequest, event: NextFetchEvent) {
  if (isAccountDeletionPath(request.nextUrl.pathname)) {
    const response = NextResponse.next();
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
    return response;
  }
  if (isMobileLeadPath(request.nextUrl.pathname)) {
    const response = NextResponse.next();
    response.headers.set("X-Robots-Tag", "noindex, follow");
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
    "/leads/dezvoltare-aplicatii-mobile",
    "/leads/dezvoltare-aplicatii-mobile/",
    "/leads/creare-site-web-magazin-online",
    "/leads/creare-site-web-magazin-online/",
  ],
};
