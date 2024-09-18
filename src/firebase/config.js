// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAW65mdXf7E7Mj050eSLPSGfLH5DQ-uLRA",
  authDomain: "react-curso-495a6.firebaseapp.com",
  projectId: "react-curso-495a6",
  storageBucket: "react-curso-495a6.appspot.com",
  messagingSenderId: "830318192301",
  appId: "1:830318192301:web:067837c153f65f38b44824"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp)

export const FirebaseDB = getFirestore(FirebaseApp)