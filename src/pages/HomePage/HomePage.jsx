// import css from "./HomePage.module.css";
import { Element } from "react-scroll";
import HeaderReuse from "../../components/ToReuse/HeaderReuse/HeaderReuse";
import Hero from "../../components/Section/Hero/Hero";
import Brand from "../../components/Section/Brand/Brand";
import Deals from "../../components/ToReuse/Deals/Deals";

const HomePage = () => {
  return (
    <div>
      <HeaderReuse />
      <Hero />
      <Element name="brand">
        <Brand />
      </Element>
      <Deals />
    </div>
  );
};

export default HomePage;
