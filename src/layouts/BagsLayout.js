import React from "react";
import styles from "./Layout.module.scss";
import { Link } from "gatsby";
// import { products } from "../components/array";
//paths
import bagPath from "../../static/images/bag2x.png";
import backpackPath from "../../static/images/backpack1.png";
import beigeBagPath from "../../static/images/bags/beige-bag.png";
import blackBackpackPath from "../../static/images/black-backpack1.png";
import redBagPath from "../../static/images/bags/red-bag.png";
import louisBagPath from "../../static/images/bags/louis-bag.png";
import womanBagPath from "../../static/images/bags/woman-bag.png";
import yellowBackpackPath from "../../static/images/bags/yellow-backpack.png";

const BagsLayout = () => {
  return (
    <>
      <header className={styles.LayoutHero}>
        <h1 className={styles["LayoutHero__titleBags"]}>Bags</h1>
        <button className={styles.LayoutHero__btn}>explore category</button>
        <Link to="/products/bags/canvasBag" className={styles.LayoutHero__text}>
          <p className={styles.LayoutHero__span}>Black Canvas Bag</p>
          <p className={styles.LayoutHero__span}>
            <strong>$89.00</strong>
          </p>
        </Link>
        <img
          className={styles.LayoutHero__img}
          src={bagPath}
          alt="canvas bag"
        />
      </header>
      <main className={styles.LayoutList}>
        <figure className={styles["LayoutList__itemFirst"]}>
          <Link
            to="/products/bags/breaklineBackpack"
            className={styles.LayoutList__imgWrapper}
          >
            <img src={backpackPath} alt="backpack" />
          </Link>
          <figcaption className={styles.LayoutList__caption}>
            Breakline Backpack
            <strong className={styles.LayoutList__strong}>$79.00</strong>
          </figcaption>
        </figure>
        <figure className={styles.LayoutList__item}>
          <Link
            to="/products/bags/beigeHandbag"
            className={styles.LayoutList__imgWrapper}
          >
            <img src={beigeBagPath} alt="wallet" />
          </Link>
          <figcaption className={styles.LayoutList__caption}>
            Beige Woman Handbag
            <strong className={styles.LayoutList__strong}>$49.00</strong>
          </figcaption>
        </figure>
        <figure className={styles.LayoutList__item}>
          <Link
            to="/products/bags/blackBackpack"
            className={styles.LayoutList__imgWrapper}
          >
            <img src={blackBackpackPath} alt="belt" />
          </Link>
          <figcaption className={styles.LayoutList__caption}>
            Black Canvas Backpack
            <strong className={styles.LayoutList__strong}>$69.00</strong>
          </figcaption>
        </figure>
        <figure className={styles.LayoutList__item}>
          <Link
            to="/products/bags/redBag"
            className={styles.LayoutList__imgWrapper}
          >
            <img src={redBagPath} alt="slim wallet" />
          </Link>
          <figcaption className={styles.LayoutList__caption}>
            Red Bag
            <strong className={styles.LayoutList__strong}>$59.00</strong>
          </figcaption>
        </figure>

        <figure className={styles.LayoutList__item}>
          <Link
            to="/products/bags/louisBag"
            className={styles.LayoutList__imgWrapper}
          >
            <img src={louisBagPath} alt="sunglasses" />
          </Link>
          <figcaption className={styles.LayoutList__caption}>
            Louis Vuitton Bag
            <strong className={styles.LayoutList__strong}>$149.00</strong>
          </figcaption>
        </figure>

        <figure className={styles.LayoutList__item}>
          <Link
            to="/products/bags/leatherBag"
            className={styles.LayoutList__imgWrapper}
          >
            <img src={womanBagPath} alt="iPhone 6 sleeve" />
          </Link>
          <figcaption className={styles.LayoutList__caption}>
            Leather Black Bag
            <strong className={styles.LayoutList__strong}>$69.00</strong>
          </figcaption>
        </figure>

        <figure className={styles.LayoutList__item}>
          <Link
            to="/products/bags/yellowBackpack"
            className={styles.LayoutList__imgWrapper}
          >
            <img src={yellowBackpackPath} alt="lamp" />
          </Link>
          <figcaption className={styles.LayoutList__caption}>
            Yellow Canvas Backpack
            <strong className={styles.LayoutList__strong}>$79.00</strong>
          </figcaption>
        </figure>
      </main>
    </>
  );
};

export default BagsLayout;
