const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");
const authorizedUser = require("../middlewares/authorization");
const keyError = require("../middlewares/keyError");
const typeError = require("../middlewares/typeError");

router.get("/login", userController.signupWithLogin);
router.get(
  "",
  authorizedUser.getUserIdByVerifyToken,
  userController.getUserInfo
);
router.patch(
  "/color",
  authorizedUser.getUserIdByVerifyToken,
  keyError.userColor,
  typeError.userColor,
  userController.createThemeColor
);

module.exports = router;
