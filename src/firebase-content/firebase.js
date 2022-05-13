// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsVeVZKmy-xJL5WuEVXKagU8ZFBbf_69A",
  authDomain: "react-firebase-2873a.firebaseapp.com",
  projectId: "react-firebase-2873a",
  storageBucket: "react-firebase-2873a.appspot.com",
  messagingSenderId: "122418488697",
  appId: "1:122418488697:web:a103a598dd29cb34807ba8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Conexión db
export const db = getFirestore(app);



