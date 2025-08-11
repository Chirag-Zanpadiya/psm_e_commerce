const router = require("express").Router();
const {
  verifyPayment,
  generatePayment,
} = require("../controllers/paymentController");
const verifyToken = require("../middlerwares/verifyToken.js");

router.post("/generate-payment", verifyToken, generatePayment);
router.post("/verify-payment", verifyToken, verifyPayment);

module.exports = router;
