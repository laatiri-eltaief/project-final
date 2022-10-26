const mongoose = require("mongoose");

const HostSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  Specialty: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Host", HostSchema);
