const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: String,
  categoryId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "CategoryProduct",
  },
  categoryIdName: String,
  price: Number,
  priceId:{
    type: mongoose.SchemaTypes.ObjectId,
    ref: "CategoryPrice",
  },
  color: String,
  colorId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "CategoryColor",
  },
  image: String,
  checkHeart: Boolean,
  sizes: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Size",
  }]

});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
