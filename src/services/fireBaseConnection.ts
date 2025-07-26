
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDCk_kPu-Oyf_X6ZXz0BuN-yqCM9n0O-YM",
  authDomain: "reactlinks-80e92.firebaseapp.com",
  projectId: "reactlinks-80e92",
  storageBucket: "reactlinks-80e92.firebasestorage.app",
  messagingSenderId: "341621402084",
  appId: "1:341621402084:web:e919b3faa62a013327bff1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db};