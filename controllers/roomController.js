const roomService = require("../servieces/roomService");
const errorGenerator = require("../utils/errorGenerator");

// ---------------- GET ---------------- //
const getRoomName = async (req, res, next) => {
  try {
    const { room_id } = req.params;
    const room_Id = Number(room_id);

    const roomName = await roomService.getRoomName(room_Id);
    return res.status(200).json(roomName);
  } catch (error) {
    res.status(error.statusCode || 500).json({ message: error.message });
  }
};

const getRoomUsers = async (req, res, next) => {
  try {
    const { room_id } = req.params;
    const room_Id = Number(room_id);

    const roomUsers = await roomService.getRoomUsers(room_Id);
    return res.status(200).json({ room_users: roomUsers });
  } catch (error) {
    res.status(error.statusCode || 500).json({ message: error.message });
  }
};

const vaildate = async (req, res, next) => {
  try {
    const roomName = req.body.room_name;

    const validate = await roomService.vaildate(roomName);

    return res.status(200).json(validate);
  } catch (error) {
    res.status(error.statusCode || 500).json({ message: error.message });
  }
};

// ---------------- POST ---------------- //
const createRoomName = async (req, res, next) => {
  try {
    const id = req.userId;
    const roomName = req.body.room_name;

    if (!roomName.length) {
      throw await errorGenerator({
        statusCode: 400,
        message: "방 이름 길이는 0자 이상이어야 합니다.",
      });
    }

    const room = await roomService.createRoomName(id, roomName);
    return res
      .status(200)
      .json({ message: "ROOMNAME ADD SUCCESS", room_id: room.id });
  } catch (error) {
    res.status(error.statusCode || 500).json({ message: error.message });
  }
};

// ---------------- UPDATE ---------------- //
const patchRoomName = async (req, res, next) => {
  try {
    const { room_id } = req.params;
    const roomName = req.body.room_name;

    const room_Id = Number(room_id);

    if (!roomName.length) {
      throw await errorGenerator({
        statusCode: 400,
        message: "방 이름 길이는 0자 이상이어야 합니다.",
      });
    }

    const roomId = await roomService.patchRoomName(room_Id, roomName);
    return res.status(200).json({
      message: "ROOMNAME UPDATE SUCCESS",
      room_id: roomId.id,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({ message: error.message });
  }
};

module.exports = {
  getRoomName,
  getRoomUsers,
  createRoomName,
  vaildate,
  patchRoomName,
};
