import React from "react";
import logoPath from "../../../static/images/logo.svg";
// import Img from "gatsby-image";
// import { useStaticQuery, graphql } from "gatsby";

const Logo = (props) => {
  return (
    <img
      src={logoPath}
      alt="Website logo"
      style={props.black ? { filter: "brightness(0%)" } : null}
    />
  );
};

export default Logo;
