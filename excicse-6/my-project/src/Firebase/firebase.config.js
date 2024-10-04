import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAG4DKrHrBmAVZE8T5Y63miuvezXaJz5Vc",
  authDomain: "practic-dragon--news.firebaseapp.com",
  projectId: "practic-dragon--news",
  storageBucket: "practic-dragon--news.appspot.com",
  messagingSenderId: "399507705867",
  appId: "1:399507705867:web:ede75529aee98ff5b5770e"
};


const app = initializeApp(firebaseConfig);

export default app;