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
    // enum: ["United States", "Florida", "Orlando"]
  },
  city: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  reviews: [String]
});

const Sleep = mongoose.model("Sleep", sleepSchema);

module.exports = Sleep;
