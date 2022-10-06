const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  photo: {
    type: String,
    required: false,
  },
  inventory: {
    type: [{ name: String, count: Number }],
    default: [],
    required: false,
  },
  treasured: {
    type: [{ name: String, count: Number }],
    default: [],
    required: false,
  },
});
module.exports = mongoose.model("user", UserSchema);
