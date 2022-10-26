const mongoose = require("mongoose");
const express = require("express");
const HostController = require("../controllers/HostController");
const router = express.Router();

router.post("/", HostController.createHost);
router.get("/", HostController.getHost);
router.delete("/:HostId", HostController.deleteHost);
router.put("/:HostId", HostController.updateHost);
module.exports = router;
