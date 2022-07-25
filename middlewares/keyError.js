const errorGenerator = require("../utils/errorGenerator");

const roomId = async (req, res, next) => {
  const { room_id } = req.params;

  if (!room_id) {
    errorGenerator({ statusCode: 400, message: "KEY_ERROR: no room_id" });
  }

  next();
};

const roomName = async (req, res, next) => {
  const roomName = req.room_name;

  if (!roomName) {
    errorGenerator({ statusCode: 400, message: "KEY_ERROR: no room_name" });
  }

  next();
};

module.exports = { roomId, roomName };
