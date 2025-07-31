import React from "react";
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

const AllProducts = () => {
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
                className="pl-10 "
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
            <Select>
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 mx-auto max-w-7xl">
        <Card className="w-full bg-card border border-zinc-700 rounded-2xl py-0 shadow-lg hover:shadow-xl transition duration-300">
          <CardHeader className="p-0">
            <div className="relative h-60 sm:h-72 overflow-hidden rounded-t-2xl">
              <img
                className="object-cover w-full h-full"
                src="https://images.pexels.com/photos/3937174/pexels-photo-3937174.jpeg"
                alt="Product"
              />
            </div>
          </CardHeader>

          <CardContent className="p-5 flex flex-col flex-grow">
            <h2 className="text-xl font-semibold mb-1">Any Esports Monitors</h2>
            <p className="text-sm text-muted-foreground mb-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              itaque!
            </p>
            <p className="text-xl font-bold">₹568.00</p>
          </CardContent>

          <CardFooter className="px-5 pb-5 flex flex-col sm:flex-row gap-2 sm:justify-between">
            <Button
              variant="outline"
              className="flex items-center justify-center w-full sm:w-auto"
            >
              <Edit className="mr-2 h-4 w-4" /> Edit
            </Button>
            <Button className="w-full sm:w-auto  hover:bg-red-600 ">
              Blacklist Products
            </Button>
          </CardFooter>
        </Card>
      </div>

      <Dialog>
        <DialogContent className="sm:max-w-[435px]">
          <DialogHeader>
            <DialogTitle>Edit Product</DialogTitle>
          </DialogHeader>
          <form>
            <div className="grid gap-4 py-4">
              <div className=" grid gap-4 items-center">
                <Label htmlFor="name" className="">
                  Name
                </Label>
                <Input id="name" name="name"></Input>
              </div>

              <div className=" grid gap-4 items-center">
                <Label htmlFor="description" className="">
                  Description
                </Label>
                <Textarea id="description" name="description"></Textarea>
              </div>

              <div className=" grid gap-4 items-center">
                <Label htmlFor="price" className="">
                  Price
                </Label>
                <Input type="number" min="0" id="price" name="price"></Input>
              </div>

              <div className="w-full grid gap-4 items-center">
                <Label htmlFor="category" className="">
                  Category
                </Label>
                <Select name="category">
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
