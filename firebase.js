// Import the functions you need from the SDKs you need
import { initializeApp ,getApps, getApp} from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyDRQxTK4jf0Mf2u0M8vb12D1ZG-DlaSz0Q",
  authDomain: "disney-ali.firebaseapp.com",
  projectId: "disney-ali",
  storageBucket: "disney-ali.appspot.com",
  messagingSenderId: "228874024649",
  appId: "1:228874024649:web:1ded39112b1334dea4ff18"
};

 //initialize Firebase
 const app = !getApps().length ? initializeApp(firebaseConfig) : getApps;
 const db = getFirestore(app);
 const storage = getStorage();
 const auth= getAuth();

 export  { db, storage,auth }