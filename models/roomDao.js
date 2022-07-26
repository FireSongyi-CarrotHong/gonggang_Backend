const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getRoomName = async (roomId) => {};

const getRoomUsers = async (roomId) => {};

const createRoomName = async (roomName) => {};

const patchRoomName = async (roomId, roomName) => {};

module.exports = {
  getRoomName,
  getRoomUsers,
  createRoomName,
  patchRoomName,
};
