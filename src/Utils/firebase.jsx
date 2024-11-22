import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCqFTQk1-g8cvT7btIghBI-1pwjoaA1GGs",
  authDomain: "critique-connect-666db.firebaseapp.com",
  projectId: "critique-connect-666db",
  storageBucket: "critique-connect-666db.appspot.com",
  messagingSenderId: "241450286867",
  appId: "1:241450286867:web:40527f769d75f4a871a4e6",
  measurementId: "G-JKX3X1FS0B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
