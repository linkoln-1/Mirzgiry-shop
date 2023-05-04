const mongoose = require("mongoose");

const favoriteSchema = mongoose.Schema({
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  productId: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Product",
  }],
});

const Favorite = mongoose.model("Favorite", favoriteSchema);

module.exports = Favorite;
