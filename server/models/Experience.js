const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  airline: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  reviews: {
    type: String,
    required: true
    // enum: ["United States", "Florida", "Orlando"]
  }
});

const Experience = mongoose.model("Experience", reviewSchema);

module.exports = Experience;
