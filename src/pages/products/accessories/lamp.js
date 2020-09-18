import React from "react";
import Navigation from "../../../components/Navigation/Navigation";
import ProductLayout from "../../../layouts/ProductLayout/ProductLayout";
import Footer from "../../../components/Footer/Footer";

const lamp = () => {
  return (
    <>
      <Navigation blackText={true} blackLogo={true} />
      <ProductLayout id={22} />
      <Footer />
    </>
  );
};

export default lamp;
