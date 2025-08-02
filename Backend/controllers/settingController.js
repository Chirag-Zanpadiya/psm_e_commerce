const { model } = require("mongoose");
const Admin = require("../models/Admin.js");
const User = require("../models/User.js");
const { ROLES } = require("../utils/constants.js");
const bcrypt = require("bcrypt");

const changeUsername = async (req, res) => {
  if (req.role !== ROLES.admin) {
    return res.status(401).json({
      success: false,
      message: "Access Denied",
    });
  }

  try {
    const { previousUsername, newUsername } = req.body;

    if (!newUsername) {
      return res
        .status(400)
        .json({ success: false, message: "Username is Required" });
    }

    const user = await Admin.findOneAndUpdate(
      {
        username: previousUsername,
      },
      {
        username: newUsername,
      },
      {
        new: true,
      }
    );
    if (!user)
      return res
        .status(404)
        .json({ success: false, message: "Username does not exists" });

    return res.status(200).json({
      success: true,
      message: `New Username is ${user.username}`,
      user: {
        username: user.username,
        role: user.role,
      },
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

const changePassword = async (req, res) => {
  if (req.role !== ROLES.admin) {
    return res.status(401).json({ success: false, message: "Access denied" });
  }

  try {
    const { username, previousPassword, newPassword } = req.body;

    if (!previousPassword || !newPassword) {
      return res.status(400).json({
        success: false,
        message: "Previous and New Password Is Required",
      });
    }

    let user = await Admin.findOne({ username });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User Not Found",
      });
    }

    const isPasswordValid = await bcrypt.compare(
      previousPassword,
      user.password
    );
    if (!isPasswordValid) {
      return res.status(400).json({
        success: false,
        message: "Password Does not Match Or Password is Incorrect",
      });
    }

    const securePassword = await bcrypt.hash(newPassword, 10);

    user.password = securePassword;

    await user.save();

    return res.status(200).json({
      success: true,
      message: "Password Changed Successfully",
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { changePassword, changeUsername };
