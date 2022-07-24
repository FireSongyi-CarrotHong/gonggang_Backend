const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getUserId = async (kakao_id) => {
  return await prisma.$queryRaw`
		  SELECT id FROM users WHERE kakao_id = ${kakao_id};
	  `;
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

module.exports = { getUserId, createUser };
