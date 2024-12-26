import css from "./SingUp.module.css";
import RightContainer from "../../components/Pages/SignInUp/RightContainerSign/RightContainer";

const SingUpPage = () => {
  return (
    <div className={css.overlay}>
      <div className={css.container}>
        <div className={css.containerImg}></div>
        <div className={css.rightContainer}>
          <RightContainer />
          <p className={css.terms}>FASCO Terms & Codnitions</p>
        </div>
      </div>
    </div>
  );
};

export default SingUpPage;
