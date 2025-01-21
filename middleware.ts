import { NextRequest } from 'next/server';
import NextAuth from "next-auth";
import authConfig from "./auth.config";

const { auth } = NextAuth(authConfig)
export default auth(async function middleware(req: NextRequest) {
  // Your custom middleware logic goes here
})

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}