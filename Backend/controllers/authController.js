const User = require("../models/User.js");
const bcrypt = require("bcrypt");
const signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    let user = await User.findOne({ email: email });
    if (user) {
      return res.status(400).json({
        success: false,
        message: "Please Try Again With Different Email",
      });
    }

    // first of all hasing the password

    const hashedPassword = await bcrypt.hash(password, 10);

    user = new User()

  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { signup };
