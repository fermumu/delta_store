// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnwGIa8dxvSewICa_fgJ-bh7qbBr7TDUk",
  authDomain: "deltastore-7de0d.firebaseapp.com",
  projectId: "deltastore-7de0d",
  storageBucket: "deltastore-7de0d.appspot.com",
  messagingSenderId: "311759910881",
  appId: "1:311759910881:web:d6f88456e742f0809884a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export const db = getFirestore(app);