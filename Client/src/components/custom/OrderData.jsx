import React from "react";
import { Card } from "../ui/card";
import { ArrowDownToLine, IndianRupee } from "lucide-react";

const OrderData = ({
  amount = 100,
  address = "12608 ABC City State India",
  status = "pending",
  createdAt = "05-05-2025",
  updatedAt = "05-05-2025",
}) => {
  return (
    <Card className="grid gap-2 p-2">
      <div className="flex flex-col sm:flex-row justify-between items-end sm:items-center border p-3 rounded-lg bg-gray-100 dark:bg-zinc-900">
        <div className="flex items-center gap-2 ">
          <img
            className="w-32 h-32 rounded-lg"
            src="https://images.pexels.com/photos/3937174/pexels-photo-3937174.jpeg"
            alt="myphoto"
          />
          <div className="grid gap-1">
            <h1 className="font-semibold text-sm sm:text-lg">
              Mechanical KeyBoard
            </h1>
            <p className="flex flex-col sm:flex-row sm:gap-2 text-gray-500 dark:text-[#a4a4a4] text-sm sm:text-sm my-8">
              <span>
                Color :{" "}
                <span style={{ backgroundColor: "white" }}> {"white"}</span>{" "}
              </span>
              <span className="hidden sm:block">|</span>

              <span>
                Status : <span className="capitalize"> {status} </span>
              </span>
            </p>
          </div>
        </div>
        <div className="flex sm:flex-col gap-3 sm:gap-0 mt-2 sm:mt-0 sm:items-center">
          <h2 className="text-md sm:text-xl font-bold flex items-center dark:text-[#edcf5d]">
            <IndianRupee size={10} /> 499
          </h2>
          <p className="dark:text-[#edcf5d] text-end">Qty : 1</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between sm:items-center">
        <span>
          Ordered On: <span className="capitalize">1 Jan 2025</span>
        </span>
        <span className="hover:underline text-sm cursor-pointer flex items-center gap-1 dark:text-[#edcf5d]">
          <ArrowDownToLine size={15} />
          Download Invoice
        </span>
      </div>

      <hr />

      <span>
        Delivery At : <span className="capitalize">05 Jan 2025</span>
      </span>
    </Card>
  );
};

export default OrderData;
// edcf5d
