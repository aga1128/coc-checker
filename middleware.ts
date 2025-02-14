import { NextRequest, NextResponse } from 'next/server';
import NextAuth from "next-auth";
import authConfig from "./auth.config";

const { auth } = NextAuth(authConfig)
export default auth(async function middleware(req: NextRequest) {
  const session = await auth();
  if(!session && !req.nextUrl.pathname.startsWith('/login')) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
})

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}