import React from "react";
import styles from "./Layout.module.scss";
import { Link } from "gatsby";
//paths
import lampPath from "../../static/images/header-lamp.png";
import macbookPath from "../../static/images/macbook1.png";
import walletPath from "../../static/images/black-wallet.png";
import beltPath from "../../static/images/belt.png";
import slimWalletPath from "../../static/images/slim-wallet.png";
import sunglassesPath from "../../static/images/sunglasses.png";
import sleevePath from "../../static/images/sleeve.png";
import tableLampPath from "../../static/images/table-lampp.png";

const AccessoriesLayout = () => {
  return (
    <>
      <header className={styles.LayoutHero}>
        <h1 className={styles.LayoutHero__title}>Accessories</h1>
        <button className={styles.LayoutHero__btn}>explore category</button>
        <Link
          to="/products/accessories/lamp"
          className={styles.LayoutHero__text}
        >
          <p className={styles.LayoutHero__span}>Wooden Desk Lamp</p>
          <p className={styles.LayoutHero__span}>
            <strong>$39.00</strong>
          </p>
        </Link>
        <img className={styles.LayoutHero__img} src={lampPath} alt="lamp" />
      </header>
      <main className={styles.LayoutList}>
        <figure className={styles["LayoutList__itemFirst"]}>
          <Link
            to="/products/accessories/macbookCase"
            className={styles.LayoutList__imgWrapper}
          >
            <img src={macbookPath} alt="macbook case" />
          </Link>
          <figcaption className={styles.LayoutList__caption}>
            Leather macBook Case
            <strong className={styles.LayoutList__strong}>$179.00</strong>
          </figcaption>
        </figure>
        <figure className={styles.LayoutList__item}>
          <Link
            to="/products/accessories/blackWallet"
            className={styles.LayoutList__imgWrapper}
          >
            <img src={walletPath} alt="wallet" />
          </Link>
          <figcaption className={styles.LayoutList__caption}>
            Black Canvas Wallet
            <strong className={styles.LayoutList__strong}>$49.00</strong>
          </figcaption>
        </figure>
        <figure className={styles.LayoutList__item}>
          <Link
            to="/products/accessories/blackBelt"
            className={styles.LayoutList__imgWrapper}
          >
            <img src={beltPath} alt="belt" />
          </Link>
          <figcaption className={styles.LayoutList__caption}>
            Black Leather Belt
            <strong className={styles.LayoutList__strong}>$59.00</strong>
          </figcaption>
        </figure>
        <figure className={styles.LayoutList__item}>
          <Link
            to="/products/accessories/cardHolder"
            className={styles.LayoutList__imgWrapper}
          >
            <img src={slimWalletPath} alt="slim wallet" />
          </Link>
          <figcaption className={styles.LayoutList__caption}>
            Black Genuine Card Holder
            <strong className={styles.LayoutList__strong}>$29.00</strong>
          </figcaption>
        </figure>

        <figure className={styles.LayoutList__item}>
          <Link
            to="/products/accessories/raybanGlasses"
            className={styles.LayoutList__imgWrapper}
          >
            <img src={sunglassesPath} alt="sunglasses" />
          </Link>
          <figcaption className={styles.LayoutList__caption}>
            Black Ray Ban Glasses
            <strong className={styles.LayoutList__strong}>$129.00</strong>
          </figcaption>
        </figure>

        <figure className={styles.LayoutList__item}>
          <Link
            to="/products/accessories/iphone6Sleeve"
            className={styles.LayoutList__imgWrapper}
          >
            <img src={sleevePath} alt="iPhone 6 sleeve" />
          </Link>
          <figcaption className={styles.LayoutList__caption}>
            Leather iPhone6 Sleeve
            <strong className={styles.LayoutList__strong}>$69.00</strong>
          </figcaption>
        </figure>

        <figure className={styles.LayoutList__item}>
          <Link
            to="/products/accessories/tableLamp"
            className={styles.LayoutList__imgWrapper}
          >
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

export default AccessoriesLayout;
