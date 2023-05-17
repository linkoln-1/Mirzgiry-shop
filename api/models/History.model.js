const mongoose = require("mongoose");

const historySchema = mongoose.Schema({
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
    },
    date: Date,
    count: Number,
    basket: [{
        productId: [{
          type: mongoose.SchemaTypes.ObjectId,
          ref: "Product",
        }],
        sizes: String,
          _id: String
       
      }],
    totalPrice: Number
   
  
   
    
  
  });


const History = mongoose.model("History", historySchema);

module.exports = History;