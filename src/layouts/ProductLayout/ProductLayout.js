import React from "react";
import styles from "./ProductLayout.module.scss";
import { Link } from "gatsby";

import { products } from "../../components/array";

const ProductLayout = (props) => {
  const product = products.find((item) => item.id === props.id);

  const colorsArray = ["white", "beige", "blue navy"];
  const randomColor =
    colorsArray[Math.floor(Math.random() * colorsArray.length)];
  const similar1 = products[Math.floor(Math.random() * products.length)];
  console.log(similar1);
  const similar2 = products[Math.floor(Math.random() * products.length)];
  const similar3 = products[Math.floor(Math.random() * products.length)];
  const similarProds = [similar1, similar2, similar3];

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
      <section className={styles.SimilarProducts}>
        <h2 className={styles.SimilarProducts__heading}>You may also like</h2>
        <section className={styles.SimilarProducts__products}>
          <Link
            to={`/${similar1.category}/${similar1.id}`}
            className={styles.SimilarProducts__product}
          >
            <figure className={styles.SimilarProducts__figure}>
              <img
                className={styles.SimilarProducts__image}
                src={similar1.img}
                alt="product image"
              />
            </figure>

            <span className={styles.SimilarProducts__name}>
              {similar1.name}
            </span>
            <span className={styles.SimilarProducts__price}>
              <strong>{similar1.price}</strong>
            </span>
          </Link>
          <Link
            to={`/${similar2.category}/${similar2.id}`}
            className={styles.SimilarProducts__product}
          >
            <figure className={styles.SimilarProducts__figure}>
              <img
                className={styles.SimilarProducts__image}
                src={similar2.img}
                alt="product image"
              />
            </figure>

            <span className={styles.SimilarProducts__name}>
              {similar2.name}
            </span>
            <span className={styles.SimilarProducts__price}>
              <strong>{similar2.price}</strong>
            </span>
          </Link>
          <Link
            to={`/${similar3.category}/${similar3.id}`}
            className={styles.SimilarProducts__product}
          >
            <figure className={styles.SimilarProducts__figure}>
              <img
                className={styles.SimilarProducts__image}
                src={similar3.img}
                alt="product image"
              />
            </figure>

            <span className={styles.SimilarProducts__name}>
              {similar3.name}
            </span>
            <span className={styles.SimilarProducts__price}>
              <strong>{similar3.price}</strong>
            </span>
          </Link>
        </section>
      </section>
    </>
  );
};

export default ProductLayout;
