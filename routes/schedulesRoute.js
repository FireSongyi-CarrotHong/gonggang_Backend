const express = require("express");
const router = express.Router();

const schedulesController = require("../controllers/schedulesController");

// GET
router.get("/:user_id", schedulesController.getSchedules);

// POST
router.post("/", schedulesController.postSchedules);

// PATCH
router.patch("/", schedulesController.patchSchedules);
