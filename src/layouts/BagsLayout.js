import React from "react";
import styles from "./Layout.module.scss";
import { Link } from "gatsby";
//paths
import bagPath from "../../static/images/bag2x.png";
import backpackPath from "../../static/images/backpack1.png";
import beigeBagPath from "../../static/images/bags/beige-bag.png";
import schoolBagPath from "../../static/images/bags/schoolbag.png";
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
        <div className={styles.LayoutHero__text}>
          <p className={styles.LayoutHero__span}>Black Canvas Bag</p>
          <p className={styles.LayoutHero__span}>
            <strong>$89.00</strong>
          </p>
        </div>
        <img
          className={styles.LayoutHero__img}
          src={bagPath}
          alt="canvas bag"
        />
      </header>
      <main className={styles.LayoutList}>
        <figure className={styles["LayoutList__itemFirst"]}>
          <Link className={styles.LayoutList__imgWrapper}>
            <img src={backpackPath} alt="backpack" />
          </Link>
          <figcaption className={styles.LayoutList__caption}>
            Breakline Backpack
            <strong className={styles.LayoutList__strong}>$79.00</strong>
          </figcaption>
        </figure>
        <figure className={styles.LayoutList__item}>
          <Link className={styles.LayoutList__imgWrapper}>
            <img src={beigeBagPath} alt="wallet" />
          </Link>
          <figcaption className={styles.LayoutList__caption}>
            Beige Woman Handbag
            <strong className={styles.LayoutList__strong}>$49.00</strong>
          </figcaption>
        </figure>
        <figure className={styles.LayoutList__item}>
          <Link className={styles.LayoutList__imgWrapper}>
            <img src={schoolBagPath} alt="belt" />
          </Link>
          <figcaption className={styles.LayoutList__caption}>
            Black School Bag
            <strong className={styles.LayoutList__strong}>$45.00</strong>
          </figcaption>
        </figure>
        <figure className={styles.LayoutList__item}>
          <Link className={styles.LayoutList__imgWrapper}>
            <img src={redBagPath} alt="slim wallet" />
          </Link>
          <figcaption className={styles.LayoutList__caption}>
            Red Bag
            <strong className={styles.LayoutList__strong}>$59.00</strong>
          </figcaption>
        </figure>

        <figure className={styles.LayoutList__item}>
          <Link className={styles.LayoutList__imgWrapper}>
            <img src={louisBagPath} alt="sunglasses" />
          </Link>
          <figcaption className={styles.LayoutList__caption}>
            Louis Vuitton Bag
            <strong className={styles.LayoutList__strong}>$149.00</strong>
          </figcaption>
        </figure>

        <figure className={styles.LayoutList__item}>
          <Link className={styles.LayoutList__imgWrapper}>
            <img src={womanBagPath} alt="iPhone 6 sleeve" />
          </Link>
          <figcaption className={styles.LayoutList__caption}>
            Leather Black Bag
            <strong className={styles.LayoutList__strong}>$69.00</strong>
          </figcaption>
        </figure>

        <figure className={styles.LayoutList__item}>
          <Link className={styles.LayoutList__imgWrapper}>
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
