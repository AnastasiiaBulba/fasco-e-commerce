import SignInMainForm from "../SignInMainForm";
import FormSignUp from "../FormSignUp/FormSignUp";
import BtnSocial from "../BtnSocial/BtnSocial";
import css from "./RightContainer.module.css";
import { Link, useLocation } from "react-router-dom";

const RightContainer = () => {
  const location = useLocation();

  const isSignInPage = location.pathname === "/signin";
  const isSignUpPage = location.pathname === "/signup";

  return (
    <>
      <Link to="/" className={css.LinkHome}>
        <p>Back to Home</p>
      </Link>
      <h2 className={css.title}>FASCO</h2>
      <div className={css.rightContainer}>
        <p className={css.subtitle}>
          {isSignInPage
            ? "Sign In To FASCO"
            : isSignUpPage
            ? "Sign Up To FASCO"
            : ""}
        </p>
        <BtnSocial isSignUp={isSignUpPage} />{" "}
        {/* Передаем isSignUp пропс на основе текущего пути */}
        <p className={css.or}>-or-</p>
        {isSignInPage ? (
          <SignInMainForm />
        ) : isSignUpPage ? (
          <FormSignUp />
        ) : null}
        {/* Рендерим нужную форму на основе пути */}
        {isSignInPage ? (
          <Link className={css.forgotPassword}>Forgot password?</Link>
        ) : (
          <p className={css.signIn}>
            Already have an account?
            <Link to="/signin">Sign In</Link>
          </p>
        )}
      </div>
    </>
  );
};

export default RightContainer;
