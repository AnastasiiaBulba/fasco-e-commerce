import css from "./Product.module.css";
import Colors from "../Colors/Colors";

const Product = ({ title, image, price, colors }) => {
  return (
    <div className={css.containerProduct}>
      <img className={css.imageShop} src={image} alt={title} />
      <div className={css.containerInfo}>
        <h4 className={css.title}>{title}</h4>
        <p className={css.price}>${price}</p>
        <Colors colors={colors} />
      </div>
    </div>
  );
};
export default Product;
