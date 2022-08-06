const schedulesService = require("../servieces/schedulesService");

const getSchedules = async (req, res, next) => {
  try {
    const { user_id } = req.params;

    const schedules = await schedulesService.getSchedules(user_id);
    return res.status(200).json({ schedules });
  } catch (error) {
    res.status(error.statusCode || 500).json({ message: error.message });
  }
};

const postSchedules = async (req, res, next) => {
  try {
    const schedule_number = req.schedule_number;

    const result = await schedulesService.getSchedules(schedule_number);
    return res
      .status(200)
      .json({ message: "USER SCHEDULE ADD SUCCESS", result });
  } catch (error) {
    res.status(error.statusCode || 500).json({ message: error.message });
  }
};

const patchSchedules = async (req, res, next) => {
  try {
    const schedule_number = req.schedule_number;

    const result = await schedulesService.getSchedules(schedule_number);
    return res
      .status(200)
      .json({ message: "USER SCHEDULE UPDATE SUCCESS", result });
  } catch (error) {
    res.status(error.statusCode || 500).json({ message: error.message });
  }
};

module.exports = {
  getSchedules,
  postSchedules,
  patchSchedules,
};
