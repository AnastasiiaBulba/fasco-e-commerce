import {
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithRedirect,
  getRedirectResult,
} from "firebase/auth";
import { auth, db } from "./firebase"; // импортируем auth и db из вашего firebase.js
import { doc, setDoc } from "firebase/firestore"; // импортируем Firestore функции для записи

// Провайдеры для Google и GitHub
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

// Функция для регистрации через Google
const signInWithGoogle = async () => {
  try {
    // Пытаемся выполнить редирект на Google
    await signInWithRedirect(auth, googleProvider);
  } catch (error) {
    console.error("Google sign-in error: ", error.code, error.message);
  }
};

// Функция для регистрации через GitHub
const signInWithGitHub = async () => {
  try {
    // Пытаемся выполнить редирект на GitHub
    await signInWithRedirect(auth, githubProvider);
  } catch (error) {
    console.error("GitHub sign-in error: ", error.code, error.message);
  }
};

// Функция для обработки результата после редиректа
const handleRedirectResult = async () => {
  try {
    // Получаем результат редиректа
    const result = await getRedirectResult(auth);
    if (result) {
      const user = result.user;

      // Создаем ссылку на пользователя в Firestore
      const userRef = doc(db, "users", user.uid);

      // Сохраняем информацию о пользователе в Firestore
      await setDoc(userRef, {
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL, // Сохраняем ссылку на фото профиля (если есть)
      });

      console.log("User info saved:", user);
    }
  } catch (error) {
    console.error("Error handling redirect result:", error.message);
  }
};

// Экспортируем функции для использования в компонентах
export { signInWithGoogle, signInWithGitHub, handleRedirectResult };
