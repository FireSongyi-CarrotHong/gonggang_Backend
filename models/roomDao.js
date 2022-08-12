const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getRoomName = async (roomId) => {
  return await prisma.room.findUnique({
    where: {
      id: roomId,
    },
    select: {
      roomname: true,
    },
  });
};

const getRoomUsers = async (roomId) => {
  return await prisma.userRoom.findMany({
    where: {
      room_id: roomId,
    },
    select: {
      user_id: true,
      user: {
        select: {
          username: true,
          theme_color: true,
        },
      },
    },
  });
};

const vaildate = async (roomName) => {
  return await prisma.room.findUnique({
    where: {
      roomname: roomName,
    },
  });
};

const createRoomName = async (roomName) => {
  return await prisma.room.create({
    data: {
      roomname: roomName,
    },
  });
};

const patchRoomName = async (roomId, roomName) => {
  return await prisma.room.update({
    where: {
      id: roomId,
    },
    data: {
      roomname: roomName,
    },
  });
};

module.exports = {
  getRoomName,
  getRoomUsers,
  createRoomName,
  vaildate,
  patchRoomName,
};
