import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { setUserLogin } from "@/redux/slice/authSlice";
import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = e.target.elements;

    if (email.value.trim() === "" || password.value.trim() === "") {
      toast.warning(
        <span className="text-red-600 font-semibold">
          Please Provide Email And Password
        </span>,
        {
          duration: 4000, // 4 seconds
          position: "top-center",
        }
      );
    } else {
      try {
        const res = await axios.post(import.meta.env.VITE_API_URL + "/login", {
          email: email.value,
          password: password.value,
        });

        const data = await res.data;

        dispatch(setUserLogin(data));

        toast.success(
          <span className="text-green-600 font-semibold">{data.message}</span>,
          {
            duration: 4000, // 4 seconds
            position: "top-center",
          }
        );

        navigate("/");
      } catch (error) {
        // toast.error(error.response.data.message);

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
    <div className="w-[60vw] lg:w-[25vw] mx-auto my-32 grid gap-3">
      <h1 className="text-2xl font-bold">Login Into Your Account</h1>
      <form className="grid gap-3" onSubmit={handleSubmit}>
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
