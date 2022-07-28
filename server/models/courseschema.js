const mongoose = require("mongoose");

let CourseSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  //   document who enroll this course
  students: {
    type: [String],
    default: [],
  },
  date: {
    type: Date,
    default: Date.now() + 8 * 60 * 60 * 1000,
  },
});

module.exports = mongoose.model("Course", CourseSchema);
