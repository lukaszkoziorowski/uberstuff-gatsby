import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import ProductLayout from "../../layouts/ProductLayout/ProductLayout";
import Footer from "../../components/Footer/Footer";

const canvasBag = () => {
  return (
    <>
      <Navigation blackText={true} blackLogo={true} />
      <ProductLayout id={21} />
      <Footer />
    </>
  );
};

export default canvasBag;
