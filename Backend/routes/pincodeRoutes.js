const router = require("express").Router();
const { addPincodes, getPincode } = require("../controllers/pincodeController.js");
const verifyToken = require("../middlerwares/verifyToken.js");


router.post("/add-pincodes", verifyToken ,addPincodes);

router.get("/get-pincode/:pincode" , getPincode);

module.exports = router;
