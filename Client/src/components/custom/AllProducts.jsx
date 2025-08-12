import React, { useEffect, useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Edit, Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Textarea } from "../ui/textarea";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "@/redux/slice/productSlice";
import { toast } from "sonner";
import useErrorLogout from "@/hooks/use-error-logout";

const AllProducts = () => {
  const { products } = useSelector((state) => state.product);

  const [category, setCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const dispatch = useDispatch();

  const { handleErrorLogout } = useErrorLogout();

  useEffect(() => {
    const getFilterProducts = async () => {
      try {
        const res = await axios.get(
          `${
            import.meta.env.VITE_API_URL
          }/get-products?category=${category}&search=${searchTerm}`
        );
        dispatch(setProducts(res.data.data));
      } catch (error) {
        handleErrorLogout(error, "Error while fetching products");
      }
    };
    getFilterProducts();
  }, [searchTerm, category]);

  const removeFromBlacklist = async (id) => {
    try {
      const res = await axios.put(
        import.meta.env.VITE_API_URL + `/remove-from-blacklist/${id}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      const { message } = res.data;

      toast.success(
        <span className="text-green-600 font-semibold">{message}</span>,
        {
          duration: 4000, // 4 seconds
          position: "top-center",
        }
      );
    } catch (error) {
      handleErrorLogout(
        error,
        "Error Occured While Removing Product From Blacklist"
      );
    }
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setIsEditModalOpen(true);
  };

  const blacklistProduct = async (id) => {
    try {
      const res = await axios.put(
        import.meta.env.VITE_API_URL + `/blacklist-product/${id}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      const { message, data } = res.data;

      toast.success(
        <span className="text-green-600 font-semibold">success</span>,
        {
          duration: 4000, // 4 seconds
          position: "top-center",
          description: message,
          action: {
            label: "Undo Changes",
            onClick: () => {
              removeFromBlacklist(data._id);
            },
          },
        }
      );
    } catch (error) {
      handleErrorLogout(error, "Error Occured While Blacklisting Product");
    }
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const updatedProduct = {
      ...editingProduct,
      name: formData.get("name"),
      description: formData.get("description"),
      price: parseFloat(formData.get("price")),
      category: formData.get("category"),
    };

    dispatch(
      setProducts(
        products.map((p) => (p._id === updatedProduct._id ? updatedProduct : p))
      )
    );

    try {
      const res = await axios.put(
        import.meta.env.VITE_API_URL + `/update-product/${updatedProduct._id}`,
        {
          name: updatedProduct.name,
          description: updatedProduct.description,
          price: updatedProduct.price,
          category: updatedProduct.category,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      const { message } = res.data;

      toast.success(
        <span className="text-green-600 font-semibold">
          Succesfully updated product details
        </span>,
        {
          duration: 4000, // 4 seconds
          position: "top-center",
          description: message,
        }
      );
    } catch (error) {
      return handleErrorLogout(error, "Error Occured While Updating Product");
    }
    setIsEditModalOpen(false);
    setEditingProduct(null);
  };

  return (
    <div className="mx-auto px-4 sm:px-8 -z-10 w-full">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
        Our Products
      </h1>

      <div className="mb-6 sm:mb-8">
        <form className="flex flex-col gap-4 sm:gap-6 md:flex-row md:items-end">
          {/* Search Field */}
          <div className="flex-1 w-full space-y-2">
            <Label htmlFor="search">Search Products</Label>
            <div className="relative">
              <Input
                type="text"
                id="search"
                placeholder="Search By Name Or Description"
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search
                size={20}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
            </div>
          </div>

          {/* Category Select */}
          <div className="w-full md:w-64">
            <Label htmlFor="category" className="mb-2 block">
              Category
            </Label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger id="category">
                <SelectValue placeholder="Select a Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="headset">Headset</SelectItem>
                <SelectItem value="keyboard">KeyBoard</SelectItem>
                <SelectItem value="mouse">Mouse</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </form>
      </div>

      {products?.length === 0 ? (
        <p className="text-center text-gray-500 mt-8">
          No Products Found , Try Adjusting Your Search Or Category
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 mx-auto max-w-7xl">
          {products?.map((product) => (
            <Card
              key={product._id}
              className="w-full bg-card border border-zinc-700 rounded-2xl py-0 shadow-lg hover:shadow-xl transition duration-300"
            >
              <CardHeader className="p-0">
                <div className="relative h-60 sm:h-72 overflow-hidden rounded-t-2xl">
                  <img
                    className="object-cover w-full h-full"
                    src={product?.image?.url || "/placeholder.png"}
                    alt={product?.name || "Product image"}
                  />
                </div>
              </CardHeader>

              <CardContent className="p-5 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold mb-1">{product.name}</h2>
                <p className="text-sm text-muted-foreground mb-3">
                  {product.description}
                </p>
                <p className="text-xl font-bold">₹{product.price.toFixed(2)}</p>
              </CardContent>

              <CardFooter className="px-5 pb-5 flex flex-col sm:flex-row gap-2 sm:justify-between">
                <Button
                  variant="outline"
                  onClick={() => handleEdit(product)}
                  className="flex items-center justify-center w-full sm:w-auto"
                >
                  <Edit className="mr-2 h-4 w-4" /> Edit
                </Button>
                <Button
                  onClick={() => {
                    !product.blacklisted
                      ? blacklistProduct(product._id)
                      : removeFromBlacklist(product._id);
                  }}
                  className="w-full sm:w-auto  hover:bg-red-600 "
                >
                  {!product.blacklisted
                    ? "BlackList Product"
                    : "Remove From BlackList"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}

      <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
        <DialogContent className="sm:max-w-[435px]">
          <DialogHeader>
            <DialogTitle>Edit Product</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleEditSubmit}>
            <div className="grid gap-4 py-4">
              <div className=" grid gap-4 items-center">
                <Label htmlFor="name" className="">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  defaultValue={editingProduct?.name}
                ></Input>
              </div>

              <div className=" grid gap-4 items-center">
                <Label htmlFor="description" className="">
                  Description
                </Label>
                <Textarea
                  id="description"
                  name="description"
                  defaultValue={editingProduct?.description}
                ></Textarea>
              </div>

              <div className=" grid gap-4 items-center">
                <Label htmlFor="price" className="">
                  Price
                </Label>
                <Input
                  type="number"
                  min="0"
                  id="price"
                  name="price"
                  defaultValue={editingProduct?.price}
                ></Input>
              </div>

              <div className="w-full grid gap-4 items-center">
                <Label htmlFor="category" className="">
                  Category
                </Label>
                <Select name="category" defaultValue={editingProduct?.category}>
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select a Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="headset">Headset</SelectItem>
                    <SelectItem value="keyboard">KeyBoard</SelectItem>
                    <SelectItem value="mouse">Mouse</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <DialogFooter>
              <Button type="submit">Save Changes</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AllProducts;
