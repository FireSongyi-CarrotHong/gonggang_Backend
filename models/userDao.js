const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getUserId = async (kakao_id) => {
  return await prisma.user.findUnique({
    where: {
      kakao_id,
    },
  });
};

const createUser = async (kakao_id, username, profile_img_url) => {
  return await prisma.user.create({
    data: {
      kakao_id,
      username,
      profile_img_url,
    },
  });
};

const getUserInfo = async (id) => {
  return await prisma.user.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      username: true,
      profile_img_url: true,
      theme_color: true,
    },
  });
};

module.exports = { getUserId, createUser, getUserInfo };
