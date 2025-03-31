import dotenv from "dotenv";
dotenv.config({ path: "../.env.local" });

import admin from "firebase-admin";
import { initializeApp, getApps, getApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { TH_DATA } from "./coc_base.js";



const app = getApps().length === 0 ? initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  }),
}) : getApp();


export const adminDB = getFirestore(app);

const COLLECTION_NAME = "th_levels";
const data = TH_DATA;


async function uploadDataInBatch() {
  // 一度に処理できるドキュメント数には制限があるため、バッチに分けて処理
  const MAX_BATCH_SIZE = 500; // Firestoreの最大バッチサイズは500
  const batches = [];
  
  // データを適切なサイズのバッチに分割
  for (let i = 0; i < data.length; i += MAX_BATCH_SIZE) {
    const batch = adminDB.batch();
    const chunk = data.slice(i, i + MAX_BATCH_SIZE);
    
    chunk.forEach((item) => {
      const { THLevel, ...data } = item;
      const docRef = adminDB.collection(COLLECTION_NAME).doc(THLevel);
      // THレベルを除外してドキュメントデータを作成
      batch.set(docRef, data);
    });
    
    batches.push(batch.commit());
  }
  
  try {
    // すべてのバッチをコミット
    await Promise.all(batches);
    console.log(`${data.length}件のデータを${COLLECTION_NAME}コレクションに登録しました`);
  } catch (error) {
    console.error('データ登録中にエラーが発生しました:', error);
  }
}

// データ登録を実行
uploadDataInBatch().then(() => {
  console.log('処理が完了しました');
  process.exit(0);
}).catch(error => {
  console.error('エラーが発生しました:', error);
  process.exit(1);
});