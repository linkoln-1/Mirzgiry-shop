const mongoose = require("mongoose");

const basketSchema = mongoose.Schema({
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  sizes: String,
  productId: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Product",
  }],
 
 
 
  

});

const Basket = mongoose.model("Basket", basketSchema);

module.exports = Basket;






