import React, { useState } from "react";
import { nanoid } from "nanoid";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CloudCog } from "lucide-react";

const categoryData = {
  trigger: "Category",
  items: ["Laptops", "Tablets", "HeadSet"],
};
const priceData = {
  trigger: "Price",
  items: [...new Set([1000, 1500, 3600, 1500, 1750])],
};

const FilterMenu = () => {
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [search, setSearch] = useState();
  // console.log(search);

  return (
    <div className="w-[93vw] flex flex-col sm:flex-row justify-between items-center mx-auto my-10 gap-3 sm:gap-0">
      {/* Dropdown filters */}
      <div className="flex sm:w-[30%] w-full gap-3">
        {/* For Category */}
        <Select onValueChange={(value) => setCategory(value)}>
          <SelectTrigger id={categoryData.trigger}>
            <SelectValue placeholder={categoryData.trigger} />
          </SelectTrigger>
          <SelectContent position="popper">
            {categoryData.items.map((item) => (
              <SelectItem value={item} key={item} className="capitalize">
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* prices */}
        <Select onValueChange={(value) => setPrice(value)}>
          <SelectTrigger id={priceData.trigger}>
            <SelectValue placeholder={priceData.trigger} />
          </SelectTrigger>
          <SelectContent position="popper">
            {priceData.items.map((item, index) => (
              <SelectItem
                value={item}
                key={`${item}-${index}`}
                className="capitalize"
              >
                Less then {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* search input */}
      <div className="sm:w-[60%] w-full">
        <Input
          id="search"
          placeholder="Search Here..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
};

export default FilterMenu;
