import ProductFashionShop from "./ProductFashionShop/ProductFashionShop";
import FilterFashionShop from "./FilterFashionShop/FilterFashionShop";
import css from "./Shop.module.css";

const Shop = () => {
  return (
    <section>
      <div className={css.container}>
        <h2 className={css.title}>Fashion</h2>
        <p className={css.breadcrumbs}>Home {`>`} Fashion</p>
        <div className={css.containerShop}>
          <FilterFashionShop />
          <ProductFashionShop />
        </div>
      </div>
    </section>
  );
};

export default Shop;
