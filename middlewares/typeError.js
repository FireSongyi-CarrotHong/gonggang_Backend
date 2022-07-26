const userColor = async (req, res, next) => {
  const color = req.body.color;

  if (!(typeof color === String))
    return res
      .status(400)
      .json({ message: "TYPE_ERROR: theme_color's type should be string" });

  next();
};

const roomId = async (req, res, next) => {
  const { room_id } = req.params;

  if (!(typeof room_id === Number))
    return res
      .status(400)
      .json({ message: "TYPE_ERROR: room_Id's type should be number" });

  next();
};

const roomName = async (req, res, next) => {
  const roomName = req.room_name;

  if (!(typeof roomName === String))
    return res
      .status(400)
      .json({ message: "TYPE_ERROR: room_name's type should be String" });

  next();
};

module.exports = {
  userColor,
  roomId,
  roomName,
};
