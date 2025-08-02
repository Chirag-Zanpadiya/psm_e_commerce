const router = require("express").Router();
const {
  changeUsername,
  changePassword,
} = require("../controllers/settingController.js");
const verifyToken = require("../middlerwares/verifyToken.js");

router.put("/change-username", verifyToken, changeUsername);
router.put("/change-password", verifyToken, changePassword);

module.exports = router;
