import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCoFGw1JfPUMyWU8Y2iGQlHv_36XxNNoYw",
    authDomain: "tv-esquivel.firebaseapp.com",
    projectId: "tv-esquivel",
    storageBucket: "tv-esquivel.appspot.com",
    messagingSenderId: "419604383761",
    appId: "1:419604383761:web:34c451a0b99851344189b0"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

