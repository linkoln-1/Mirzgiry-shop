const mongoose = require("mongoose");

const categoryProductSchema = mongoose.Schema({
  name: String

});

const CategoryProduct = mongoose.model("CategoryProduct", categoryProductSchema);

module.exports = CategoryProduct;