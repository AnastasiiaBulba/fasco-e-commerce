import css from "./DealsTimer.module.css";

const DealsTimer = () => {
  return (
    <>
      <p className={css.p}>Hurry, Before It’s Too Late!</p>
      <div className={css.timer}>
        <div className={css.numberWrapper}>
          <span className={css.number}></span>
          <span className={css.signature}></span>
        </div>
        <div className={css.numberWrapper}>
          <span className={css.number}></span>
          <span className={css.signature}></span>
        </div>
        <div className={css.numberWrapper}>
          <span className={css.number}></span>
          <span className={css.signature}></span>
        </div>
        <div className={css.numberWrapper}>
          <span className={css.number}></span>
          <span className={css.signature}></span>
        </div>
      </div>
    </>
  );
};

export default DealsTimer;
