import { Colors } from "@/constants/Colors";
import React from "react";

const CheckOutProduct = ({
  name = "Custome Designed KeyBoard",
  price = 299,
  quantity = 2,
  image = {
    url: "https://images.pexels.com/photos/375751/pexels-photo-375751.jpeg",
  },
  color = Colors.customYellow,
}) => {
  return (
    <div className="flex justify-between items-start p-3 rounded-lg bg-gray-100 dark:bg-zinc-900">
      <div className="flex flex-row items-center gap-2">
        <img src={image.url} alt={name} className="w-20 sm:w-24 rounded-lg" />
        <div className="grid sm:gap-1">
          <h1 className="font-semibold text-sm sm:text-base">{name}</h1>
          <p className="flex flex-col sm:flex-row sm:gap-2 text-gray-500 dark:text-[#a4a4a4] text-sm sm:text-sm my-8">
            <span className="font-semibold">
              Color : <span style={{ backgroundColor: color }}> {color}</span>{" "}
            </span>
            <span className="hidden sm:block">|</span>
            <span className="font-semibold ">
              Qty :{" "}
              <span className="font-medium text-[#edcf5d]"> {quantity} </span>
            </span>
            <span className="hidden sm:block">|</span>
            <span className="font-semibold ">
              Price :{" "}
              <span className="font-medium text-[#edcf5d]"> ₹{price}  </span>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckOutProduct;
