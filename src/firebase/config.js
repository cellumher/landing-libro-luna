// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHBpOjkkeBPJ4PlG3apV6i8Xe0gqSc3mE",
  authDomain: "el-pequeno-y-la-luna.firebaseapp.com",
  projectId: "el-pequeno-y-la-luna",
  storageBucket: "el-pequeno-y-la-luna.appspot.com",
  messagingSenderId: "959513694828",
  appId: "1:959513694828:web:75753fd3ff099fdb3cbe49",
  measurementId: "G-TLGQXJDSML"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
// const analytics = getAnalytics(FirebaseApp);