// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEMkWJCC5BEhYcibka1KuuENyCeNSnCnQ",
  authDomain: "healthyfoodhabits-project.firebaseapp.com",
  projectId: "healthyfoodhabits-project",
  storageBucket: "healthyfoodhabits-project.firebasestorage.app",
  messagingSenderId: "567053473364",
  appId: "1:567053473364:web:7390a200cf491fa5b43fc1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Exportar servicios
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);