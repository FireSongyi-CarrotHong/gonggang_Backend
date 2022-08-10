const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getSchedules = async (user_id) => {
  const result = await prisma.schedule.findMany({
    where: { user_id },
    select: { schedule_number: true },
  });

  const array = result.map((element) => element.schedule_number);

  return array;
};

const postSchedules = async (id, schedule_number) => {
  const array = [];
  for (let i = 0; i < schedule_number.length; i++) {
    const result = await prisma.schedule.create({
      data: {
        user_id: id,
        schedule_number: schedule_number[i],
      },
    });
    array.push(result.schedule_number);
  }
  return array;
};

const patchSchedules = async (id, schedule_number) => {
  const array = [];

  await prisma.schedule.deleteMany({
    where: {
      user_id: id,
    },
  });

  for (let i = 0; i < schedule_number.length; i++) {
    const result = await prisma.schedule.create({
      data: { user_id: id, schedule_number: schedule_number[i] },
    });
    array.push(result.schedule_number);
  }

  return array;
};

module.exports = {
  getSchedules,
  postSchedules,
  patchSchedules,
};
