import React from "react";
import styles from "./Footer.module.scss";
import waterPath from "../../../static/images/water.jpg";
import { useBreakpoint } from "gatsby-plugin-breakpoints";

const Footer = () => {
  const breakpoints = useBreakpoint();
  return (
    <footer
      className={styles.Footer}
      style={{ backgroundImage: `url(${waterPath})` }}
    >
      <h2 className={styles.Footer__heading}>
        Sing up for our newsletter and get 20% off.
      </h2>
      <form>
        <input
          type="email"
          placeholder="Put your email address here."
          className={styles.Footer__email}
        />
      </form>
      {breakpoints.md ? (
        <span className={styles.Footer__rights}>2020. All rights reserved</span>
      ) : (
        <ul className={styles.Footer__menu}>
          <a href="/">
            <li className={styles.Footer__menuitem}>Our policy</li>
          </a>
          <a href="/">
            <li className={styles.Footer__menuitem}>About Us</li>
          </a>
          <a href="/">
            <li className={styles.Footer__menuitem}>Customer Service</li>
          </a>
          <a href="/">
            <li className={styles.Footer__menuitem}>Contact Us</li>
          </a>
          <a href="/">
            <li className={styles.Footer__menuitem}>Social</li>
          </a>
          <li className={styles.Footer__menuitem__last}>
            2020. All rights reserved
          </li>
        </ul>
      )}
    </footer>
  );
};

export default Footer;
