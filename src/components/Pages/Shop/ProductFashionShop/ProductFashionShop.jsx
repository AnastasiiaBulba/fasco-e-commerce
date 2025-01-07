import css from "./ProductFashionShop.module.css";
import sprite from "../../../../assets/icons/sprite.svg";

const ProductFashionShop = () => {
  return (
    <div className={css.RightContainer}>
      <div className={css.containerFilter}>
        <div className={css.dropdown}>
          <button className={css.dropdownBtn}>Choisir</button>
          <ul className={css.dropdownContent}>
            <li className={css.itemDropdown}>Best sellers</li>
            <li className={css.itemDropdown}>New arrivals</li>
            <li className={css.itemDropdown}>Accessories</li>
          </ul>
        </div>
        <ul className={css.iconsList}>
          <li>
            <svg className={css.icon}>
              <use href={`${sprite}#iconLineH`}></use>
            </svg>
          </li>
          <li>
            <svg className={css.icon}>
              <use href={`${sprite}#icon-lineV`}></use>
            </svg>
          </li>
          <li>
            <svg className={css.icon}>
              <use href={`${sprite}#icon-lineV1`}></use>
            </svg>
          </li>
          <li>
            <svg className={css.icon}>
              <use href={`${sprite}#icon-Layer-2`}></use>
            </svg>
          </li>
          <li>
            <svg className={css.icon}>
              <use href={`${sprite}#icon-lineV3`}></use>
            </svg>
          </li>
        </ul>
      </div>
      <div className={css.containerProducts}></div>
    </div>
  );
};

export default ProductFashionShop;
