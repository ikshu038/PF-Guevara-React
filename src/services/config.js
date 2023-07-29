// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from  "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeyRiX0pE_uWudSfxxDovuU-KUjTq52eg",
  authDomain: "pf-guevara-react.firebaseapp.com",
  projectId: "pf-guevara-react",
  storageBucket: "pf-guevara-react.appspot.com",
  messagingSenderId: "1077043815668",
  appId: "1:1077043815668:web:04d80899c13bf2cba92aa1",
  measurementId: "G-NQZX2EZQF6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)