import React from "react";
// import WorkInProgress from "../components/WorkInProgress/WorkInProgress";
import AccessoriesLayout from "../layouts/AccessoriesLayout";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";

const AccesoriesPage = () => {
  return (
    <>
      <Navigation blackText={true} blackLogo={true} />
      <AccessoriesLayout />
      <Footer />
    </>
  );
};

export default AccesoriesPage;
