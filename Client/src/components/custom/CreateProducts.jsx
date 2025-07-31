import React, { useRef, useState } from "react";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import { Loader2, Upload, X } from "lucide-react";
import { Textarea } from "../ui/textarea";

const CreateProducts = () => {
  const [currentColor, setCurrentColor] = useState("#000000");
  const [colors, setColors] = useState([]);
  const [images, setImages] = useState([]);
  const fileInputRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  const addColor = () => {
    if (!colors.includes(currentColor)) {
      setColors([...colors, currentColor]);
    }
  };
  const removeColor = (colorToRemove) => {
    setColors(colors.filter((color) => color !== colorToRemove));
  };
  const removeImage = (indexToRemove) => {
    setImages(images.filter((_, index) => index !== indexToRemove));
  };
  const handleImageUpload = (e) => {};

  return (
    <div className="w-full  -z-10">
      <CardHeader>
        <CardTitle className="text-2xl">Add New Products</CardTitle>
        <CardDescription>
          Enter the details for the new product you want to add to your
          e-commerce store
        </CardDescription>
      </CardHeader>

      <form className="mt-10">
        <div className="flex flex-col  lg:flex-row lg:w-[70vw]">
          <CardContent className="w-full space-y-2">
            <div className="space-y-2">
              <Label htmlFor="name">Product Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Enter Product Name"
                required
              ></Input>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Descriptions</Label>
              <Textarea
                rows={4}
                id="description"
                name="description"
                placeholder="Enter Product Descriptions"
                required
              ></Textarea>
            </div>

            <div className="space-y-2">
              <Label htmlFor="price">Price</Label>
              <Input
                id="price"
                name="price"
                type="number"
                placeholder="0.00"
                step="0.01"
                min="0"
                required
              ></Input>
            </div>

            <div className="space-y-2">
              <Label htmlFor="stock">Stock</Label>
              <Input
                id="stock"
                name="stock"
                type="number"
                placeholder="20"
                min="0"
                required
              ></Input>
            </div>
          </CardContent>

          <CardContent className="w-full space-y-2">
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select name="category" required>
                <SelectTrigger>
                  <SelectValue placeholder="Select a category"></SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Headset">Headset</SelectItem>
                  <SelectItem value="Keyboard">Keyboard</SelectItem>
                  <SelectItem value="Mouse">Mouse</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="color">Colors</Label>
              <div className="flex items-center space-x-2">
                <Input
                  id="color"
                  type="color"
                  value={currentColor}
                  onChange={(e) => setCurrentColor(e.target.value)}
                  className="w-12 h-12 p-1 rounded-md"
                ></Input>
                <Button variant="outline" onClick={addColor}>
                  Add Color
                </Button>
              </div>

              <div className="flex flex-wrap gap-2 mt-2">
                {colors.map((color, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center bg-gray-100 rounded-full pl-2 pr-1 py-1"
                  >
                    <div
                      className="w-4 h-4  rounded-full mr-2"
                      style={{ backgroundColor: color }}
                    ></div>
                    <span className="text-sm mr-1 dark:text-slate-900">
                      {color}
                    </span>
                    <Button
                      variant="ghost"
                      className="h-6 w-6 p-0 rounded-full"
                      onClick={() => removeColor(color)}
                    >
                      <X className="h-4 w-4"></X>
                      <span className="sr-only">Remove Color</span>
                    </Button>
                  </div>
                ))}
              </div>

              {/* iamges section */}
              <div className="space-y-2">
                <Label htmlFor="images">Product Images</Label>

                <div className="flex flex-wrap gap-4">
                  <div className="relative">
                    <img
                      src="https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg"
                      alt={`Product image ${1}`}
                      width={100}
                      height={100}
                      className="rounded-md object-cover"
                    />
                    <Button
                      variant="destructive"
                      size="icon"
                      className="absolute -top-2 -right-6 h-6 w-6 rounded-full"
                      onClick={() => removeImage(0)}
                    >
                      <X className="h-4 w-4"></X>
                      <span className="sr-only"></span>
                    </Button>
                  </div>
                  {/* {images.length > 4 && ( */}
                  <Button
                    onClick={() => fileInputRef.current?.click()}
                    className="w-[100px] h-[100px]"
                    variant="outline"
                  >
                    <Upload className="h-6 w-6" />
                    <span className="sr-only">Upload Image</span>
                  </Button>
                  {/* )} */}
                </div>
                <Input
                  type="file"
                  id="images"
                  name="images"
                  accept="image/*"
                  multiple
                  className="hidden"
                  onChange={handleImageUpload}
                  ref={fileInputRef}
                />
                <p className="text-sm text-muted-foreground mt-2">
                  Upload Up To 4 Images. Support Formates : JPG , PNG , GIF
                </p>
              </div>
            </div>
          </CardContent>
        </div>

        <CardFooter className="mt-4">
          <Button type="submit" className="w-full " disabled={isLoading}>
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {isLoading ? "Adding Product..." : "Add Product..."}
          </Button>
        </CardFooter>
      </form>
    </div>
  );
};

export default CreateProducts;
