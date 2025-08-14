import React from "react";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";

const ProductList = () => {
  const { products } = useSelector((state) => state.product);
  // console.log("productlist :: ");
  // console.log(products);

  return (
    <div className="w-[93vw] grid sm:grid-cols-3 md:grid-cols-4  lg:grid-cols-5 mx-auto gap-5 place-content-center my-10">
      {products?.map(
        (product) =>
          product.blacklisted == false && (
            <ProductCard key={product._id} {...product} />
          )
      )}
    </div>
  );
};

export default ProductList;
