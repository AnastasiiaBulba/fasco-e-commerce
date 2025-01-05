import { useState, useEffect } from "react";
import css from "./Brand.module.css";
import logoChanel1x from "../../../assets/photo/brand/logo-chanel-1x.png";
import logoChanel2x from "../../../assets/photo/brand/logo-chanel-2x.png";
import logoLouis1x from "../../../assets/photo/brand/logo-louis-1x.png";
import logoLouis2x from "../../../assets/photo/brand/logo-louis-2x.png";
import logoPrada1x from "../../../assets/photo/brand/logo-prada-1x.png";
import logoPrada2x from "../../../assets/photo/brand/logo-prada-2x.png";
import logoCalvin1x from "../../../assets/photo/brand/logo-calvin-1x.png";
import logoCalvin2x from "../../../assets/photo/brand/logo-calvin-2x.png";
import logoDenim1x from "../../../assets/photo/brand/logo-denim-1x.png";
import logoDenim2x from "../../../assets/photo/brand/logo-denim-2x.png";

const BrandCarousel = () => {
  const brands = [
    { x1: logoChanel1x, x2: logoChanel2x, alt: "Image logo brand Chanel" },
    { x1: logoLouis1x, x2: logoLouis2x, alt: "Image logo brand Louis Vuitton" },
    { x1: logoPrada1x, x2: logoPrada2x, alt: "Image logo brand Prada" },
    {
      x1: logoCalvin1x,
      x2: logoCalvin2x,
      alt: "Image logo brand Calvin Klein",
    },
    { x1: logoDenim1x, x2: logoDenim2x, alt: "Image logo brand Denim" },
  ];

  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prevPosition) => {
        const trackWidth = document.querySelector(
          `.${css.brandTrack}`
        ).offsetWidth;

        if (Math.abs(prevPosition) >= trackWidth) {
          return 0;
        }

        return prevPosition - 1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const extendedBrands = [
    ...brands,
    ...brands,
    ...brands,
    ...brands,
    ...brands,
  ];

  return (
    <div className={css.brandCarousel}>
      <div
        className={css.brandTrack}
        style={{
          transform: `translateX(${position}px)`,
          transition: "transform linear",
        }}
      >
        {extendedBrands.map((brand, index) => (
          <img
            key={index}
            src={brand.x1}
            srcSet={`${brand.x1} 1x, ${brand.x2} 2x`}
            alt={brand.alt}
            className={css.brandImg}
          />
        ))}
      </div>
    </div>
  );
};

export default BrandCarousel;
