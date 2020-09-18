import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import ProductLayout from "../../layouts/ProductLayout/ProductLayout";
import Footer from "../../components/Footer/Footer";

const blackBelt = () => {
  return (
    <>
      <Navigation blackText={true} blackLogo={true} />
      <ProductLayout id={9} />
      <Footer />
    </>
  );
};

export default blackBelt;
