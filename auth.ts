import NextAuth from "next-auth";
import { FirestoreAdapter } from "@auth/firebase-adapter";
import { adminDB } from "./app/firebase/server";
 
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [],
  adapter: FirestoreAdapter(adminDB),
})