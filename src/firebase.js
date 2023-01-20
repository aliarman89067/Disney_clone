import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC_zCpTVkWAAgynDWPU4ENM_jHYG-cH6lo",
  authDomain: "disney-clone-2c902.firebaseapp.com",
  projectId: "disney-clone-2c902",
  storageBucket: "disney-clone-2c902.appspot.com",
  messagingSenderId: "135117579034",
  appId: "1:135117579034:web:ef5f76039fc788c40882a3",
  measurementId: "G-9MS3Z8N6CH",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
