import css from "./FilterFashionShop.module.css";
import { FaAngleDown } from "react-icons/fa";

const FilterFashionShop = () => {
  return (
    <div className={css.containerFilterFashionShop}>
      <h3 className={css.filterTitle}>Filters</h3>

      <div className={css.filterGroup}>
        <h4 className={css.subtitle}>Size</h4>
        <ul className={css.sizeList}>
          <li className={css.sizeItem}>S</li>
          <li className={css.sizeItem}>M</li>
          <li className={css.sizeItem}>L</li>
          <li className={css.sizeItem}>XL</li>
        </ul>
      </div>

      <div className={css.filterGroup}>
        <h4 className={css.subtitle}>Color</h4>
        <ul className={css.colorList}>
          <li
            className={css.colorItem}
            style={{ backgroundColor: "#ff6c6c" }}
          ></li>
          <li
            className={css.colorItem}
            style={{ backgroundColor: "#ff7629" }}
          ></li>
          <li
            className={css.colorItem}
            style={{ backgroundColor: " #fff06c" }}
          ></li>
          <li
            className={css.colorItem}
            style={{ backgroundColor: "#9bff6c" }}
          ></li>
          <li
            className={css.colorItem}
            style={{ backgroundColor: " #6cffdc" }}
          ></li>
          <li
            className={css.colorItem}
            style={{ backgroundColor: "#6ca7ff" }}
          ></li>
          <li
            className={css.colorItem}
            style={{ backgroundColor: "#fc6cff" }}
          ></li>
          <li
            className={css.colorItem}
            style={{ backgroundColor: "#fff" }}
          ></li>
          <li
            className={css.colorItem}
            style={{ backgroundColor: "gray" }}
          ></li>
          <li
            className={css.colorItem}
            style={{ backgroundColor: "brown" }}
          ></li>
          <li
            className={css.colorItem}
            style={{ backgroundColor: "pink" }}
          ></li>
          <li
            className={css.colorItem}
            style={{ backgroundColor: "cyan" }}
          ></li>
        </ul>
      </div>

      <div className={css.filterGroup}>
        <h4 className={css.subtitle}>Price</h4>
        <ul className={css.priceList}>
          <li className={css.priceItem}>$0 - $100</li>
          <li className={css.priceItem}>$100 - $200</li>
          <li className={css.priceItem}>$200 - $300</li>
          <li className={css.priceItem}>$300 - $400</li>
          <li className={css.priceItem}>$400 - $500</li>
        </ul>
      </div>

      <div className={css.filterGroup}>
        <h4 className={css.subtitle}>
          Brands
          <FaAngleDown />
        </h4>
        <ul className={css.brandsList}>
          <li className={css.item}>Minimog</li>
          <li className={css.item}>Retrolie</li>
          <li className={css.item}>Brook</li>
          <li className={css.item}>Learts</li>
          <li className={css.item}>Vagabond</li>
          <li className={css.item}>Abby</li>
        </ul>
      </div>

      <div className={css.filterGroup}>
        <h4 className={css.subtitle}>
          Collections
          <FaAngleDown />
        </h4>

        <ul className={css.collectionsList}>
          <li className={css.item}>All products</li>
          <li className={css.item}> Best sellers</li>
          <li className={css.item}>New Arrivals</li>
          <li className={css.item}>Accessories</li>
        </ul>
      </div>

      <div className={css.filterGroup}>
        <h4 className={css.subtitle}>
          Tag
          <FaAngleDown />
        </h4>
        <ul>
          <li className={css.item}>Fashion</li>
          <li className={css.item}>Hats</li>
          <li className={css.item}>Sandal</li>
          <li className={css.item}>Bags</li>
          <li className={css.item}>Snacker</li>
          <li className={css.item}>Denim</li>
          <li className={css.item}>Minimog</li>
          <li className={css.item}>Beachwear</li>
          <li className={css.item}>Dress</li>
        </ul>
      </div>
    </div>
  );
};

export default FilterFashionShop;
