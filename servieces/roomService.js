const roomDao = require("../models/roomDao");

const getRoomName = async (roomId) => {
  return await roomDao.getRoomName(roomId);
};

const getRoomUsers = async (roomId) => {
  return await roomDao.getRoomUsers(roomId);
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
  patchRoomName,
};
