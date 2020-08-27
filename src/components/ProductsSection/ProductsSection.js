import React from "react";
import styles from "./ProductsSection.module.scss";
import { Link } from "gatsby";
import Button from "../UI/Button/Button";

//images
import backpackPath from "../../../static/images/item 1 img.png";
import blackBackpackPath from "../../../static/images/item 2 img.png";
import watchPath from "../../../static/images/item 3 img.png";
import macbookPath from "../../../static/images/item 4 img.png";
import bagPath from "../../../static/images/item 5 img.png";

const ProductsSection = () => {
  return (
    <section className={styles.ProductsSection}>
      <article className={styles.ProductsSection__backpack}>
        <Link to="/bags">
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
        <Link to="/bags">
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
        <Link to="/watches">
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
        <Link to="/accesories">
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
        <Link to="/bags">
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
          <button className={styles.ProductsSection__button}>more info</button>
        </div>
      </article>
    </section>
  );
};

export default ProductsSection;
