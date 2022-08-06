const schedulesDao = require("../models/schedulesDao");

const getSchedules = async (user_id) => {
  return await schedulesDao.getSchedules(user_id);
};

const postSchedules = async (schedule_number) => {
  return await schedulesDao.postSchedules(schedule_number);
};

const patchSchedules = async (schedule_number) => {
  return await schedulesDao.patchSchedules(schedule_number);
};

module.exports = {
  getSchedules,
  postSchedules,
  patchSchedules,
};
