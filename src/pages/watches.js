import React from "react";
import Navigation from "../components/Navigation/Navigation";
import WatchesLayout from "../layouts/WatchesLayout";
import Footer from "../components/Footer/Footer";

const WatchesPage = () => {
  return (
    <>
      <Navigation blackText={true} blackLogo={true} />
      <WatchesLayout />
      <Footer />
    </>
  );
};

export default WatchesPage;
