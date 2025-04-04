import { adminDB } from "@/app/firebase/server";

export async function getCoCDataByTHLevel(THLevel: string) {
  const thRef = adminDB.collection("th_levels").doc(THLevel);
  const thSnap = await thRef.get();
  if (!thSnap.exists) {
    throw new Error("Building not found");
  }
  const data = thSnap.data();

  return data;
}