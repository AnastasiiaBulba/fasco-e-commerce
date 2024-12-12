import css from "./Brand.module.css";
import BrandCarousel from "./BrandCarousel";

const Brand = () => {
  return (
    <section id="brand" className={css.brand}>
      <BrandCarousel />
    </section>
  );
};

export default Brand;
