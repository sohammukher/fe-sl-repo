// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcZFJQhHr3CE26KLbyg1vJL2Xy9bzat_M",
  authDomain: "signlingual-9ec4b.firebaseapp.com",
  projectId: "signlingual-9ec4b",
  storageBucket: "signlingual-9ec4b.appspot.com",
  messagingSenderId: "777877459853",
  appId: "1:777877459853:web:37a24ba91daa8e220663c4",
  measurementId: "G-DPH40SX1E3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);