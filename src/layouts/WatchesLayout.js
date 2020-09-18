import React from "react";
import { Link } from "gatsby";
import styles from "./Layout.module.scss";

//paths
import mvmtWatchPath from "../../static/images/watch1.png";
import smartwatchPath from "../../static/images/watches/smartwatch.png";
import arcadiaWatchPath from "../../static/images/watches/arcadia-watch.png";
import minutemanWatchPath from "../../static/images/watches/minuteman-watch.png";
import raidillonWatchPath from "../../static/images/watches/raidillon-watch.png";
import womanWatchPath from "../../static/images/watches/woman-watch.png";
import pocketWatchPath from "../../static/images/watches/pocket-watch.png";
import grovanaWatchPath from "../../static/images/watches/grovana-watch.png";

const WatchesLayout = () => {
  return (
    <>
      <header className={styles.LayoutHero}>
        <h1 className={styles["LayoutHero__titleWatches"]}>Watches</h1>
        <button className={styles.LayoutHero__btn}>explore category</button>
        <Link
          to="/products/watches/blackSmartwatch"
          className={styles.LayoutHero__text}
        >
          <p className={styles.LayoutHero__span}>Black Smartwatch</p>
          <p className={styles.LayoutHero__span}>
            <strong>$159.00</strong>
          </p>
        </Link>
        <img
          className={styles["LayoutHero__imgWatches"]}
          src={smartwatchPath}
          alt="smartwatch"
        />
      </header>
      <main className={styles.LayoutList}>
        <figure className={styles["LayoutList__itemFirst"]}>
          <Link
            to="/products/watches/mvmt"
            className={styles.LayoutList__imgWrapper}
          >
            <img src={mvmtWatchPath} alt="mvmt watch" />
          </Link>
          <figcaption className={styles.LayoutList__caption}>
            Black MVMT Watch
            <strong className={styles.LayoutList__strong}>$129.00</strong>
          </figcaption>
        </figure>
        <figure className={styles.LayoutList__item}>
          <Link
            to="/products/watches/arcadia"
            className={styles.LayoutList__imgWrapper}
          >
            <img src={arcadiaWatchPath} alt="arcadia watch" />
          </Link>
          <figcaption className={styles.LayoutList__caption}>
            Arcadia Black Watch
            <strong className={styles.LayoutList__strong}>$99.00</strong>
          </figcaption>
        </figure>
        <figure className={styles.LayoutList__item}>
          <Link
            to="/products/watches/minuteman"
            className={styles.LayoutList__imgWrapper}
          >
            <img src={minutemanWatchPath} alt="minuteman watch" />
          </Link>
          <figcaption className={styles.LayoutList__caption}>
            Minuteman Watch
            <strong className={styles.LayoutList__strong}>$145.00</strong>
          </figcaption>
        </figure>
        <figure className={styles.LayoutList__item}>
          <Link
            to="/products/watches/raidillon"
            className={styles.LayoutList__imgWrapper}
          >
            <img src={raidillonWatchPath} alt="raidillon watch" />
          </Link>
          <figcaption className={styles.LayoutList__caption}>
            Raidillon Watch
            <strong className={styles.LayoutList__strong}>$159.00</strong>
          </figcaption>
        </figure>

        <figure className={styles.LayoutList__item}>
          <Link
            to="/products/watches/sekonda"
            className={styles.LayoutList__imgWrapper}
          >
            <img src={womanWatchPath} alt="women's watch" />
          </Link>
          <figcaption className={styles.LayoutList__caption}>
            Women's Sekonda Watch
            <strong className={styles.LayoutList__strong}>$179.00</strong>
          </figcaption>
        </figure>

        <figure className={styles.LayoutList__item}>
          <Link
            to="/products/watches/pocketWatch"
            className={styles.LayoutList__imgWrapper}
          >
            <img src={pocketWatchPath} alt="pocket watch" />
          </Link>
          <figcaption className={styles.LayoutList__caption}>
            Classic Pocket Watch
            <strong className={styles.LayoutList__strong}>$89.00</strong>
          </figcaption>
        </figure>

        <figure className={styles.LayoutList__item}>
          <Link
            to="/products/watches/grovana"
            className={styles.LayoutList__imgWrapper}
          >
            <img src={grovanaWatchPath} alt="grovana watch" />
          </Link>
          <figcaption className={styles.LayoutList__caption}>
            Grovana Watch
            <strong className={styles.LayoutList__strong}>$129.00</strong>
          </figcaption>
        </figure>
      </main>
    </>
  );
};

export default WatchesLayout;
