const Pincode = require("../models/Pincode.js");
const { ROLES } = require("../utils/constants.js");

const addPincodes = async (req, res) => {
  if (req.role !== ROLES.admin) {
    return res.status(401).json({
      success: false,
      message: "Only Admin Can Add Pincodes",
    });
  }

  // pincodes ka array like this
  //   [
  //     {
  //       id: 1,
  //       pincode: 382460,
  //     },
  //     {
  //       id: 1,
  //       pincode: 382460,
  //     },
  //   ];
  // console.log("headers:", req.headers);
  // console.log("body raw:", req.body);

  const { pincodes } = req.body || {};

  if (!pincodes || pincodes.length === 0) {
    return res.status(400).json({
      success: false,
      message: "Please Provies PinCodes",
    });
  }

  try {
    const existingPincodes = await Pincode.find({
      pincode: { $in: pincodes.map((p) => p.pincode) },
    });

    const existingPincodesValues = existingPincodes.map((p) => p.pincode);

    const newPincodes = pincodes.filter(
      (p) => !existingPincodesValues.includes(p.pincode)
    );

    if (newPincodes.length === 0) {
      return res
        .status(400)
        .json({ success: false, message: "All pincodes already exist" });
    }

    await Pincode.insertMany(newPincodes);

    return res
      .status(200)
      .json({ success: true, message: "Pincodes added successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

const getPincode = async (req, res) => {
  const { pincode } = req.params;

  try {
    const existingPincode = await Pincode.find({ pincode });

    if (existingPincode.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No Delivery Avaiable For This Location",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Delivery Avaiable",
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { addPincodes, getPincode };
