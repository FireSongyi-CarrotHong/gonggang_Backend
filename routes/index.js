const express = require("express");
const router = express.Router();
const userRoute = require("./userRoute");
const roomRoute = require("./roomRoute");

router.use("/users", userRoute);
router.use("/rooms", roomRoute);

module.exports = router;
