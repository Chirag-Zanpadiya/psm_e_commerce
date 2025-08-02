const router = require("express").Router();
const { createProduct } = require("../controllers/productController.js");
const upload = require("../middlerwares/multer.js");
const verifyToken = require("../middlerwares/verifyToken.js");

router.post(
  "/create-product",
  verifyToken,
  upload.array("images", 4),
  createProduct
);

module.exports = router;
