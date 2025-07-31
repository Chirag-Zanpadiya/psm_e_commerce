import ReviewComponent from "@/components/custom/ReviewComponent";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Colors } from "@/constants/Colors";
import { starsGenerator } from "@/constants/Helper";
import { Circle, Minus, Plus } from "lucide-react";
import React, { useState } from "react";

const imagesArray = [
  {
    url: "https://images.pexels.com/photos/3937174/pexels-photo-3937174.jpeg",
    id: 1,
  },
  {
    url: "https://images.pexels.com/photos/3937174/pexels-photo-3937174.jpeg",
    id: 2,
  },
  {
    url: "https://images.pexels.com/photos/3937174/pexels-photo-3937174.jpeg",
    id: 3,
  },
  {
    url: "https://images.pexels.com/photos/3937174/pexels-photo-3937174.jpeg",
    id: 4,
  },
  {
    url: "https://images.pexels.com/photos/3937174/pexels-photo-3937174.jpeg",
    id: 5,
  },
];

const productStock = 5;

const Products = () => {
  const [productQuantity, setProductQuantity] = useState(2);
  const [Pincode, setPincode] = useState("");
  const [AvailabilityMessage, setAvailabilityMessage] = useState("");
  const [purchaseProduct, setPurchaseProduct] = useState(false);
  const [address, setAddress] = useState("");
  return (
    <>
      <div>
        <main className="w-[93vw] lg:w-[70vw] flex flex-col sm:flex-row justify-start items-start gap-10 mx-auto my-10">
          {/* Left side  */}
          <div className="grid sm:w-[50%] gap-3">
            <img
              src={imagesArray[0].url}
              alt="photo"
              className="w-full lg:h-[30rem] rounded-xl object-center object-cover border dark:border-none"
            />

            <div className="grid grid-cols-4 gap-3">
              {imagesArray.map((image, index) => (
                <img
                  className="rounded-xl filter hover:brightness-50 cursor-pointer transition-all ease-in-out duration-100 border dark:border-none"
                  key={index}
                  src={image.url}
                />
              ))}
            </div>
          </div>

          {/* Right side  */}
          <div className="sm:w-[50%] lg:w-[30%]">
            <div className="pb-5">
              <h2 className="font-extrabold text-2xl ">My SetUp</h2>
              <p className="text-sm my-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ducimus, eveniet aperiam! Adipisci deleniti minus maxime at amet
              </p>
              <div className="flex items-center">
                {starsGenerator(4.5, "0", 15)}
                <span className="text-md ml-1">(2)</span>
              </div>
            </div>

            <div className="py-5 border-t border-b">
              <h3 className="font-bold text-xl">Rs.560 or Rs.35/month</h3>
              <p className="text-sm">
                Suggested Payments with 6 months special finacing
              </p>
            </div>

            <div className="py-5 border-b">
              <h3 className="font-bold text-lg">Choose Color</h3>
              <div className="flex items-center my-2">
                <Circle
                  fill={Colors.customIsabelline}
                  strokeOpacity={0.2}
                  strokeWidth={0.2}
                  size={40}
                />
                <Circle
                  fill={Colors.customGray}
                  strokeOpacity={0.2}
                  strokeWidth={0.2}
                  size={40}
                />
                <Circle
                  fill={Colors.customYellow}
                  strokeOpacity={0.2}
                  strokeWidth={0.2}
                  size={40}
                />
              </div>
            </div>

            <div className="py-5">
              <div className="flex gap-3 items-center">
                <div className="flex text-center gap-5 bg-gray-100  rounded-full px-3 py-2 w-fit">
                  <Minus
                    cursor={"pointer"}
                    stroke={Colors.customGray}
                    onClick={() =>
                      setProductQuantity((qty) => (qty > 1 ? qty - 1 : 1))
                    }
                  />
                  <span className="text-slate-950">{productQuantity}</span>
                  <Plus
                    stroke={Colors.customGray}
                    cursor={"pointer"}
                    onClick={() =>
                      setProductQuantity((qty) =>
                        qty < productStock ? qty + 1 : qty
                      )
                    }
                  />
                </div>
                {productStock - productQuantity > 0 ? (
                  <div className="grid text-sm font-semibold text-gray-600">
                    <span>
                      Only{""}{" "}
                      <span className="text-yellow-400">
                        {productStock - productQuantity} item{" "}
                      </span>
                      Left
                    </span>
                    <span>Don't Miss It</span>
                  </div>
                ) : (
                  <div>
                    <span>Outof Stock</span>
                  </div>
                )}
              </div>

              <div className="grid gap-3 my-5">
                <div className="flex gap-3">
                  <Input
                    placeholder="Enter Your Pincode Here"
                    onChange={(e) => setPincode(e.target.value)}
                  />
                  <Button> Check Availability</Button>
                </div>
                <p className="text-sm px-2">{AvailabilityMessage}</p>
              </div>

              <div className="flex gap-3">
                <Button onClick={() => setPurchaseProduct(true)}>
                  Buy Now
                </Button>
                <Button>Add To Cart</Button>
              </div>

              {purchaseProduct && (
                <div className="my-2 space-y-2">
                  <Input
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Enter Your Addree Here..."
                  />
                  <Button>Confirm Order</Button>
                </div>
              )}
            </div>
          </div>
        </main>

        {/* Review Section */}
        <ReviewComponent />
      </div>
    </>
  );
};

export default Products;
