import { Star } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import LinkButton from "./LinkButton";
import { starsGenerator } from "@/constants/Helper";

// TODO: AVG Rating =  total rating / no of client

const ProductCard = ({
  name = "Product Title",
  price = 2000,
  rating = 2.5,
  image = {
    url: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg",
    id: "32",
  },
}) => {
  return (
    <div className="relative border w-fit overflow-clip grid z-1 hover:shadow-md rounded-2xl">
      <img
        src={image.url}
        loading="lazy"
        alt={name}
        className="object-cover w-[30rem] h-[15rem] "
      />

      <div className="px-3 grid gap-1 py-2 absolute bottom-12 bg-white dark:bg-zinc-900 w-full border-0 translate-y-[3rem] hover:translate-y-0 transform transition-all ease-in-out rounded-xl duration-300">
        <h2>{name}</h2>
        <div className="flex justify-between">
          <div className="flex ">{starsGenerator((rating = rating))}</div>
          <span>₹{price}</span>
        </div>
        <LinkButton
          to={`/product/${name.split(" ").join("-")}`}
          text="View Product"
        />
      </div>
    </div>
  );
};

export default ProductCard;
