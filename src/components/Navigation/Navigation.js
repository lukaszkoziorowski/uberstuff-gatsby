import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../UI/Logo";
import { Link } from "gatsby";
import styles from "./Navigation.module.scss";
import hamburgerPath from "../../../static/images/menu.svg";
import logoPath from "../../../static/images/logo.svg";
import { useBreakpoint } from "gatsby-plugin-breakpoints";
import NavigationLinks from "./NavigationLinks";

const Navbar = styled.nav`
  position: fixed;
  z-index: 120;
  top: 0;
  left: 0;
  height: 56px;
  width: 100%;
  background-color: #262626;

  @media (max-width: 760px) {
    position: fixed;
    height: 8vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
`;
const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 5vw;

  @media (max-width: 760px) {
    display: flex;
  }
`;
const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 760px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 10vh;
    background-color: #fff;
    transition: all 0.3s ease-in;
    top: 8vh;
    left: ${(props) => (props.open ? "-100%" : "0")};
    background-color: #262626;
  }
`;
const Hamburger = styled.div`
  background-color: #111;
  width: 30px;
  height: 3px;
  transition: all 0.3s linear;
  align-self: center;
  position: fixed;
  transform: ${(props) => (props.open ? "rotate(-45deg)" : "inherit")};
  filter: invert(1);

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #111;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${(props) =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${(props) => (props.open ? "0" : "1")};
    transform: ${(props) => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`;

const Navigation = (props) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const breakpoints = useBreakpoint();

  return (
    <Navbar>
      <Logo mobile />
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {navbarOpen ? (
        <Navbox>
          <NavigationLinks noLogo />
        </Navbox>
      ) : (
        <Navbox open>
          <NavigationLinks />
        </Navbox>
      )}
    </Navbar>
  );
};

export default Navigation;

// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// const Navigation = (props) => {
//   const breakpoints = useBreakpoint();
//   const [navbarOpen, setNavbarOpen] = useState(false);

//   return (
//     <nav
//       className={styles.Navigation}
//       style={{ backgroundColor: props.blackText ? "#fff" : "#262626" }}
//     >
//       {breakpoints.sm ? (
//         <button
//           className={styles.Navigation__hamburger}
//           onClick={() => setNavbarOpen(!navbarOpen)}
//         >
//           <img
//             src={hamburgerPath}
//             alt="hamburger icon"
//             style={{ filter: props.blackText ? "invert(1)" : null }}
//           />
//         </button>
//       ) : null}
//       {breakpoints.sm ? (
//         <Link to="/">
//           <img
//             src={logoPath}
//             alt="site logo"
//             className={styles.Navigation__moblogo}
//             style={{ filter: props.blackLogo ? "invert(1)" : null }}
//           />
//         </Link>
//       ) : null}
//       {breakpoints.md ? null : (
//         <ul className={styles.Navigation__list}>
//           <Link
//             className={
//               props.blackText
//                 ? styles.Navigation__item__black
//                 : props.whiteText
//                 ? styles.Navigation__item__white
//                 : props.grayText
//                 ? styles.Navigation__item__gray
//                 : styles.Navigation.item
//             }
//             activeClassName={
//               props.blackText
//                 ? "active__black"
//                 : props.whiteText
//                 ? "active__white"
//                 : "active__gray"
//             }
//             to="/bags"
//           >
//             Bags
//           </Link>
//           <Link
//             className={
//               props.blackText
//                 ? styles.Navigation__item__black
//                 : props.whiteText
//                 ? styles.Navigation__item__white
//                 : props.grayText
//                 ? styles.Navigation__item__gray
//                 : styles.Navigation.item
//             }
//             activeClassName={
//               props.blackText
//                 ? "active__black"
//                 : props.whiteText
//                 ? "active__white"
//                 : "active__gray"
//             }
//             to="/accesories"
//           >
//             Accessories
//           </Link>
//           <Link
//             className={
//               props.blackText
//                 ? styles.Navigation__item__black
//                 : props.whiteText
//                 ? styles.Navigation__item__white
//                 : props.grayText
//                 ? styles.Navigation__item__gray
//                 : styles.Navigation.item
//             }
//             activeClassName={
//               props.blackText
//                 ? "active__black"
//                 : props.whiteText
//                 ? "active__white"
//                 : "active__gray"
//             }
//             to="/watches"
//           >
//             Watches
//           </Link>
//           <Link className={styles.Navigation__item__logo} to="/">
//             <Logo black={props.blackLogo} nav={true} />
//           </Link>
//           <Link
//             className={
//               props.blackText
//                 ? styles.Navigation__item__black
//                 : props.whiteText
//                 ? styles.Navigation__item__white
//                 : props.grayText
//                 ? styles.Navigation__item__gray
//                 : styles.Navigation.item
//             }
//             activeClassName={
//               props.blackText
//                 ? "active__black"
//                 : props.whiteText
//                 ? "active__white"
//                 : "active__gray"
//             }
//             to="/blog"
//           >
//             Blog
//           </Link>
//           <Link
//             className={
//               props.blackText
//                 ? styles.Navigation__item__black
//                 : props.whiteText
//                 ? styles.Navigation__item__white
//                 : props.grayText
//                 ? styles.Navigation__item__gray
//                 : styles.Navigation.item
//             }
//             activeClassName={
//               props.blackText
//                 ? "active__black"
//                 : props.whiteText
//                 ? "active__white"
//                 : "active__gray"
//             }
//             to="/account"
//           >
//             My Account
//           </Link>
//           <Link
//             className={
//               props.blackText
//                 ? styles.Navigation__item__black
//                 : props.whiteText
//                 ? styles.Navigation__item__white
//                 : props.grayText
//                 ? styles.Navigation__item__gray
//                 : styles.Navigation.item
//             }
//             activeClassName={
//               props.blackText
//                 ? "active__black"
//                 : props.whiteText
//                 ? "active__white"
//                 : "active__gray"
//             }
//             to="/checkout"
//           >
//             Checkout
//           </Link>
//         </ul>
//       )}
//     </nav>
//   );
// };
