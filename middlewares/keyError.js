const userColor = async (req, res, next) => {
  const color = req.body.color;

  if (!color) return res.status(400).json({ message: "KEY_ERROR: no color" });

  next();
};

const roomId = async (req, res, next) => {
  const { room_id } = req.params;

  if (!room_id)
    return res.status(400).json({ message: "KEY_ERROR: no room_id" });

  next();
};

const roomName = async (req, res, next) => {
  const roomName = req.body.room_name;

  if (!roomName)
    return res.status(400).json({ message: "KEY_ERROR: no room_name" });

  next();
};

const userId = async (req, res, next) => {
  const { user_id } = req.params;

  if (!user_id) {
    return res.status(400).json({ message: "KEY_ERROR: no userId" });
  }

  next();
};

const schedules = async (req, res, next) => {
  const schedule_number = req.body.schedule_number;

  if (schedule_number) {
    if (!schedule_number.length)
      return res.status(400).json({ message: "KEY_ERROR: schedules is empty" });
  } else {
    return res.status(400).json({ message: "KEY_ERROR: no schedules" });
  }

  next();
};

module.exports = { userColor, roomId, roomName, userId, schedules };
