import React from "react";
// import Img from "gatsby-image";
import logoPath from "../../../static/images/logo.svg";
import { Link } from "gatsby";
// import { useStaticQuery, graphql } from "gatsby";
import styles from "./Logo.module.scss";

const Logo = (props) => {
  return (
    <Link className={styles.Logo} to="/">
      <img
        src={logoPath}
        alt="Website logo"
        style={props.noLogo ? { display: "none" } : null}
        style={props.mobile ? { display: "none" } : null}
      />
    </Link>
  );
};

export default Logo;
