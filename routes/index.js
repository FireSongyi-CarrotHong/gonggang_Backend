const express = require("express");
const router = express.Router();
const userRoute = require("./userRoute");
const roomRoute = require("./roomRoute");
const schedulesRoute = require("./schedulesRoute");

router.use("/users", userRoute);
router.use("/rooms", roomRoute);
router.use("/schedules", schedulesRoute);

module.exports = router;
