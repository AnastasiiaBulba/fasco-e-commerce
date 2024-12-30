import css from "./Deals.module.css";
import DealsTimer from "./DealsTimer";

const Deals = () => {
  return (
    <section className={css.deals}>
      <div className={css.wrapper}>
        <h2 className={css.title}>Deals Of The Month</h2>
        <p className={css.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
          sollicitudin
        </p>
        <button className={css.btn}>Buy Now</button>
        <DealsTimer />
      </div>
      <div className={css.wrapperPhoto}></div>
    </section>
  );
};

export default Deals;
