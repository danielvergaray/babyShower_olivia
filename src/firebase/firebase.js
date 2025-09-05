import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDzjj8nHhTKEBAGZCQeTRgfYmr_Fon11bg",
  authDomain: "modelo-invitacion.firebaseapp.com",
  projectId: "modelo-invitacion",
  storageBucket: "modelo-invitacion.firebasestorage.app",
  messagingSenderId: "511841298505",
  appId: "1:511841298505:web:6164764ce37b78591bf798",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
