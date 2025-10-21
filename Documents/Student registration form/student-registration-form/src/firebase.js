// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAPH3C5168d44QwDbi_DOFuodXFr4CBX8o",
  authDomain: "limkokwingsystemreport.firebaseapp.com",
  projectId: "limkokwingsystemreport",
  storageBucket: "limkokwingsystemreport.firebasestorage.app",
  messagingSenderId: "555964942093",
  appId: "1:555964942093:web:ca6d8a160818a0ccaad244",
  measurementId: "G-R1FQFEV22W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
