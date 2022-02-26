// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApTdlRULpyQe4UM4wKqgIYT55x9J-zUbQ",
  authDomain: "fortfinance.firebaseapp.com",
  projectId: "fortfinance",
  storageBucket: "fortfinance.appspot.com",
  messagingSenderId: "368295773663",
  appId: "1:368295773663:web:865f52552a79b003daf06a",
  measurementId: "G-M9PEYY8QWN"
};

//export const firebaseApp = firebase.initializeApp(firebaseConfig)

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();