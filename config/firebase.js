import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyCUsDEwjXIrkt7BuIsXZ1zXq6aH8W6QXZM",
//   authDomain: "zaid-276fa.firebaseapp.com",
//   projectId: "zaid-276fa",
//   storageBucket: "zaid-276fa.appspot.com",
//   messagingSenderId: "108810531219",
//   appId: "1:108810531219:web:40a1c9b26ab350131bb866",
//   measurementId: "G-7T2N1HKGR5",
// };

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage();
