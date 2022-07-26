const express = require("express");
const router = express.Router();

const roomController = require("../controllers/roomController");
const keyError = require("../middlewares/keyError");
const typeError = require("../middlewares/typeError");

// GET
router.get(
  "/:room_id",
  keyError.roomId,
  typeError.roomId,
  roomController.getRoomName
);
router.get(
  "/:room_id/user",
  keyError.roomId,
  typeError.roomId,
  roomController.getRoomUsers
);

// POST
router.post(
  "/",
  keyError.roomName,
  typeError.roomName,
  roomController.createRoomName
);

// PATCH
router.patch(
  "/:room_id",
  keyError.roomId,
  keyError.roomName,
  typeError.roomId,
  typeError.roomName,
  roomController.patchRoomName
);

module.exports = router;
