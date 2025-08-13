import React from "react";

const OrderProductTile = ({ quantity, id, color }) => {
  return (
    <div className="flex justify-between  items-start  sm:items-center p-3 rounded-lg bg-gray-100 dark:bg-zinc-900">
      <div className="flex flex-row rounded-xl dark:bg-[#0f0f0f]  items-center gap-2">
        <img
          className="w-20 sm:h-42 sm:w-36 rounded-lg"
          src={id?.images[0].url}
          alt={id?.name}
        />
        <div className="grid sm:gap-1 ">
          <h1 className="font-semibold text-sm sm:text-base">{id?.name}</h1>
          <p className="flex flex-col sm:flex-row sm:gap-2 text-gray-500 dark:text=[#a4a4a4] text-xs sm:text-sm my-8">
            <span className="font-semibold">
              Color : <span style={{ backgroundColor: color }}>{color}</span>
            </span>
            <span className="hidden sm:block">|</span>
            <span className="font-semibold">
              Qty :{" "}
              <span className="font-medium text-[#edcf5d]">{quantity}</span>
            </span>
            <span className="hidden sm:block">|</span>
            <span className="font-semibold">
              Price : <span className="font-medium text-[#edcf5d]">₹{id?.price}</span>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderProductTile;
