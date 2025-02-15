import css from "./SingInPage.module.css";
import RightContainer from "../../components/Pages/SignInUp/RightContainerSign/RightContainer";
const SingInPage = () => {
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

export default SingInPage;
