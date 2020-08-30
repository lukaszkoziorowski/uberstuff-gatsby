import React from "react";
import styles from "./Hero.module.scss";
import bagPath from "../../../static/images/bag2x.png";
import backgroundPath from "../../../static/images/img.png";

const Hero = () => {
  return (
    <header
      style={{ backgroundImage: `url(${backgroundPath})` }}
      className={styles.Hero}
    >
      <div className={styles.Hero__wrapper}>
        <h1 className={styles.Hero__title}>
          Uber cool stuff for amazing people.
        </h1>
        <button className={styles.Hero__button}>explore shop</button>
        <div className={styles.Hero__text}>
          <span className={styles.Hero__span}>Black Canvas Bag</span>
          <span className={styles.Hero__span}>
            <strong>$89.00</strong>
          </span>
        </div>
        <img className={styles.Hero__img} src={bagPath} alt="bag" />
      </div>
    </header>
  );
};

export default Hero;
