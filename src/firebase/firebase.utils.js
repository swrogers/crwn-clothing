import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const config = {
  apiKey: "AIzaSyCEPzqYRiHeagH2enqxt84kc8xvE2Sqs-g",
  authDomain: "crwn-db-3f77a.firebaseapp.com",
  projectId: "crwn-db-3f77a",
  storageBucket: "crwn-db-3f77a.appspot.com",
  messagingSenderId: "546463359010",
  appId: "1:546463359010:web:f028f3732b759518afea7b",
  measurementId: "G-QQGZ83EKXC",
};

initializeApp(config);

export const auth = getAuth();
export const firestore = getFirestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ params: "select_account" });
export const signInWithGoogle = () => signInWithPopup(auth, provider);
