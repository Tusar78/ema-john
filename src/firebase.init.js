// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbnh6MJ13k_1fvVMTAX3e1UxgzlCRf6Bo",
  authDomain: "ema-john-12da5.firebaseapp.com",
  projectId: "ema-john-12da5",
  storageBucket: "ema-john-12da5.appspot.com",
  messagingSenderId: "60517763679",
  appId: "1:60517763679:web:5d4d6a5da3b9940e91a9ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;