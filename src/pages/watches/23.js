import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import ProductLayout from "../../layouts/ProductLayout/ProductLayout";
import Footer from "../../components/Footer/Footer";

const blackSmartwatch = () => {
  return (
    <>
      <Navigation blackText={true} blackLogo={true} />
      <ProductLayout id={23} />
      <Footer />
    </>
  );
};

export default blackSmartwatch;
