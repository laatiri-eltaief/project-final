const mongoose = require("mongoose");
const express = require("express");
const ActivityController = require("../controllers/ActivityController");
const adminMiddlware = require("../middlwares/adminMiddlware");
const router = express.Router();

router.post("/", ActivityController.createActivity);
router.get("/", middlwares,adminMiddlware,ActivityController.getActivity);
router.delete("/:ActivityId",middlwares,adminMiddlware, ActivityController.deleteActivity);
router.put("/:ActivityId",middlwares,adminMiddlware, ActivityController.updateActivity);
module.exports = router;
