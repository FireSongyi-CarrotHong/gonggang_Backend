const express = require("express");
const router = express.Router();
const userRoute = require("./userRoute");

router.use("/users", userRoute);

const roomRouter = require("./roomRoute");

router.use("/rooms", roomRouter);

module.exports = router;
