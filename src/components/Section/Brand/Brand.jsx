import css from "./Brand.module.css";
import BrandCarousel from "./BrandCarousel";

const Brand = () => {
  return (
    <section className={css.brand}>
      <BrandCarousel />
    </section>
  );
};

export default Brand;
