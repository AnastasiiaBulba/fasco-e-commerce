import { Link } from "react-router-dom";
import css from "./MobileMenuModal.module.css";

const MobileMenuModal = ({ onClose }) => {
  return (
    <div className={css.mobileMenuOverlay}>
      <div className={css.mobileMenuContainer}>
        <nav className={css.mobileNavigation}>
          <Link to="/" className={css.navItem} onClick={onClose}>
            Home
          </Link>
          <Link to="/deals" className={css.navItem} onClick={onClose}>
            Deals
          </Link>
          <Link to="/new-arrivals" className={css.navItem} onClick={onClose}>
            New Arrivals
          </Link>
          <Link to="/packages" className={css.navItem} onClick={onClose}>
            Packages
          </Link>
          <Link to="/signin" className={css.navItem} onClick={onClose}>
            Sign In
          </Link>
          <Link to="/signup" className={css.navItemBtn} onClick={onClose}>
            Sign Up
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenuModal;
