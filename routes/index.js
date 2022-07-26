const express = require("express");
const router = express.Router();

const roomRouter = require("./roomRoute");

router.use("/rooms", roomRouter);

module.exports = router;
