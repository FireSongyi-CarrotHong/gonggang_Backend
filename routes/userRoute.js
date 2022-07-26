const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authorizedUser = require("../middlewares/authorization");

router.get("/login", userController.signupWithLogin);
router.get(
  "",
  authorizedUser.getUserIdByVerifyToken,
  userController.getUserInfo
);
router.post(
  "/color",
  authorizedUser.getUserIdByVerifyToken,
  userController.createThemeColor
);

module.exports = router;
