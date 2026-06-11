import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = ["/lessons", "/resources", "/account"];

export default async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (!protectedRoutes.some((route) => pathname.startsWith(route))) {
    return NextResponse.next();
  }

  // Match the secure-cookie flag to how the session cookie was originally set.
  // NextAuth sets __Secure-authjs.session-token on HTTPS and authjs.session-token on HTTP.
  // NEXTAUTH_URL tells us which one is in use.
  const secureCookie =
    (process.env.NEXTAUTH_URL ?? "http://localhost:3000").startsWith("https://");

  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET!,
    secureCookie,
  });

  if (!token) {
    const loginUrl = new URL("/login", req.url);
    loginUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|icon.png|logo.png).*)"],
};
