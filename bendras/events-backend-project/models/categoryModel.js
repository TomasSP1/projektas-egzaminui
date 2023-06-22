const mongoose = require("mongoose");

const Category = mongoose.model(
  "Category",
  new mongoose.Schema(
    {
      title: {
        type: String,
        required: true,
        unique: true,
      }
    },
    {
      timestamps: true,
    }
  )
);

module.exports = Category;
