import CheckOutProduct from "@/components/custom/CheckOutProduct.jsx";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import useErrorLogout from "@/hooks/use-error-logout";
import useRazorpay from "@/hooks/use-razorpay";
import { emptyCart } from "@/redux/slice/cartSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const CheckOut = () => {
  const [address, setAddress] = useState("");
  const { cartItems, totalQuantity, totalPrice } = useSelector(
    (state) => state.cart
  );
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { handleErrorLogout } = useErrorLogout();
  const { generatePayment, verifyPayment } = useRazorpay();

  const handleCheckout = async () => {
    if (address.trim() === "") {
      return toast.warning(
        <span className="text-red-600 font-semibold">
          Please Provide Address
        </span>,
        {
          duration: 4000, // 4 seconds
          position: "top-center",
        }
      );
    }

    const productArray = cartItems.map((item) => {
      return {
        id: item._id,
        quantity: item.quantity,
        color: item.color,
      };
    });

    try {
      const options = await generatePayment(totalPrice);
      const success = verifyPayment(options, productArray, address);

      dispatch(emptyCart());
    } catch (error) {
      return handleErrorLogout(error);
    }
  };
  return (
    <div className="mx-auto w-[90vw] sm:w-[60vw] flex justify-between items-center sm:my-20">
      <div className="flex flex-col sm:flex-row gap-5 mx-auto my-10">
        {/* Product Details */}
        <div className="space-y-8">
          <div className="p-4 space-y-4">
            <h2 className="text-xl font-medium">Order Summary</h2>
            <div className="space-y-1 text-3xl">
              {cartItems.length === 0 ? (
                <h2 className="text-primary text-3xl">
                  Nothing To Show, Please Buy Some Products
                </h2>
              ) : (
                cartItems.map((item) => (
                  <CheckOutProduct key={item?._id} {...item} />
                ))
              )}
            </div>
            <hr />
            <div className="p-3 rounded-md">
              <p className="flex justify-between items-center">
                <span className="font-semibold text-[#a4a4a4]">
                  Sub Total :{" "}
                </span>
                <span className="text-bold">₹{totalPrice}</span>
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
              <span className="text-bold">₹{totalPrice}</span>
            </p>
          </div>
        </div>

        {/* Personal Details */}
        <div className="w-[90vw] sm:w-[20vw] ">
          <Card className="p-4 shadow-md space-y-4">
            <h2 className="text-xl font-medium">Billing Infomation</h2>
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                placeholder="John Doe"
                className="w-full"
                value={user?.name}
              />
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="john@gmail.com"
                className="w-full"
                value={user?.email}
              />
              <Label htmlFor="address">Shipping Address</Label>
              <Textarea
                rows="7"
                id="address"
                placeholder="123 main street City , State"
                className="w-full"
                // value={user?.address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <Button onClick={handleCheckout} className="w-full">
                Place Order
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
