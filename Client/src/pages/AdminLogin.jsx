import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { setUserLogin } from "@/redux/slice/authSlice";
import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
const AdminLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();

    const username = e.target.username.value.trim();
    const password = e.target.password.value.trim();
    console.log(username);
    console.log(password);

    if (!username || !password) {
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
        const res = await axios.post(
          import.meta.env.VITE_API_URL + "/admin-login",
          {
            username,
            password,
          }
        );

        console.log(res);
        const data = await res.data;
        console.log(data);

        dispatch(setUserLogin(data));

        toast.success(
          <span className="text-green-600 font-semibold">{data.message}</span>,
          {
            duration: 4000, // 4 seconds
            position: "top-center",
          }
        );
        navigate("/admin/dashboard");
      } catch (error) {

        console.log('error :>> ', error);
        return toast.error(
          <span className="text-red-600 font-semibold">
            {error.response.data.message}
          </span>,
          {
            description: "Please try again later .",
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
      <form className="grid gap-3" onSubmit={handleLogin}>
        <Input placeholder="Username Here..." type="text" name="username" />
        <Input placeholder="Password Here..." type="password" name="password" />

        <Button>Log In</Button>
      </form>
    </div>
  );
};

export default AdminLogin;
