const roomDao = require("../models/roomDao");
const errorGenerator = require("../utils/errorGenerator");

const getRoomName = async (roomId) => {
  return await roomDao.getRoomName(roomId);
};

const getRoomUsers = async (roomId) => {
  return await roomDao.getRoomUsers(roomId);
};

const vaildate = async (roomName) => {
  const validate = await roomDao.vaildate(roomName);

  if (!validate) {
    return { message: "OK", room_name: roomName };
  }

  throw await errorGenerator({
    statusCode: 400,
    message: "이미 존재하는 제목입니다.",
  });
};

const createRoomName = async (roomName) => {
  return await roomDao.createRoomName(roomName);
};

const patchRoomName = async (roomId, roomName) => {
  return await roomDao.patchRoomName(roomId, roomName);
};

module.exports = {
  getRoomName,
  getRoomUsers,
  createRoomName,
  vaildate,
  patchRoomName,
};
