const Activity = require("../models/ActivityModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const config = require("config");
const { ActivityId } = require("../routes/ActivityRoute");

const createActivity = async (req, res) => {
  Activity.create(req.body)
    .then((response) => res.json(response))
    .catch((err) => res.status(500).json(err));
};
const getActivity = (req, res) => {
  Activity.find()
    .populate("activityName")
    .then((response) => res.json(response))
    .catch((err) => res.status(500).json(err));
};
const deleteActivity = (req, res) => {
  Activity.findByIdAndDelete(req.params.ActivityId)
    .then((response) => res.json({ msg: "Activity deleted" }))
    .catch((err) => res.status(500).json(err));
};
const updateActivity = (req, res) => {
  Activity.findByIdAndUpdate(req.params.ActivityId, req.body, { new: true })
    .then((response) => res.json(response))
    .catch((err) => res.status(500).json(err));
};

module.exports = {
  createActivity,
  getActivity,
  deleteActivity,
  updateActivity,
};
