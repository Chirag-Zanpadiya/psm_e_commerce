import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const Settings = () => {
  return (
    <div className="flex  flex-col sm:flex-row justify-center items-center gap-3 w-screen sm:w-[80vw] sm:justify-start">
      {/* change user name  */}
      <div className="">
        <h2 className="text-2xl font-bold mb-3">Change Username</h2>
        <form className="grid gap-3 w-[80vw] sm:w-[30vw]">
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
        <form className="grid gap-3 w-[80vw] sm:w-[30vw]">
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
