// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgqEL1lzhNgBPJoLgiYxAQfQwGKFXQuuU",
  authDomain: "stackoverflow-0630.firebaseapp.com",
  projectId: "stackoverflow-0630",
  storageBucket: "stackoverflow-0630.appspot.com",
  messagingSenderId: "714814110043",
  appId: "1:714814110043:web:ca0fc89172ac3b2dc4427e",
  measurementId: "G-C66TMBK20M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();