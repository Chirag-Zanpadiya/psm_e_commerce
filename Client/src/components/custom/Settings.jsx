import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { toast } from "sonner";
import useErrorLogout from "../../hooks/use-error-logout";
import axios from "axios";
const Settings = () => {
  const { handleErrorLogout } = useErrorLogout();

  const changeUsername = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const previousUsername = formData.get("previousUsername");
    const newUsername = formData.get("newUsername");

    if (!newUsername) {
      toast.warning(
        <span className="text-red-600 font-semibold">
          UserName Is Required
        </span>,
        {
          duration: 4000, // 4 seconds
          position: "top-center",
        }
      );
      return;
    }

    try {
      const res = await axios.put(
        import.meta.env.VITE_API_URL + "/change-username",
        {
          previousUsername,
          newUsername,
        },
        {
          headers: `Bearer ${localStorage.getItem("token")}`,
        }
      );

      const data = await res.data;

      localStorage.setItem("user", JSON.stringify(data.user));

      e.target.reset();

      return toast.success(
        <span className="text-green-600 font-semibold">Success</span>,
        {
          duration: 4000, // 4 seconds
          position: "top-center",
          description: data.message,
        }
      );
    } catch (error) {
      return handleErrorLogout(error);
    }
  };

  const changePassword = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const previousPassword = formData.get("previousPassword");
    const newPassword = formData.get("newPassword");

    if (!newPassword || !previousPassword) {
      toast.warning(
        <span className="text-red-600 font-semibold">
          Password Is Required
        </span>,
        {
          duration: 4000, // 4 seconds
          position: "top-center",
        }
      );
      return;
    }

    try {
      const res = await axios.put(
        import.meta.env.VITE_API_URL + "/change-password",
        {
          username: JSON.parse(localStorage.getItem("user")).username,
          previousPassword,
          newPassword,
        },
        {
          headers: `Bearer ${localStorage.getItem("token")}`,
        }
      );

      const data = await res.data;

      localStorage.setItem("user", JSON.stringify(data.user));

      e.target.reset();

      return toast.success(
        <span className="text-green-600 font-semibold">Success</span>,
        {
          duration: 4000, // 4 seconds
          position: "top-center",
          description: data.message,
        }
      );
    } catch (error) {
      return handleErrorLogout(error);
    }
  };

  return (
    <div className="flex  flex-col sm:flex-row justify-center items-center gap-3 w-screen sm:w-[80vw] sm:justify-start">
      {/* change user name  */}
      <div className="">
        <h2 className="text-2xl font-bold mb-3">Change Username</h2>
        <form
          className="grid gap-3 w-[80vw] sm:w-[30vw]"
          onSubmit={changeUsername}
        >
          <Input
            type="text"
            placeholder="Enter Previous Username"
            name="previousUsername"
          ></Input>
          <Input
            type="text"
            placeholder="Enter New Username"
            name="newUsername"
          ></Input>
          <Button type="submit" className="">
            Change Username
          </Button>
        </form>
      </div>

      {/* change password  */}
      <div className="">
        <h2 className="text-2xl font-bold mb-3">Change Password</h2>
        <form
          className="grid gap-3 w-[80vw] sm:w-[30vw]"
          onSubmit={changePassword}
        >
          <Input
            type="text"
            placeholder="Enter Previous Password"
            name="previousPassword"
          ></Input>
          <Input
            type="text"
            placeholder="Enter New Password"
            name="newPassword"
          ></Input>
          <Button type="submit" className="">
            Change Password
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
