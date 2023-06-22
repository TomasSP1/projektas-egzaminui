const mongoose = require("mongoose");

const Favorite = mongoose.model(
  "Favorite",
  new mongoose.Schema(
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      event: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event",
        type: String,
        required: true,
      },
    },
    {
      timestamps: true,
    }
  )
);

module.exports = Favorite;
