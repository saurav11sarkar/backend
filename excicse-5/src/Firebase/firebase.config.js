
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBXvqj1bPgiy1mI9uGkoEMtw_rGVOAwc3o",
  authDomain: "name-email-password-4dffc.firebaseapp.com",
  projectId: "name-email-password-4dffc",
  storageBucket: "name-email-password-4dffc.appspot.com",
  messagingSenderId: "81853574305",
  appId: "1:81853574305:web:ae5198a60fd74ec3e5d4e0"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;