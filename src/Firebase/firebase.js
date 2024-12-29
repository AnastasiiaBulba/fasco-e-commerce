// firebase.js
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Конфигурация Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDzvY0FAKsATbLC_naqj3tMYIQISpvTbGI",
  authDomain: "fasko-aa017.firebaseapp.com",
  projectId: "fasko-aa017",
  storageBucket: "fasko-aa017.appspot.com", // Исправлено
  messagingSenderId: "787505323926",
  appId: "1:787505323926:web:fb5160347c5cdfb47a07b7",
  measurementId: "G-YMBK0S4KCB",
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);

// Получение сервисов
const auth = getAuth(app);
const db = getFirestore(app);

// Экспорт функций и объектов
export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  db,
};
