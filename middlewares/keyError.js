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
  const roomName = req.room_name;

  if (!roomName)
    return res.status(400).json({ message: "KEY_ERROR: no room_name" });

  next();
};

module.exports = { userColor, roomId, roomName };
