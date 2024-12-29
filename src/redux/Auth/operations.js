import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "../../Firebase/firebase"; // Импортируем необходимые функции из firebase.js

export const registration = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const { name, lastName, email, phoneNumber, password } = credentials;
      console.log("Registration data:", credentials); // Проверим, что данные передаются

      // Регистрация пользователя с email и паролем
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Обновление профиля пользователя с дополнительными данными
      await updateProfile(user, {
        displayName: name,
      });

      // Сохранение данных пользователя в Firestore
      // Если необходимо, добавьте код для записи в Firestore:
      // const userRef = doc(db, "users", user.uid);
      // await setDoc(userRef, { name, lastName, email, phoneNumber });

      return {
        user: {
          name,
          lastName,
          email: user.email,
          phoneNumber,
        },
        token: user.uid,
      };
    } catch (error) {
      console.error("Registration error:", error.message); // Отладка
      return thunkAPI.rejectWithValue(error.message); // Обработка ошибок
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      );
      const user = userCredential.user;
      return {
        user: { name: user.displayName, email: user.email },
        token: user.uid,
      }; // Получаем токен (UID)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await signOut(auth);
    return {}; // Логинизация не требуется, просто очищаем токен и состояние
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    try {
      return new Promise((resolve, reject) => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            resolve({
              user: { name: user.displayName, email: user.email },
              token: user.uid,
            });
          } else {
            reject("No user found");
          }
        });
      });
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
