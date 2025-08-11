const User = require("../models/User.js");
const Admin = require("../models/Admin.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  const { name, email, password, phone } = req.body;
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

    user = new User({ name, email, phone, password: hashedPassword });

    await user.save();

    return res.status(201).json({
      success: true,
      message: "User Created Successfully",
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email: email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User Not Found Please Login First Of All",
      });
    }

    let comparePassword = await bcrypt.compare(password, user.password);

    if (!comparePassword) {
      return res.status(404).json({
        success: false,
        message: "Incorrect Password - User",
      });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET
    );

    // yaha pe basically token isliye bheja hai ki cookie store hote hai jab ham paid
    // plan se hamari website host karte hai tabk free me cookie store nahi hoti
    // isliye ham token bhej kar local stoage me store karayege
    return res.status(200).json({
      success: true,
      message: "User Login Successfully",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const adminSignup = async (req, res) => {
  const { username, password } = req.body;

  try {
    let admin = await Admin.findOne({ username: username });
    if (admin) {
      return res.status(400).json({
        success: false,
        message: "Please try Again with different Username",
      });
    }

    const securePassword = await bcrypt.hash(password, 10);

    admin = new Admin({
      username,
      password: securePassword,
    });

    await admin.save();

    return res.status(201).json({
      success: true,
      message: "Admin SignUp Done",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const adminLogin = async (req, res) => {
  const { username, password } = req.body;

  try {
    let admin = await Admin.findOne({ username });

    if (!admin) {
      return res.status(404).json({
        success: false,
        message: "User Not Found For This Admin Creadential",
      });
    }

    const comparePassword = await bcrypt.compare(password, admin.password);

    if (!comparePassword) {
      return res.status(404).json({
        success: false,
        message: "Incorrect Password - Admin",
      });
    }

    const token = jwt.sign(
      { id: admin._id, role: admin.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    return res.status(200).json({
      success: true,
      message: "Admin Login Successfully",
      token,
      user: {
        id: admin._id,
        username: admin.username,
        role: admin.role,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { signup, login, adminSignup, adminLogin };
