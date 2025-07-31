import CheckOutProduct from "@/components/custom/CheckOutProduct.jsx";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const CheckOut = () => {
  return (
    <div className="mx-auto w-[90vw] sm:w-[60vw] flex justify-between items-center sm:my-20">
      <div className="flex flex-col sm:flex-row gap-5 mx-auto my-10">
        {/* Product Details */}
        <div className="space-y-8">
          <div className="p-4 space-y-4">
            <h2 className="text-xl font-medium">Order Summary</h2>
            <div className="space-y-1 text-3xl">
              <CheckOutProduct />
              <CheckOutProduct />
              <CheckOutProduct />
            </div>
            <hr />
            <div className="p-3 rounded-md">
              <p className="flex justify-between items-center">
                <span className="font-semibold text-[#a4a4a4]">
                  Sub Total :{" "}
                </span>
                <span className="text-bold">₹599</span>
              </p>
              <p className="flex justify-between items-center">
                <span className="font-semibold text-[#a4a4a4]">Tax : </span>
                <span className="text-bold">₹0</span>
              </p>
              <p className="flex justify-between items-center">
                <span className="font-semibold text-[#a4a4a4]">
                  Shipping :{" "}
                </span>
                <span className="text-bold">₹0</span>
              </p>
            </div>
            <hr />
            <p className="flex justify-between items-center px-3">
              <span className="font-bold">Total : </span>
              <span className="text-bold">₹599</span>
            </p>
          </div>
        </div>

        {/* Personal Details */}
        <div className="w-[90vw] sm:w-[20vw] ">
          <Card className="p-4 shadow-md space-y-4">
            <h2 className="text-xl font-medium">Billing Infomation</h2>
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="John Doe" className="w-full" />
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="john@gmail.com"
                className="w-full"
              />
              <Label htmlFor="address">Shipping Address</Label>
              <Textarea
                rows="7"
                id="address"
                placeholder="123 main street City , State"
                className="w-full"
              />
              <Button className="w-full">Place Order</Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
