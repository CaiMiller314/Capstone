const mongoose = require("mongoose");

const sleepSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  state: {
    type: String,
    required: true
    // enum: ["thin", "chicago", "deep-dish", "hella-thick"]
  },
  city: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  town: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  street: [String]
});

const Sleep = mongoose.model("Pizza", sleepSchema);

module.exports = Sleep;
