import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import axios from "axios";
const SignUp = () => {
  const [enabled, setEnabled] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, phone, password } = e.target.elements;

    if (
      name.value.trim() == "" ||
      email.value.trim() == "" ||
      phone.value.trim() == "" ||
      password.value.trim() == ""
    ) {
      toast.warning(
        <span className="text-red-600 font-semibold">
          Please Provide credentials
        </span>,
        {
          duration: 4000, // 4 seconds
          position: "top-center",
        }
      );
    } else {
      try {
        const res = await axios.post(import.meta.env.VITE_API_URL + "/signup", {
          name: name.value,
          email: email.value,
          phone: phone.value,
          password: password.value,
        });

        const data = await res.data;

        toast.success(
          <span className="text-green-600 font-semibold">{data.message}</span>,
          {
            duration: 4000, // 4 seconds
            position: "top-center",
          }
        );

        navigate("/login");
      } catch (error) {
        toast.error(
          <span className="text-red-600 font-semibold">
            {error.response.data.message}
          </span>,
          {
            description: "Please try again later.",
            duration: 4000, // 4 seconds
            position: "top-center",
          }
        );
      }
    }
  };
  return (
    <>
      <div className="w-[60vw] lg:w-[25vw] mx-auto my-10 grid gap-3">
        <h1 className="text-2xl font-bold">Register Your Account</h1>
        <form className="grid gap-3" onSubmit={handleSubmit}>
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
