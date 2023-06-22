const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema(
    {
      username: {
        type: String,
        required: [true, "Please add a username"],
        unique: true,
      },
      email: {
        type: String,
        required: [true, "Please add a email"],
        unique: true,
      },
      password: {
        type: String,
        required: [true, "Please add a password"],
      },
      role: {
        type: String,
        default: "simple_user",
      },
    },
    {
      timestamps: true,
    }
  )
);

module.exports = User;
