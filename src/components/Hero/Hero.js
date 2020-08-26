import React from "react";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <header className={styles.Hero}>
      <h1 className={styles.Hero__title}>
        Uber cool stuff for amazing people.
      </h1>
    </header>
  );
};

export default Hero;
