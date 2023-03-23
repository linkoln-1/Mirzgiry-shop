const mongoose = require("mongoose");

const categoryPriceSchema = mongoose.Schema({
  name: String

});

const CategoryPrice = mongoose.model("CategoryPrice", categoryPriceSchema);

module.exports = CategoryPrice;