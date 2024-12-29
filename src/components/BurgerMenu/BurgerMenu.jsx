import { useState } from "react";
import { Menu, X } from "lucide-react";
import MobileMenuModal from "../MobileMenuModal/MobileMenuModal";
import css from "./BurgerMenu.module.css";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className={css.burgerButton} onClick={toggleMenu}>
        {isOpen ? <X size={48} /> : <Menu size={48} />}
      </button>

      {isOpen && <MobileMenuModal onClose={toggleMenu} />}
    </>
  );
};

export default BurgerMenu;
