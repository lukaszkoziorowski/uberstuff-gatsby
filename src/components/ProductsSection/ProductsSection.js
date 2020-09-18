import React from "react";
import styles from "./ProductsSection.module.scss";
import { Link } from "gatsby";
// import Button from "../UI/Button/Button";

//images
import backpackPath from "../../../static/images/backpack1.png";
import blackBackpackPath from "../../../static/images/black-backpack1.png";
import watchPath from "../../../static/images/watch1.png";
import macbookPath from "../../../static/images/macbook1.png";
import bagPath from "../../../static/images/bag1.png";

const ProductsSection = () => {
  return (
    <section className={styles.ProductsSection}>
      <article className={styles.ProductsSection__backpack}>
        <Link to="/bags/0">
          <img
            className={styles.ProductsSection__imgFirst}
            src={backpackPath}
            alt="breakline backpack"
          />
          <div className={styles.textDiv}>
            <span className={styles.textDiv__span}>Breakline Backpack</span>
            <span className={styles.textDiv__span}>
              <strong>$79.00</strong>
            </span>
          </div>
        </Link>
      </article>
      <article className={styles.ProductsSections__blackbackpack}>
        <Link to="/bags/2">
          <img
            className={styles.ProductsSection__img}
            src={blackBackpackPath}
            alt="black backpack"
          />
          <div className={styles.textDiv__fix}>
            <span className={styles.textDiv__span}>Black Canvas Backpack</span>
            <span className={styles.textDiv__span}>
              <strong>$69.00</strong>
            </span>
          </div>
        </Link>
      </article>
      <article className={styles.ProductsSection__watch}>
        <Link to="/watches/14">
          <img
            className={styles.ProductsSection__img}
            src={watchPath}
            alt="watch"
          />
          <div className={styles.textDiv__fix}>
            <span className={styles.textDiv__span}>Black MVMT Watch</span>
            <span className={styles.textDiv__span}>
              <strong>$129.00</strong>
            </span>
          </div>
        </Link>
      </article>
      <article className={styles.ProductsSection__macbook}>
        <Link to="/accessories/7">
          <img
            className={styles.ProductsSection__img}
            src={macbookPath}
            alt="Leather macBook Case"
          />
          <div className={styles.textDiv}>
            <span className={styles.textDiv__span}>Leather macBook Case</span>
            <span className={styles.textDiv__span}>
              <strong>$179.00</strong>
            </span>
          </div>
        </Link>
      </article>
      <article className={styles.ProductsSection__bag}>
        <Link to="/bags/21">
          <img
            className={styles.ProductsSection__img}
            src={bagPath}
            alt="bag"
          />
          <div className={styles.textDiv}>
            <span className={styles.textDiv__span}>Black Canvas Bag</span>
            <span className={styles.textDiv__span}>
              <strong>$89.00</strong>
            </span>
          </div>
        </Link>
      </article>
      <article className={styles.ProductsSection__text}>
        <div className={styles.textDiv__last}>
          <h3>Free Shipping.</h3>
          <h3>Amazing Customer Service.</h3>
          <h3>No custom or duty fees.</h3>
          <Link className={styles.ProductsSection__button}>more info</Link>
        </div>
      </article>
    </section>
  );
};

export default ProductsSection;
