import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCUsDEwjXIrkt7BuIsXZ1zXq6aH8W6QXZM",
  authDomain: "zaid-276fa.firebaseapp.com",
  projectId: "zaid-276fa",
  storageBucket: "zaid-276fa.appspot.com",
  messagingSenderId: "108810531219",
  appId: "1:108810531219:web:40a1c9b26ab350131bb866",
  measurementId: "G-7T2N1HKGR5",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
