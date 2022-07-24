const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
// const authorizedUser = require("../middlewares/authorization");

router.post("/login", userController.signupWithLogin);

module.exports = router;
