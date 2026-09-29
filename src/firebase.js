import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAz9170Jbdm1HFVR8uDqeYQxd7rydB63Nk",
  authDomain: "pedidos360-f096d.firebaseapp.com",
  projectId: "pedidos360-f096d",
  storageBucket: "pedidos360-f096d.firebasestorage.app",
  messagingSenderId: "310461447032",
  appId: "1:310461447032:web:f9855767e4828e9b0d668d"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
