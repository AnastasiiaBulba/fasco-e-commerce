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

export const loginWithEmail = (email, password) => async (dispatch) => {
  dispatch(setLoading(true));

  // Логируем email и пароль для отладки
  console.log(
    "Attempting to log in with email:",
    email,
    "and password:",
    password
  );

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    dispatch(setUser(userCredential.user));
  } catch (error) {
    console.error("Error during sign-in:", error.code, error.message);

    switch (error.code) {
      case "auth/invalid-email":
        dispatch(setError("The email address is badly formatted."));
        break;
      case "auth/user-disabled":
        dispatch(setError("The user account has been disabled."));
        break;
      case "auth/user-not-found":
        dispatch(setError("No user found with this email."));
        break;
      case "auth/wrong-password":
        dispatch(setError("Incorrect password."));
        break;
      case "auth/invalid-credential":
        dispatch(
          setError(
            "Invalid credentials provided. Please check your email and password."
          )
        );
        break;
      default:
        dispatch(setError("An unknown error occurred: " + error.message));
        break;
    }
  } finally {
    dispatch(setLoading(false));
  }
};

export const registerWithEmail = (email, password) => async (dispatch) => {
  dispatch(setLoading(true));

  if (!email || !password) {
    dispatch(setError("Email and password are required"));
    dispatch(setLoading(false));
    return;
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // Дополнительно, сохраняем или обновляем данные в Firestore
    await setDoc(doc(db, "users", user.uid), {
      email: user.email,
      displayName: "Default Name",
      phoneNumber: "",
    }).catch((firestoreError) => {
      dispatch(setError(`Firestore Error: ${firestoreError.message}`));
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

export const loginWithGitHub = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const userCredential = await signInWithPopup(auth, githubProvider);
    dispatch(setUser(userCredential.user));

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
