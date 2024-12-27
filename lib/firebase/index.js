// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOvcpyuboevvWR3HCWlLqn7TJK_VoGY-o",
  authDomain: "spendwise-23936.firebaseapp.com",
  projectId: "spendwise-23936",
  storageBucket: "spendwise-23936.appspot.com",
  messagingSenderId: "222435760510",
  appId: "1:222435760510:web:ac6bd16b712ff9b2d1fb2f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { app, db, auth };
