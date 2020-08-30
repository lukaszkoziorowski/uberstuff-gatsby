import React from "react";
import styles from "./Layout.module.scss";
//paths
import lampPath from "../../static/images/header-lamp.png";

const AccessoriesLayout = () => {
  return (
    <>
      <header className={styles.LayoutHero}>
        <h1 className={styles.LayoutHero__title}>Accessories</h1>
        <button className={styles.LayoutHero__btn}>explore category</button>
        <div className={styles.LayoutHero__text}>
          <p className={styles.LayoutHero__span}>Wooden Desk Lamp</p>
          <p className={styles.LayoutHero__span}>
            <strong>$39.00</strong>
          </p>
        </div>
        <img className={styles.LayoutHero__img} src={lampPath} alt="lamp" />
      </header>
      <main className={styles.LayoutList}>
        <figure className={styles.LayoutList__item}>
          <img src="" alt="macbook case" />
        </figure>
      </main>
    </>
  );
};

export default AccessoriesLayout;
