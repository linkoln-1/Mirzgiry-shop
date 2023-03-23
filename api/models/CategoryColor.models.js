const mongoose = require("mongoose");

const categoryColorSchema = mongoose.Schema({
  name: String

});

const CategoryColor = mongoose.model("CategoryColor", categoryColorSchema);

module.exports = CategoryColor;