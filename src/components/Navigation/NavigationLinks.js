import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Logo from "../UI/Logo";

const NavList = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-around;

  @media (max-width: 760px) {
    align-items: center;
    flex-direction: column;
  }
`;

const NavigationLinks = (props) => {
  const NavItem = styled(Link)`
    color: rgb(154, 154, 154);
    text-decoration: none;
    text-transform: uppercase;
    transition: all 0.3s;
    font-weight: bold;
    cursor: pointer;
    font-size: 18px;
    }
    :hover {
      color: rgb(194, 194, 194);
    }
    @media(max-width: 760px){
        font-size: 22px;
        margin-bottom: 10px;
    }
  `;
  return (
    <>
      <NavList>
        <NavItem to="/bags">Bags</NavItem>
        <NavItem to="/accesories">Accessories</NavItem>
        <NavItem to="/watches">Watches</NavItem>
        <Logo noLogo={props.noLogo} />
        <NavItem to="/blog">Blog</NavItem>
        <NavItem to="/account">My account</NavItem>
        <NavItem to="/checkout">Checkout</NavItem>
      </NavList>
    </>
  );
};

export default NavigationLinks;
