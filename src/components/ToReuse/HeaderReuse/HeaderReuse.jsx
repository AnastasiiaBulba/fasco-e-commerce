import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

import { useSelector } from "react-redux";
import css from "./HeaderReuse.module.css";
import BurgerMenu from "../../BurgerMenu/BurgerMenu";

const HeaderReuse = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <header className={css.header}>
      <div className={css.logoContainer}>
        <Link to="/" className={css.logoLink}>
          <span className={css.logoText}>FASCO</span>
        </Link>
      </div>
      <nav className={css.navigation}>
        <Link to="/" className={css.navItem}>
          Home
        </Link>

        {!isAuthenticated ? (
          <>
            <ScrollLink
              to="brand"
              smooth={true}
              duration={500}
              className={css.navItem}
            >
              Brand
            </ScrollLink>

            <Link to="/deals" className={css.navItem}>
              Deals
            </Link>
            <Link to="/new-arrivals" className={css.navItem}>
              New Arrivals
            </Link>
            <Link to="/packages" className={css.navItem}>
              Packages
            </Link>
            <Link to="/signin" className={css.navItem}>
              Sign In
            </Link>
            <Link to="/signup" className={css.navItemBtn}>
              Sign Up
            </Link>
          </>
        ) : (
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
            <Link to="/logout" className={css.navItemBtn}>
              Logout
            </Link>
          </>
        )}
      </nav>

      <BurgerMenu />
    </header>
  );
};

export default HeaderReuse;
