const express = require("express");
const router = express.Router();

const schedulesController = require("../controllers/schedulesController");
const authorizedUser = require("../middlewares/authorization");
const keyError = require("../middlewares/keyError");
const typeError = require("../middlewares/typeError");

// GET
router.get(
  "/:user_id",
  keyError.userId,
  typeError.userId,
  schedulesController.getSchedules
);

//---- 유저 토큰 확인 -----//
router.use(authorizedUser.getUserIdByVerifyToken);

// POST
router.post(
  "/",
  keyError.schedules,
  typeError.schedules,
  schedulesController.postSchedules
);

// PATCH
router.patch(
  "/",
  keyError.schedules,
  typeError.schedules,
  schedulesController.patchSchedules
);

module.exports = router;
