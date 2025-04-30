import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCDCzsGOcqt8F7N6OOqxzy1wrT7RAvn8m0",
  authDomain: "jr-shop-ropa.firebaseapp.com",
  projectId: "jr-shop-ropa",
  storageBucket: "jr-shop-ropa.firebasestorage.app",
  messagingSenderId: "563580442148",
  appId: "1:563580442148:web:a23532dbee107736582ab1"
};
const app = initializeApp(firebaseConfig);

const db = getFirestore();

export default db;