import Google from "../../../../assets/photo/SingInLogout/Google.svg";
import Github from "../../../../assets/photo/SingInLogout/Github.svg";
import css from "./BtnSocial.module.css";
import {
  signInWithGoogle,
  signInWithGitHub,
  handleRedirectResult,
} from "../../../../Firebase/authService";
import { useEffect } from "react";

const BtnSocial = ({ isSignUp }) => {
  useEffect(() => {
    // Обработка результата редиректа при входе через соцсети
    handleRedirectResult().catch((error) => {
      console.error("Error handling redirect result:", error);
    });
  }, []);

  return (
    <div className={css.btnSocial}>
      <button onClick={signInWithGoogle} className={css.button}>
        <img src={Google} alt="Google" />
        <p className={css.text}>
          {isSignUp ? "Sign up with Google" : "Sign in with Google"}
        </p>
      </button>
      <button onClick={signInWithGitHub} className={css.button}>
        <img src={Github} alt="Github" />
        <p className={css.text}>
          {isSignUp ? "Sign up with Github" : "Sign in with Github"}
        </p>
      </button>
    </div>
  );
};

export default BtnSocial;
