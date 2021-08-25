const mongoose = require("mongoose");

const MinisterSchema = mongoose.Schema({
  name: {
    type: String,
  },
  votes: {
    type: Number,
  },
  state: {
    type: String,
  },
});

module.exports = mongoose.model("Minister", MinisterSchema);
