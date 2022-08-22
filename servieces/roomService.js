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
    return { message: "OK" };
  } else {
    return { message: "DUPLICATE" };
  }
};

const createRoomName = async (userId, roomName) => {
  const createRoom = await roomDao.createRoomName(roomName);
  const roomId = createRoom.id;
  const createUserRoom = await roomDao.createUserRoomId(userId, roomId);

  return createRoom;
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
