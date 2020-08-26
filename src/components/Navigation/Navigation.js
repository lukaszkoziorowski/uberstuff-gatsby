import React from "react";
import { Link } from "gatsby";
import styles from "./Navigation.module.scss";
import Logo from "../UI/Logo";

const Navigation = () => {
  return (
    <nav className={styles.Navigation}>
      <ul className={styles.Navigation__list}>
        <Link className={styles.Navigation__item} to="/bags">
          Bags
        </Link>
        <Link className={styles.Navigation__item} to="/accesories">
          Accesories
        </Link>
        <Link className={styles.Navigation__item} to="/watches">
          Watches
        </Link>
        <Link className={styles.Navigation__item} to="/">
          <Logo nav={true} />
        </Link>
        <Link className={styles.Navigation__item} to="/blog">
          Blog
        </Link>
        <Link className={styles.Navigation__item} to="/account">
          My Account
        </Link>
        <Link className={styles.Navigation__item} to="/checkout">
          Checkout
        </Link>
      </ul>
    </nav>
  );
};

export default Navigation;
