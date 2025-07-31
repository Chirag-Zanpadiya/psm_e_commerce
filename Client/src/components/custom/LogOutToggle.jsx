import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
const LogOutToggle = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="cursor-pointer">
            <AvatarFallback className="text-xl">CA</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="center">
          
          <DropdownMenuItem>Log Out</DropdownMenuItem>
          <Link to="/orders">
            <DropdownMenuItem>My Orders</DropdownMenuItem>
          </Link>
        
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default LogOutToggle;
