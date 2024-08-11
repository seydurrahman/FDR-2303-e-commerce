import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBUPsaPQLLpGZCrg8d6qg_7sekppP4xdFA",
  authDomain: "orebi-frontend-baa0a.firebaseapp.com",
  projectId: "orebi-frontend-baa0a",
  storageBucket: "orebi-frontend-baa0a.appspot.com",
  messagingSenderId: "953586927721",
  appId: "1:953586927721:web:c1599fc75aa8d38dc7faf8"
};

// Initialize Firebase
const Firebaseapp = initializeApp(firebaseConfig);
export default Firebaseapp