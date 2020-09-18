import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import ProductLayout from "../../layouts/ProductLayout/ProductLayout";
import Footer from "../../components/Footer/Footer";

const sekonda = () => {
  return (
    <>
      <Navigation blackText={true} blackLogo={true} />
      <ProductLayout id={18} />
      <Footer />
    </>
  );
};

export default sekonda;
