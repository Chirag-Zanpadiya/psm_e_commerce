import React from "react";
import { Card } from "../ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import OrderProductTile from "./OrderProductTile";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "../ui/pagination";

const Orders = () => {
  return (
    <div className="mx-auto px-4 sm:px-8 -z-10 w-full">
      <h1 className="text-3xl font-bold mb-2 ml-3">Orders</h1>
      <div className="flex flex-col gap-5 mx-auto  ">
        <div className="space-y-8">
          <div className="p-4 space-y-4">
            <h2 className="text-xl font-medium">Order Summary</h2>

            <div className="grid space-y-1 gap-2 ">
              <Card className="space-y-2 p-3 shadow-md">
                <div className="grid sm:grid-cols-3 gap-2">
                  <OrderProductTile />
                  <OrderProductTile />
                  <OrderProductTile />
                </div>
                <hr />

                <div>
                  <p className="flex justify-between sm:justify-start gap-2 items-center px-3">
                    <span className="font-bold">Total : </span>
                    <span className="text-sm text-[#a4a4a4]">₹560</span>
                  </p>
                  <p className="flex justify-between sm:justify-start gap-2 items-center px-3">
                    <span className="font-bold">Address : </span>
                    <span className="text-sm text-[#a4a4a4]">
                      Lorem ipsum dolor sit amet consectetur adipisicing.
                    </span>
                  </p>
                  <p className="flex justify-between sm:justify-start gap-2 items-center px-3">
                    <span className="font-bold">Name : </span>
                    <span className="text-sm text-[#a4a4a4]">
                      Chirag Zanpadiya
                    </span>
                  </p>
                  <p className="flex justify-between sm:justify-start gap-2 items-center px-3">
                    <span className="font-bold">Email : </span>
                    <span className="text-sm text-[#a4a4a4]">
                      chirag123@gmail.com
                    </span>
                  </p>
                  <p className="flex justify-between sm:justify-start gap-2 items-center px-3">
                    <span className="font-bold">Payment ID : </span>
                    <span className="text-sm text-[#a4a4a4]">
                      chirag123@gmail.com
                    </span>
                  </p>
                </div>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Pending" />
                  </SelectTrigger>
                  <SelectContent className="capitalize">
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="packed">Packed</SelectItem>
                    <SelectItem value="in transit">In Transit</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="failed">Failed</SelectItem>
                  </SelectContent>
                </Select>
              </Card>
            </div>
          </div>
        </div>

        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default Orders;
