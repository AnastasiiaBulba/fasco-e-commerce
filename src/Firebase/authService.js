import {
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithRedirect,
  getRedirectResult,
} from "firebase/auth";
import { auth } from "./index"; // Импортируем auth из index.js для использования

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

// Функция для обработки редиректа при входе
export const handleRedirectResult = async () => {
  try {
    const result = await getRedirectResult(auth);
    if (result) {
      const user = result.user; // Получаем информацию о пользователе после редиректа
      console.log("User info after redirect:", user);
      return user; // Возвращаем пользователя или обновляем состояние в Redux
    }
  } catch (error) {
    console.error("Error handling redirect result:", error);
  }
};

// Логин через Google
export const signInWithGoogle = () => {
  signInWithRedirect(auth, googleProvider);
};

// Логин через GitHub
export const signInWithGitHub = () => {
  signInWithRedirect(auth, githubProvider);
};
