'use server'

import { adminDB } from "@/app/firebase/server";

export async function getBuilding(level: number) {
  const buldingRef = adminDB.collection("buildings").doc("cannon");
  const buldingSnap = await buldingRef.get();
  if (!buldingSnap.exists) {
    throw new Error("Building not found");
  }

  const data = buldingSnap.data();

  return data;
}