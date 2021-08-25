const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  icnumber: {
    type: String,
  },
  password: {
    type: String,
  },
  state: {
    type: String,
  },
  hasVoted: {
    type: Boolean,
  },
});

module.exports = mongoose.model("User", UserSchema);
