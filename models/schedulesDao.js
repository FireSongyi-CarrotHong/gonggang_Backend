const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getSchedules = async (user_id) => {};

const postSchedules = async (schedule_number) => {};

const patchSchedules = async (schedule_number) => {};

module.exports = {
  getSchedules,
  postSchedules,
  patchSchedules,
};
