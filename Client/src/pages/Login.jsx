import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-[60vw] lg:w-[25vw] mx-auto my-32 grid gap-3">
      <h1 className="text-2xl font-bold">Login Into Your Account</h1>
      <form className="grid gap-3">
        <Input placeholder="Enter Your Email" type="email" name="email" />
        <Input
          placeholder="Enter Your Password"
          type="password"
          name="password"
        />

        <Button>Sign In</Button>
        <div className="flex gap-2 text-center">
          <label
            htmlFor="terms"
            lassName="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Don't Have account?
          </label>
          <Link to={"/signup"}>
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
            >
              {" "}
              Sign Up
            </label>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
