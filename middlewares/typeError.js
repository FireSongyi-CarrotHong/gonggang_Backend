const userColor = async (req, res, next) => {
  const color = req.body.color;

  if (!(typeof color === "string"))
    return res
      .status(400)
      .json({ message: "TYPE_ERROR: theme_color's type should be string" });

  next();
};

const roomId = async (req, res, next) => {
  const { room_id } = req.params;
  const room_Id = Number(room_id);

  if (isNaN(room_Id))
    return res
      .status(400)
      .json({ message: "TYPE_ERROR: typeof room_Id should be number" });

  next();
};

const roomName = async (req, res, next) => {
  const roomName = req.body.room_name;

  if (!(typeof roomName === "string"))
    return res
      .status(400)
      .json({ message: "TYPE_ERROR: room_name's type should be String" });

  next();
};

const userId = async (req, res, next) => {
  const { user_id } = req.params;
  const user_Id = Number(user_id);

  if (isNaN(user_Id))
    return res
      .status(400)
      .json({ message: "TYPE_ERROR: typeof user_Id should be number" });

  next();
};

const schedules = async (req, res, next) => {
  const scheduleNumber = req.body.schedule_number;

  if (typeof scheduleNumber === "object") {
    for (let item of scheduleNumber) {
      console.log(item);
      if (!(typeof item === "number"))
        return res.status(400).json({
          message:
            "TYPE_ERROR: typeof schedule_number's element should be nubmer",
        });
    }
  } else {
    return res.status(400).json({
      message: "TYPE_ERROR: typeof schedule_number should be array",
    });
  }

  next();
};

module.exports = {
  userColor,
  roomId,
  roomName,
  userId,
  schedules,
};
