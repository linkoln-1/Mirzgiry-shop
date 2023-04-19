const mongoose = require("mongoose");

const basketSchema = mongoose.Schema({
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  productId: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Product",
  }],
  size: [{
    type: Array
  }]


});

const Basket = mongoose.model("Basket", basketSchema);

module.exports = Basket;






