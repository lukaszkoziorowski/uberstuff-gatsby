import React from "react";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <header className={styles.Hero}>
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
    </header>
  );
};

export default Hero;
