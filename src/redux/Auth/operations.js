import { auth, googleProvider, githubProvider } from "../../Firebase/index";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { setUser, setLoading, setError, clearUser } from "./slice";

const db = getFirestore();

// Логин через Email/Password
export const loginWithEmail = (email, password) => async (dispatch) => {
  dispatch(setLoading(true));
  if (!email || !password) {
    dispatch(setError("Email and password are required"));
    dispatch(setLoading(false));
    return;
  }
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    dispatch(setUser(userCredential.user));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

// Регистрация через Email/Password
export const registerWithEmail = (email, password) => async (dispatch) => {
  dispatch(setLoading(true));

  if (!email || !password) {
    // Используем  для проверки
    dispatch(setError("Email and password are required"));
    dispatch(setLoading(false));
    return;
  }

  try {
    // Регистрируем пользователя с помощью email и password
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // Создаем запись в Firestore с данными пользователя
    await setDoc(doc(db, "users", user.uid), {
      email: user.email,
      displayName: "Default Name", // Можете изменить на имя пользователя
      phoneNumber: "", // Можете добавить телефонный номер
      // Добавьте любые другие поля, которые хотите сохранить в Firestore
    });

    // Диспатчим успешную регистрацию в Redux
    dispatch(setUser(user));
  } catch (error) {
    dispatch(setError(`Registration Error: ${error.message}`)); // Исправил ошибку форматирования
  } finally {
    dispatch(setLoading(false));
  }
};

// Логин через Google
export const loginWithGoogle = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const userCredential = await signInWithPopup(auth, googleProvider);
    dispatch(setUser(userCredential.user));

    // Дополнительно, сохраняем или обновляем данные в Firestore
    await setDoc(doc(db, "users", userCredential.user.uid), {
      email: userCredential.user.email,
      displayName: userCredential.user.displayName || "Default Name",
      phoneNumber: userCredential.user.phoneNumber || "",
    });
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

// Логин через GitHub
export const loginWithGitHub = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const userCredential = await signInWithPopup(auth, githubProvider);
    dispatch(setUser(userCredential.user));

    // Дополнительно, сохраняем или обновляем данные в Firestore
    await setDoc(doc(db, "users", userCredential.user.uid), {
      email: userCredential.user.email,
      displayName: userCredential.user.displayName || "Default Name",
      phoneNumber: userCredential.user.phoneNumber || "",
    });
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

// Логаут
export const logout = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    await signOut(auth);
    dispatch(clearUser());
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};
