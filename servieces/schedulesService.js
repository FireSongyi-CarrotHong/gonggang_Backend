const schedulesDao = require("../models/schedulesDao");

const getSchedules = async (user_id) => {
  return await schedulesDao.getSchedules(user_id);
};

const postSchedules = async (id, schedule_number) => {
  const result = await schedulesDao.postSchedules(id, schedule_number);
  return result;
};

const patchSchedules = async (id, schedule_number) => {
  return await schedulesDao.patchSchedules(id, schedule_number);
};

module.exports = {
  getSchedules,
  postSchedules,
  patchSchedules,
};
