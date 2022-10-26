const User = require("../models/UserModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const config = require("config");
const { validationResult } = require("express-validator");
const register = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty)
      return res.status(400).json({ errors: errors.mapped() });
    const {
      firstName,
      lastName,
      email,
      password,
      date,
      adress,
      gender,
      telephone,
    } = req.body;
    console.log(req.body);

    const user = await User.findOne({ email });
    console.log(user);
    if (user)
      return res
        .status(400)
        .json({ errors: [{ msg: "user already exist!!!" }] });
    const newUser = new User({
      firstName,
      lastName,
      email,
      password,
      date,
      adress,
      gender,
      telephone,
    });
    //cryptage password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(newUser.password, salt);
    newUser.password = hash;
    const registerUser = await newUser.save();
    //const token=jwt.sign({payload},secret-key)
    const payload = { sub: registerUser._id };
    const token = jwt.sign(payload, "MYAPP");

    res.json({ token });
    console.log(token);
  } catch (err) {
    res.status(500).json({ errors: [{ msg: err.message }] });
  }
};
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user)
      return res
        .status(400)
        .json({ errors: [{ msg: "please register before" }] });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ errors: [{ msg: "wrong password" }] });
    const payload = { sub: user._id };
    const token = await jwt.sign(payload, "MYAPP");
    res.json({ token });
  } catch (err) {
    res.status(500).json({ errors: [{ msg: err.message }] });
  }
};
module.exports = { register, login };
