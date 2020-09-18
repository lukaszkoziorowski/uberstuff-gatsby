import React from "react";
import styles from "./ProductLayout.module.scss";

import { products } from "../../components/array";

const ProductLayout = (props) => {
  const product = products.find((item) => item.id === props.id);

  return (
    <>
      <header className={styles.Product}></header>
      <section className={styles.SimilarProducts}></section>
    </>
  );
};

export default ProductLayout;
