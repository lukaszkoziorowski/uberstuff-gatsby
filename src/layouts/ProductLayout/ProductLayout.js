import React from "react";
import styles from "./ProductLayout.module.scss";

import { products } from "../../components/array";

const ProductLayout = (props) => {
  const product = products.find((item) => item.id === props.id);

  const colorsArray = ["white", "beige", "blue navy"];
  const randomColor =
    colorsArray[Math.floor(Math.random() * colorsArray.length)];

  return (
    <>
      <header className={styles.Product}>
        <figure className={styles.Product__figure}>
          <img
            src={product.img}
            className={styles.Product__image}
            alt="product image"
          />
        </figure>
        <section className={styles.Product__info}>
          <h2 className={styles.Product__name}>{product.name}</h2>
          <p className={styles.Product__desc}>{product.desc}</p>
          <span className={styles.Product__price}>
            <strong>{product.price}</strong>
          </span>
          <div className={styles.Product__options}>
            <select name="color" className={styles.Product__color}>
              <option value={product.color}>{product.color}</option>
              <option value={randomColor}>{randomColor}</option>
            </select>
            <input
              type="number"
              min="1"
              placeholder="1"
              className={styles.Product__number}
            />
            <button className={styles.Product__btn}>add to cart</button>
          </div>
        </section>
      </header>
      <section className={styles.SimilarProducts}></section>
    </>
  );
};

export default ProductLayout;
