import { Link } from "react-router-dom";
import css from "./HeaderReuse.module.css";
import BurgerMenu from "../../BurgerMenu/BurgerMenu";

const HeaderReuse = () => {
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
      </nav>

      <BurgerMenu />
    </header>
  );
};

export default HeaderReuse;
