

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWosVN1MdAHqaJAwq42dvQJDe-zF3JbvM",
  authDomain: "demouploadimage-19088.firebaseapp.com",
  projectId: "demouploadimage-19088",
  storageBucket: "demouploadimage-19088.appspot.com",
  messagingSenderId: "469262684915",
  appId: "1:469262684915:web:d4c1e9e1b6d46cad709d86",
  measurementId: "G-KSDYYZR7TD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
