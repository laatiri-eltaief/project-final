const mongoose = require("mongoose");

const ActivitySchema = mongoose.Schema({
  activityName: {
    type: String,
    required: true,
  },
  hostName: {
    type: String,
    required: true,
  },
  activityTime: {
    type: Number,
    required: true,
  },
  image: String,
});
module.exports = mongoose.model("Activity", ActivitySchema);
