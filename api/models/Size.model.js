const mongoose = require("mongoose");

const sizeSchema = mongoose.Schema({
  size: String,
  inStock: Number,
  count: Number,
});

const Size = mongoose.model("Size", sizeSchema);

module.exports = Size;