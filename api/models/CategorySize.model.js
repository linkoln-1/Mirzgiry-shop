const mongoose = require("mongoose");

const categorySizeSchema = mongoose.Schema({
  name: String

});

const CategorySize = mongoose.model("CategorySize", categorySizeSchema);

module.exports = CategorySize;