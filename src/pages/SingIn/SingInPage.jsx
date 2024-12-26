import css from "./SingInPage.module.css";
import SignInMainForm from "../../components/Pages/SignInUp/SignInMainForm";
import BtnSocial from "../../components/Pages/SignInUp/BtnSocial/BtnSocial";

const SingInPage = () => {
  return (
    <div className={css.overlay}>
      <div className={css.container}>
        <div className={css.containerImg}></div>
        <div className={css.rightContainer}>
          <h2 className={css.title}>FASCO</h2>
          <div>
            <p className={css.subtitle}>Sign In To FASCO</p>
            <BtnSocial />
            <p className={css.or}>-or-</p>
            <SignInMainForm />
            <a className={css.forgotPassword}>Forgot password?</a>
          </div>
          <p className={css.terms}>FASCO Terms & Codnitions</p>
        </div>
      </div>
    </div>
  );
};

export default SingInPage;
