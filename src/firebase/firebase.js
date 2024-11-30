// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-w3n8Ff8lBg45eejE76T0fb3BZ9Mdrfs",
  authDomain: "richardportifolio.firebaseapp.com",
  projectId: "richardportifolio",
  storageBucket: "richardportifolio.firebasestorage.app",
  messagingSenderId: "1012567250661",
  appId: "1:1012567250661:web:e8cbd7371b61e60393260c",
  measurementId: "G-8QNNT482CR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);