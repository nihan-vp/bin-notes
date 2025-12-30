
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInAnonymously } from "firebase/auth";

// These values are placeholders. In a production environment, 
// you would use environment variables or a direct config from the Firebase Console.
const firebaseConfig = {
  apiKey: "AIzaSyAs-Placeholder-Key",
  authDomain: "lumina-notes.firebaseapp.com",
  projectId: "lumina-notes",
  storageBucket: "lumina-notes.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef"
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = getAuth(app);

// Sign in anonymously for a seamless "Full Firebase" experience without forcing a login form immediately
signInAnonymously(auth).catch((error) => {
  console.error("Firebase Auth Error:", error.code, error.message);
});
