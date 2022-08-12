const schedulesService = require("../servieces/schedulesService");

const getSchedules = async (req, res, next) => {
  try {
    const { user_id } = req.params;
    const user_Id = Number(user_id);

    const schedules = await schedulesService.getSchedules(user_Id);
    return res.status(200).json({ schedules });
  } catch (error) {
    res.status(error.statusCode || 500).json({ message: error.message });
  }
};

const postSchedules = async (req, res, next) => {
  try {
    const id = req.userId;
    const schedule_number = req.body.schedule_number;

    const schedules = await schedulesService.postSchedules(id, schedule_number);

    return res
      .status(200)
      .json({ message: "USER SCHEDULE ADD SUCCESS", schedules });
  } catch (error) {
    res.status(error.statusCode || 500).json({ message: error.message });
  }
};

const patchSchedules = async (req, res, next) => {
  try {
    const id = req.userId;
    const schedule_number = req.body.schedule_number;

    const schedules = await schedulesService.patchSchedules(
      id,
      schedule_number
    );

    return res
      .status(200)
      .json({ message: "USER SCHEDULE UPDATE SUCCESS", schedules });
  } catch (error) {
    res.status(error.statusCode || 500).json({ message: error.message });
  }
};

module.exports = {
  getSchedules,
  postSchedules,
  patchSchedules,
};
