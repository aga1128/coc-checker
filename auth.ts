import NextAuth from "next-auth";
import { FirestoreAdapter } from "@auth/firebase-adapter";
import { adminDB } from "./app/firebase/server";
import authConfig from "./auth.config";
 
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: FirestoreAdapter(adminDB),
  ...authConfig
})