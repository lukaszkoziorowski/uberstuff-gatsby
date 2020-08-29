import React from "react";
import { Link } from "gatsby";
import styles from "./Navigation.module.scss";
import Logo from "../UI/Logo";
import hamburgerPath from "../../../static/images/menu.svg";
import logoPath from "../../../static/images/logo.svg";
import { useBreakpoint } from "gatsby-plugin-breakpoints";

const Navigation = (props) => {
  const breakpoints = useBreakpoint();
  return (
    <nav className={styles.Navigation}>
      {breakpoints.sm ? (
        <button className={styles.Navigation__hamburger}>
          <img src={hamburgerPath} alt="hamburger icon" />
        </button>
      ) : null}
      {breakpoints.sm ? (
        <img
          src={logoPath}
          alt="site logo"
          className={styles.Navigation__moblogo}
        />
      ) : null}
      {breakpoints.md ? null : (
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
          <Link className={styles.Navigation__item__logo} to="/">
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
      )}
    </nav>
  );
};

export default Navigation;
