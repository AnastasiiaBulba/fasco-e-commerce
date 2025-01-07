import { AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import css from "./HeaderReuse.module.css";

const HeaderAuth = () => {
  return (
    <>
      <Link to="/shop" className={css.navItem}>
        Shop
      </Link>
      <Link to="/products" className={css.navItem}>
        Products
      </Link>
      <Link to="/pages" className={css.navItem}>
        Pages
      </Link>
      <Link className={css.navItem}>
        <AiOutlineSearch />
      </Link>
      <Link to="/logout" className={css.navItem}>
        <FaUser />
      </Link>
      <Link to="/wishlist" className={css.navItem}>
        <AiOutlineHeart />
      </Link>
      <Link to="/cart" className={css.navItem}>
        <FaShoppingCart />
      </Link>
    </>
  );
};

export default HeaderAuth;
