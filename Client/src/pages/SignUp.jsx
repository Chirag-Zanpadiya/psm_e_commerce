import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [enabled, setEnabled] = useState(false);
  return (
    <>
      <div className="w-[60vw] lg:w-[25vw] mx-auto my-10 grid gap-3">
        <h1 className="text-2xl font-bold">Register Your Account</h1>
        <form className="grid gap-3">
          <Input placeholder="Enter Your Name" type="text" name="name" />
          <Input placeholder="Enter Your Email" type="email" name="email" />
          <Input placeholder="Enter Your Phone" type="tel" name="phone" />
          <Input
            placeholder="Enter Your Password"
            type="password"
            name="password"
          />
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <Checkbox id="terms" onCheckedChange={(e) => setEnabled(e)} />
              <label htmlFor="terms">Accept terms and conditions</label>
            </div>
          </div>
          <Button disabled={!enabled}>Sign Up</Button>
          <div className="flex gap-2 text-center">
            <label
              htmlFor="terms"
              lassName="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Already have account?
            </label>
            <Link to={"/login"}>
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
              >
                {" "}
                Login
              </label>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
