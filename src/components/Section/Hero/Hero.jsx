import css from "./Hero.module.css";
import heroLeft1x from "../../../assets/photo/photoHero/hero-left-1x.png";
import heroLeft2x from "../../../assets/photo/photoHero/hero-left-2x.png";
import heroCenterTop1x from "../../../assets/photo/photoHero/hero-center-top-1x.png";
import heroCenterTop2x from "../../../assets/photo/photoHero/hero-center-top-2x.png";
import heroCenterBottom1x from "../../../assets/photo/photoHero/hero-center-bottom-1x.png";
import heroCenterBottom2x from "../../../assets/photo/photoHero/hero-center-bottom-2x.png";
import heroRight1x from "../../../assets/photo/photoHero/hero-right-1x.png";
import heroRight2x from "../../../assets/photo/photoHero/hero-right-2x.png";

const Hero = () => {
  return (
    <>
      <section className={css.hero}>
        <div className={css.heroLeft}>
          <img
            src={heroLeft1x}
            srcSet={`
            ${heroLeft1x} 1x, 
            ${heroLeft2x} 2x`}
            alt="men's clothing full image"
            className={css.heroLeftImg}
          />
        </div>
        <div className={css.heroCenter}>
          <div className={css.heroCenterTop}>
            <img
              src={heroCenterTop1x}
              srcSet={`
                ${heroCenterTop1x} 1x,
                ${heroCenterTop2x} 2x`}
              alt="women's clothing collection at discounts"
              className={css.heroCenterTopImg}
            />
          </div>
          <div className={css.heroCenterCenter}>
            <p className={css.heroParagraphOne}>ULTIMATE</p>
            <h2 className={css.heroTitle}>SALE</h2>
            <p className={css.heroParagraphTwo}>NEW COLLECTION</p>
            <button className={css.heroBtn}>SHOP NOW</button>
          </div>
          <div className={css.heroCenterBottom}>
            <img
              src={heroCenterBottom1x}
              srcSet={`
                ${heroCenterBottom1x} 1x,
                ${heroCenterBottom2x} 2x
              `}
              alt="women's clothing collection at discounts"
              className={css.heroCenterBottomImg}
            />
          </div>
        </div>
        <div className={css.heroRight}>
          <img
            src={heroRight1x}
            srcSet={`
              ${heroRight1x} 1x,
              ${heroRight2x} 2x
            `}
            alt="men's clothing full image"
            className={css.heroRightImg}
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
