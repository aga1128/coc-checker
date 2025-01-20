import NextAuth from "next-auth";
import Google from "next-auth/providers/google"
import { FirestoreAdapter } from "@auth/firebase-adapter";
import { adminDB } from "./app/firebase/server";
 
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    })
  ],
  adapter: FirestoreAdapter(adminDB),
})