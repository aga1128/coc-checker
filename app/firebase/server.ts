import { initializeApp, getApps, getApp } from 'firebase-admin/app';
import admin from "firebase-admin";
import { getFirestore } from 'firebase-admin/firestore';
import { getAuth } from 'firebase-admin/auth';


const app = getApps().length === 0 ? initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  }),
}) : getApp();

export const adminDB = getFirestore(app);
export const adminAuth = getAuth(app);