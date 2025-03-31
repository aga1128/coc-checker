// import { adminDB } from "@/app/firebase/server";

// export async function getMaxQuantity(level: number) {
//   const thRef = adminDB.collection("th_levels").doc(`${level}`);
//   const thSnap = await thRef.get();
//   if (!thSnap.exists) {
//     throw new Error("Building not found");
//   }

//   const data = thSnap.data();

//   return data;
// }