import React from "react";
// import WorkInProgress from "../components/WorkInProgress/WorkInProgress";
import AccessoriesLayout from "../layouts/AccessoriesLayout";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";

const AccesoriesPage = () => {
  return (
    <>
      <Navigation blackText blackLogo />
      <AccessoriesLayout />
      <Footer />
    </>
  );
};

export default AccesoriesPage;
