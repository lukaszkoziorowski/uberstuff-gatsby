import React from "react";
import styles from "./Layout.module.scss";
import { Link } from "gatsby";
//paths
import bagPath from "../../static/images/bag2x.png";
import backpackPath from "../../static/images/backpack1.png";
import walletPath from "../../static/images/black-wallet.png";
import beltPath from "../../static/images/belt.png";
import slimWalletPath from "../../static/images/slim-wallet.png";
import sunglassesPath from "../../static/images/sunglasses.png";
import sleevePath from "../../static/images/sleeve.png";
import tableLampPath from "../../static/images/table-lampp.png";

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
        <img className={styles.LayoutHero__img} src={bagPath} alt="lamp" />
      </header>
      <main className={styles.LayoutList}>
        <figure className={styles["LayoutList__itemFirst"]}>
          <Link className={styles.LayoutList__imgWrapper}>
            <img src={backpackPath} alt="macbook case" />
          </Link>
          <figcaption className={styles.LayoutList__caption}>
            Breakline Backpack
            <strong className={styles.LayoutList__strong}>$79.00</strong>
          </figcaption>
        </figure>
        <figure className={styles.LayoutList__item}>
          <Link className={styles.LayoutList__imgWrapper}>
            <img src={walletPath} alt="wallet" />
          </Link>
          <figcaption className={styles.LayoutList__caption}>
            Black Canvas Wallet
            <strong className={styles.LayoutList__strong}>$49.00</strong>
          </figcaption>
        </figure>
        <figure className={styles.LayoutList__item}>
          <Link className={styles.LayoutList__imgWrapper}>
            <img src={beltPath} alt="belt" />
          </Link>
          <figcaption className={styles.LayoutList__caption}>
            Black Leather Belt
            <strong className={styles.LayoutList__strong}>$59.00</strong>
          </figcaption>
        </figure>
        <figure className={styles.LayoutList__item}>
          <Link className={styles.LayoutList__imgWrapper}>
            <img src={slimWalletPath} alt="slim wallet" />
          </Link>
          <figcaption className={styles.LayoutList__caption}>
            Black Genuine Card Holder
            <strong className={styles.LayoutList__strong}>$29.00</strong>
          </figcaption>
        </figure>

        <figure className={styles.LayoutList__item}>
          <Link className={styles.LayoutList__imgWrapper}>
            <img src={sunglassesPath} alt="sunglasses" />
          </Link>
          <figcaption className={styles.LayoutList__caption}>
            Black Ray Ban Glasses
            <strong className={styles.LayoutList__strong}>$129.00</strong>
          </figcaption>
        </figure>

        <figure className={styles.LayoutList__item}>
          <Link className={styles.LayoutList__imgWrapper}>
            <img src={sleevePath} alt="iPhone 6 sleeve" />
          </Link>
          <figcaption className={styles.LayoutList__caption}>
            Leather iPhone6 Sleeve
            <strong className={styles.LayoutList__strong}>$69.00</strong>
          </figcaption>
        </figure>

        <figure className={styles.LayoutList__item}>
          <Link className={styles.LayoutList__imgWrapper}>
            <img src={tableLampPath} alt="lamp" />
          </Link>
          <figcaption className={styles.LayoutList__caption}>
            Wooden Table Lamp
            <strong className={styles.LayoutList__strong}>$49.00</strong>
          </figcaption>
        </figure>
      </main>
    </>
  );
};

export default BagsLayout;
