// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZEARd3KFZAQqqYZDOlBCA8_5V68qfjYE",
  authDomain: "netflix-beb1c.firebaseapp.com",
  projectId: "netflix-beb1c",
  storageBucket: "netflix-beb1c.appspot.com",
  messagingSenderId: "857523609552",
  appId: "1:857523609552:web:869d6e0599bb21afeca3d5",
  measurementId: "G-919V4N2CSE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();