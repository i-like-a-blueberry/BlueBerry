// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA59QI8EjpQk_nm4q7La8f0zE73x49hc_E",
  authDomain: "first-project-e9435.firebaseapp.com",
  projectId: "first-project-e9435",
  storageBucket: "first-project-e9435.appspot.com",
  messagingSenderId: "104975307528",
  appId: "1:104975307528:web:54601a69b41354375b92bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);