import React from "react";
import Navigation from "../components/Navigation/Navigation";
import BagsLayout from "../layouts/BagsLayout";
import Footer from "../components/Footer/Footer";

const BagsPage = () => {
  return (
    <>
      <Navigation blackLogo={true} blackText={true} />
      <BagsLayout />
      <Footer />
    </>
  );
};

export default BagsPage;
