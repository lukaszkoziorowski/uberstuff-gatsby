import React from "react";
import { Link } from "gatsby";
import styles from "./Navigation.module.scss";
import Logo from "../UI/Logo";
import hamburgerPath from "../../../static/images/menu.svg";
import logoPath from "../../../static/images/logo.svg";
import { useBreakpoint } from "gatsby-plugin-breakpoints";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

const Navigation = (props) => {
  const breakpoints = useBreakpoint();
  return (
    <nav
      className={styles.Navigation}
      style={{ backgroundColor: props.blackText ? "#fff" : "#262626" }}
    >
      {breakpoints.sm ? (
        <button className={styles.Navigation__hamburger}>
          <img
            src={hamburgerPath}
            alt="hamburger icon"
            style={{ filter: props.blackText ? "invert(1)" : null }}
          />
        </button>
      ) : null}
      {breakpoints.sm ? (
        <img
          src={logoPath}
          alt="site logo"
          className={styles.Navigation__moblogo}
          style={{ filter: props.blackLogo ? "invert(1)" : null }}
        />
      ) : null}
      {breakpoints.md ? null : (
        <ul className={styles.Navigation__list}>
          <Link
            className={
              props.blackText
                ? styles.Navigation__item__black
                : props.whiteText
                ? styles.Navigation__item__white
                : props.grayText
                ? styles.Navigation__item__gray
                : styles.Navigation.item
            }
            activeClassName={
              props.blackText
                ? "active__black"
                : props.whiteText
                ? "active__white"
                : "active__gray"
            }
            // style={
            //   props.blackText
            //     ? { color: "black" }
            //     : props.whiteText
            //     ? { color: "white" }
            //     : { color: "#9a9a9a" }
            // }
            to="/bags"
          >
            Bags
          </Link>
          <Link
            className={
              props.blackText
                ? styles.Navigation__item__black
                : props.whiteText
                ? styles.Navigation__item__white
                : props.grayText
                ? styles.Navigation__item__gray
                : styles.Navigation.item
            }
            activeClassName={
              props.blackText
                ? "active__black"
                : props.whiteText
                ? "active__white"
                : "active__gray"
            }
            to="/accesories"
          >
            Accesories
          </Link>
          <Link
            className={
              props.blackText
                ? styles.Navigation__item__black
                : props.whiteText
                ? styles.Navigation__item__white
                : props.grayText
                ? styles.Navigation__item__gray
                : styles.Navigation.item
            }
            activeClassName={
              props.blackText
                ? "active__black"
                : props.whiteText
                ? "active__white"
                : "active__gray"
            }
            to="/watches"
          >
            Watches
          </Link>
          <Link className={styles.Navigation__item__logo} to="/">
            <Logo black={props.blackLogo} nav={true} />
          </Link>
          <Link
            className={
              props.blackText
                ? styles.Navigation__item__black
                : props.whiteText
                ? styles.Navigation__item__white
                : props.grayText
                ? styles.Navigation__item__gray
                : styles.Navigation.item
            }
            activeClassName={
              props.blackText
                ? "active__black"
                : props.whiteText
                ? "active__white"
                : "active__gray"
            }
            to="/blog"
          >
            Blog
          </Link>
          <Link
            className={
              props.blackText
                ? styles.Navigation__item__black
                : props.whiteText
                ? styles.Navigation__item__white
                : props.grayText
                ? styles.Navigation__item__gray
                : styles.Navigation.item
            }
            activeClassName={
              props.blackText
                ? "active__black"
                : props.whiteText
                ? "active__white"
                : "active__gray"
            }
            to="/account"
          >
            My Account
          </Link>
          <Link
            className={
              props.blackText
                ? styles.Navigation__item__black
                : props.whiteText
                ? styles.Navigation__item__white
                : props.grayText
                ? styles.Navigation__item__gray
                : styles.Navigation.item
            }
            activeClassName={
              props.blackText
                ? "active__black"
                : props.whiteText
                ? "active__white"
                : "active__gray"
            }
            to="/checkout"
          >
            Checkout
          </Link>
        </ul>
      )}
    </nav>
  );
};

export default Navigation;
