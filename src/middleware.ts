import nextAuthMiddleware from "next-auth/middleware";
import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

function isAccountDeletionPath(pathname: string) {
  return (
    pathname === "/account-deletion" ||
    pathname === "/account-deletion/" ||
    pathname.startsWith("/account-deletion/")
  );
}

function isMobileLeadPath(pathname: string) {
  return (
    pathname === "/leads/dezvoltare-aplicatii-mobile" ||
    pathname === "/leads/dezvoltare-aplicatii-mobile/"
  );
}

function isWebCommerceNoFollowLeadPath(pathname: string) {
  return (
    pathname === "/leads/creare-site-web" ||
    pathname === "/leads/creare-site-web/" ||
    pathname === "/leads/creare-magazin-online" ||
    pathname === "/leads/creare-magazin-online/"
  );
}

const MOBILE_APPS_THANK_YOU_COOKIE = "wd_mobile_apps_ty";
const WEB_SITES_THANK_YOU_COOKIE = "wd_web_sites_ty";
const ONLINE_STORE_THANK_YOU_COOKIE = "wd_online_store_ty";

function isMobileThankYouPath(pathname: string) {
  return (
    pathname === "/multumim-aplicatie-mobile" ||
    pathname === "/multumim-aplicatie-mobile/"
  );
}

function isWebSitesThankYouPath(pathname: string) {
  return pathname === "/multumim-site-web" || pathname === "/multumim-site-web/";
}

function isOnlineStoreThankYouPath(pathname: string) {
  return (
    pathname === "/multumim-magazin-online" ||
    pathname === "/multumim-magazin-online/"
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
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
    return response;
  }
  if (isWebCommerceNoFollowLeadPath(request.nextUrl.pathname)) {
    const response = NextResponse.next();
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
    return response;
  }
  if (isMobileThankYouPath(request.nextUrl.pathname)) {
    const hasCookie =
      request.cookies.get(MOBILE_APPS_THANK_YOU_COOKIE)?.value === "1";
    if (!hasCookie) {
      return NextResponse.redirect(
        new URL("/leads/dezvoltare-aplicatii-mobile", request.url),
      );
    }
    const response = NextResponse.next();
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
    return response;
  }
  if (isWebSitesThankYouPath(request.nextUrl.pathname)) {
    const hasCookie = request.cookies.get(WEB_SITES_THANK_YOU_COOKIE)?.value === "1";
    if (!hasCookie) {
      return NextResponse.redirect(new URL("/leads/creare-site-web", request.url));
    }
    const response = NextResponse.next();
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
    return response;
  }
  if (isOnlineStoreThankYouPath(request.nextUrl.pathname)) {
    const hasCookie =
      request.cookies.get(ONLINE_STORE_THANK_YOU_COOKIE)?.value === "1";
    if (!hasCookie) {
      return NextResponse.redirect(
        new URL("/leads/creare-magazin-online", request.url),
      );
    }
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
    "/account-deletion/:path*",
    "/leads/dezvoltare-aplicatii-mobile",
    "/leads/dezvoltare-aplicatii-mobile/",
    "/leads/creare-site-web",
    "/leads/creare-site-web/",
    "/leads/creare-magazin-online",
    "/leads/creare-magazin-online/",
    "/multumim-aplicatie-mobile",
    "/multumim-aplicatie-mobile/",
    "/multumim-site-web",
    "/multumim-site-web/",
    "/multumim-magazin-online",
    "/multumim-magazin-online/",
  ],
};
