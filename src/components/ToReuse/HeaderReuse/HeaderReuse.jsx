import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
/*
import { AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";*/
import { useSelector } from "react-redux";
import css from "./HeaderReuse.module.css";
import BurgerMenu from "../../BurgerMenu/BurgerMenu";
import HeaderAuth from "./HeaderAuth";

const HeaderReuse = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <header className={css.header}>
      <div className={css.container}>
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

              <ScrollLink
                to="deals"
                smooth={true}
                duration={500}
                className={css.navItem}
              >
                Deals
              </ScrollLink>

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
            <HeaderAuth />
          )}
        </nav>

        <BurgerMenu />
      </div>
    </header>
  );
};

export default HeaderReuse;
