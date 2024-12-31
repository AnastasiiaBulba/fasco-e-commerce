import css from "./Deals.module.css";
import DealsTimer from "./DealsTimer";

const Deals = () => {
  const targetDate = "2025-03-25T23:59:59";

  return (
    <section id="deals" className={css.deals}>
      <div className={css.container}>
        <div className={css.wrapper}>
          <h2 className={css.title}>Deals Of The Month</h2>
          <p className={css.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
            sollicitudin
          </p>
          <button className={css.btn}>Buy Now</button>
          <DealsTimer targetDate={targetDate} />
        </div>
        <div className={css.wrapperPhoto}></div>
      </div>
    </section>
  );
};

export default Deals;
