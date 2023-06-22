const mongoose = require("mongoose");

const Event = mongoose.model(
  "Event",
  new mongoose.Schema(
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
      },
      title: {
        type: String,
        trim: true.valueOf,
        required: [true, "Please add a title"],
      },
      category: {
        // type: mongoose.Schema.Types.ObjectId,
        // ref: "Category",
        type: String,
        required: [true, "Please add a category"],
      },
      description: {
        type: String,
        trim: true.valueOf,
        required: [true, "Please add a description"],
      },
      place: {
        type: String,
        required: [true, "Please add a place"],
      },
      date: {
        type: Date,
        required: [true, "Please add a date"],
      },
      image: {
        type: String,
        required: [true, "Please add a image"],
      },
      approved: {
        type: Boolean,
        default: false,
      },
    },
    {
      timestamps: true,
    }
  )
);

module.exports = Event;
