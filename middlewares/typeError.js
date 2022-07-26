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
  roomId,
  roomName,
};