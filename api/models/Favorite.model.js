const mongoose = require("mongoose");

const favoriteSchema = mongoose.Schema({
   userId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
 favorites: 
    [{
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Product",
    }], 

   
  
  
});

const Favorite = mongoose.model("Favorite", favoriteSchema);

module.exports = Favorite;