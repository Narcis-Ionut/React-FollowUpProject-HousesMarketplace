import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDypFHKytEQrCjVXZzx5sJmXJzZGom6F6Y",
  authDomain: "house-marketplace-app-7d272.firebaseapp.com",
  projectId: "house-marketplace-app-7d272",
  storageBucket: "house-marketplace-app-7d272.appspot.com",
  messagingSenderId: "124714670140",
  appId: "1:124714670140:web:2325a1d00a871e043f4b39",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
