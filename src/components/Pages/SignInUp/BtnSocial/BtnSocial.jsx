import Google from "../../../../assets/photo/SingInLogout/Google.svg";
import Gmail from "../../../../assets/photo/SingInLogout/Gmail.svg";
import css from "./BtnSocial.module.css";

const BtnSocial = ({ isSignUp }) => {
  return (
    <div className={css.btnSocial}>
      <a className={css.button}>
        <img src={Google} alt="Google" />
        <p className={css.text}>
          {isSignUp ? "Sign up with Google" : "Sign in with Google"}
        </p>
      </a>
      <a className={css.button}>
        <img src={Gmail} alt="Gmail" />
        <p className={css.text}>
          {isSignUp ? "Sign up with Gmail" : "Sign in with Gmail"}
        </p>
      </a>
    </div>
  );
};

export default BtnSocial;
