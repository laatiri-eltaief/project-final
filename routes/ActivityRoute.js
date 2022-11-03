const mongoose = require("mongoose");
const express = require("express");
const ActivityController = require("../controllers/ActivityController");
const router = express.Router();

router.post("/", ActivityController.createActivity);
router.get("/", ActivityController.getActivity);
router.delete("/:ActivityId", ActivityController.deleteActivity);
router.put("/:ActivityId", ActivityController.updateActivity);
module.exports = router;