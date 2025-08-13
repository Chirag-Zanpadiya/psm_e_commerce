import ReviewComponent from "@/components/custom/ReviewComponent";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Colors } from "@/constants/Colors";
import { starsGenerator } from "@/constants/Helper";
import useErrorLogout from "@/hooks/use-error-logout";
import { addToCart } from "@/redux/slice/cartSlice";
import axios from "axios";
import { Circle, Minus, Plus } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

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
  const { productName } = useParams();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [productQuantity, setProductQuantity] = useState(1);
  const [pincode, setPincode] = useState("");
  const [AvailabilityMessage, setAvailabilityMessage] = useState("");
  const [purchaseProduct, setPurchaseProduct] = useState(false);
  const [address, setAddress] = useState("");
  const { handleErrorLogout } = useErrorLogout();
  const [product, setProduct] = useState({});
  const [productColor, setProductColor] = useState("");

  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    const fetchProductByName = async () => {
      try {
        const res = await axios.get(
          import.meta.env.VITE_API_URL +
            `/get-product-by-name/${productName?.split("-").join(" ")}`
        );

        const { data } = await res.data;
        setProduct(data);
      } catch (error) {
        handleErrorLogout(
          error,
          "Error Occured While Fetching product Details"
        );
      }
    };
    fetchProductByName();
  }, [productName]);

  const calculateEmi = (price) => Math.round(price / 6);

  const checkAvailability = async () => {
    if (pincode.trim() === "") {
      setAvailabilityMessage("Please Enter A Valied Pincode");
      return;
    }

    const res = await axios.get(
      import.meta.env.VITE_API_URL + `/get-pincode/${pincode}`
    );

    if (!res) {
      return toast.error(
        <span className="text-red-600 font-semibold">
          Delivery Not Avaiable for this location
        </span>,
        {
          duration: 4000, // 4 seconds
          position: "top-center",
        }
      );
    }
    // console.log(res);

    const data = await res.data;
    // console.log("Prting the res");

    // console.log(data.message);

    setAvailabilityMessage(data.message);
  };

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }

    if (productColor == "") {
      toast.warning(
        <span className="text-red-600 font-semibold">Please Select Color</span>,
        {
          duration: 4000, // 4 seconds
          position: "top-center",
        }
      );

      return;
    }

    dispatch(
      addToCart({
        _id: product._id,
        name: product.name,
        price: product.price,
        quantity: productQuantity,
        image: product.images[0].url,
        color: productColor,
        stock: product.stock,
        blacklisted: product.blacklisted,
      })
    );

    setProductQuantity(1);
    toast.success(
      <span className="text-green-600 font-semibold">
        Product Succesfully Added To Your Cart
      </span>,
      {
        duration: 4000, // 4 seconds
        position: "top-center",
      }
    );
  };

  return (
    <>
      <div>
        <main className="w-[93vw] lg:w-[70vw] flex flex-col sm:flex-row justify-start items-start gap-10 mx-auto my-10">
          {/* Left side  */}
          <div className="grid sm:w-[50%] gap-3">
            <img
              src={product?.images?.[selectedImage]?.url}
              alt="photo"
              className="w-full lg:h-[30rem] rounded-xl object-center object-cover border dark:border-none"
            />

            <div className="grid grid-cols-4 gap-3">
              {product?.images?.map(({ url, id }, index) => (
                <img
                  className="rounded-xl filter hover:brightness-50 cursor-pointer transition-all ease-in-out duration-100 border dark:border-none"
                  key={id}
                  src={url}
                  onClick={() => setSelectedImage(index)}
                />
              ))}
            </div>
          </div>

          {/* Right side  */}
          <div className="sm:w-[50%] lg:w-[30%]">
            <div className="pb-5">
              <h2 className="font-extrabold text-2xl ">{product?.name}</h2>
              <p className="text-sm my-2">{product?.description}</p>
              <div className="flex items-center">
                {starsGenerator(product?.rating, "0", 15)}
                <span className="text-md ml-1">
                  ({product?.reviews?.length})
                </span>
              </div>
            </div>

            <div className="py-5 border-t border-b">
              <h3 className="font-bold text-xl">
                Rs.{product.price} or Rs.{calculateEmi(product.price)}/month
              </h3>
              <p className="text-sm">
                Suggested Payments with 6 months special finacing
              </p>
            </div>

            <div className="py-5 border-b">
              <h3 className="font-bold text-lg">Choose Color</h3>
              <div className="flex items-center my-2">
                {product?.colors?.map((color, index) => (
                  <Circle
                    key={index + color}
                    fill={color}
                    strokeOpacity={0.2}
                    strokeWidth={0.2}
                    size={40}
                    onClick={() => setProductColor(color)}
                    className="cursor-pointer filter hover:brightness-50"
                  />
                ))}
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
                {product?.stock - productQuantity > 0 ? (
                  <div className="grid text-sm font-semibold text-gray-600">
                    <span>
                      Only{""}{" "}
                      <span className="text-yellow-400">
                        {product?.stock - productQuantity} item{" "}
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
                  <Button onClick={checkAvailability}>
                    {" "}
                    Check Availability
                  </Button>
                </div>
                <p className="text-sm px-2">{AvailabilityMessage}</p>
              </div>

              <div className="flex gap-3">
                <Button onClick={() => setPurchaseProduct(true)}>
                  Buy Now
                </Button>
                <Button variant="outline" onClick={handleAddToCart}>
                  Add To Cart
                </Button>
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
