// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-dUgOIDhFf9qRk2R7xTQDnTswzmnTxQc",
  authDomain: "jellykite-website.firebaseapp.com",
  databaseURL: "https://jellykite-website-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "jellykite-website",
  storageBucket: "jellykite-website.appspot.com",
  messagingSenderId: "293602409184",
  appId: "1:293602409184:web:46143f4d4ce073f35cae85",
  measurementId: "G-JRYP2K4XSP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);