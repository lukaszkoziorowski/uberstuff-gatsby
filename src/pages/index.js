import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Hero from "../components/Hero/Hero";
import ProductsSection from "../components/ProductsSection/ProductsSection";
import Footer from "../components/Footer/Footer";
import LastBlogPost from "../components/LastBlogPost/LastBlogPost";

export default function Home() {
  return (
    <>
      <Navigation grayText />
      <Hero />
      <ProductsSection />
      <LastBlogPost />
      <Footer />
    </>
  );
}
