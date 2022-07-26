const roomService = require("../servieces/roomService");

const errorGenerator = require("../utils/errorGenerator");

const getRoomName = async (req, res, next) => {
  try {
    const { room_id } = req.params;

    const roomName = await roomService.getRoomName(room_id);
    return res.status(200).json({ roomName });
  } catch (error) {
    res.status(error.statusCode || 500).json({ message: error.message });
  }
};

const getRoomUsers = async (req, res, next) => {
  try {
    const { room_id } = req.params;

    const roomUsers = await roomService.getRoomUsers(room_id);
    return res.status(200).json({ roomUsers });
  } catch (error) {
    res.status(error.statusCode || 500).json({ message: error.message });
  }
};

const createRoomName = async (req, res, next) => {
  try {
    const roomName = req.room_name;

    if (!roomName.length) {
      throw await errorGenerator({
        statusCode: 400,
        message: "방 이름 길이는 0자 이상이어야 합니다.",
      });
    }

    const roomId = await roomService.createRoomName(roomName);
    return res
      .status(200)
      .json({ message: "ROOMNAME ADD SUCCESS", room_id: roomId });
  } catch (error) {
    res.status(error.statusCode || 500).json({ message: error.message });
  }
};

const patchRoomName = async (req, res, next) => {
  try {
    const { room_id } = req.params;
    const roomName = req.room_name;

    if (!roomName.length) {
      throw await errorGenerator({
        statusCode: 400,
        message: "방 이름 길이는 0자 이상이어야 합니다.",
      });
    }

    const roomId = await roomService.patchRoomName(room_id, roomName);
    return res.status(200).json({
      message: "ROOMNAME UPDATE SUCCESS",
      room_id: roomId,
    });
  } catch (error) {
    res.status(error.statusCode || 500).json({ message: error.message });
  }
};

module.exports = {
  getRoomName,
  getRoomUsers,
  createRoomName,
  patchRoomName,
};
