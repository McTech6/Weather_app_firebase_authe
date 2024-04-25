import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCcmvq6ckWEEQKVwut0vALBI5YA7nRJphE",
  authDomain: "weatherapp-4f2ba.firebaseapp.com",
  projectId: "weatherapp-4f2ba",
  storageBucket: "weatherapp-4f2ba.appspot.com",
  messagingSenderId: "297790768038",
  appId: "1:297790768038:web:73c236384882ee98ec8567",
  measurementId: "G-MCF62H950Y"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)



export { app, auth };
