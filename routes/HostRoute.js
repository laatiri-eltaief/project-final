const mongoose = require("mongoose");
const express = require("express");
const HostController = require("../controllers/HostController");
const router = express.Router();

router.post("/", HostController.createHost);
router.get("/",middlwares,adminMiddlware, HostController.getHost);
router.delete("/:HostId",middlwares,adminMiddlware, HostController.deleteHost);
router.put("/:HostId",middlwares,adminMiddlware, HostController.updateHost);
module.exports = router;
