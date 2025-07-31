import FilterMenu from "@/components/custom/FilterMenu";
import Footer from "@/components/custom/Footer";
import HeaderDisplay from "@/components/custom/HeaderDisplay";
import ProductList from "@/components/custom/ProductList";
import React from "react";

const Home = () => {
  return (
    <div  >
      <HeaderDisplay/>
      <FilterMenu/>
      <ProductList/>
    </div>
  );
};

export default Home;
