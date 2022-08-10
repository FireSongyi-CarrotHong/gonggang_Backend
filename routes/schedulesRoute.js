const express = require("express");
const router = express.Router();

const schedulesController = require("../controllers/schedulesController");
const authorizedUser = require("../middlewares/authorization");

// GET
router.get("/:user_id", schedulesController.getSchedules);

//---- 유저 토큰 확인 -----//
router.use(authorizedUser.getUserIdByVerifyToken);

// POST
router.post("/", schedulesController.postSchedules);

// PATCH
router.patch("/", schedulesController.patchSchedules);

module.exports = router;
