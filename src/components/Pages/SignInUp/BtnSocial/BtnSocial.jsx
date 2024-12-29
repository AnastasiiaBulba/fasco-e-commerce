import Google from "../../../../assets/photo/SingInLogout/Google.svg";
/*
import Gmail from "../../../../assets/photo/SingInLogout/Gmail.svg";*/
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
    handleRedirectResult();
  }, []);
  return (
    <div className={css.btnSocial}>
      <a onClick={signInWithGoogle} className={css.button}>
        <img src={Google} alt="Google" />
        <p className={css.text}>
          {isSignUp ? "Sign up with Google" : "Sign in with Google"}
        </p>
      </a>
      <a onClick={signInWithGitHub} className={css.button}>
        <img src={Github} alt="Github" />
        <p className={css.text}>
          {isSignUp ? "Sign up with Github" : "Sign in with Github"}
        </p>
      </a>
    </div>
  );
};

export default BtnSocial;
