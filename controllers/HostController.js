const Host = require("../models/HostModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const config = require("config");

const createHost = async (req, res) => {
  Host.create(req.body)
    .then((response) => res.json(response))
    .catch((err) => res.status(500).json(err));
};
const getHost = (req, res) => {
  Host.find()
    .populate("firstName", "lastName")
    .then((response) => res.json(response))
    .catch((err) => res.status(500).json(err));
};
const deleteHost = (req, res) => {
  Host.findByIdAndDelete(req.params.postID)
    .then((response) => res.json({ msg: "Host deleted" }))
    .catch((err) => res.status(500).json(err));
};
const updateHost = (req, res) => {
  Host.findByIdAndUpdate(req.params.HostId, req.body, { new: true })
    .then((response) => res.json(response))
    .catch((err) => res.status(500).json(err));
};

module.exports = { createHost, getHost, deleteHost, updateHost };
