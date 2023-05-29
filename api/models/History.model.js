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
    totalPrice: Number,
    selectedRadio1: String,
    selectedRadio2: String,
    name: String,
    surName: String,
    email: String,
    phone: String,
    city: String,
    postOffice: String

   
  
   
    
  
  });


const History = mongoose.model("History", historySchema);

module.exports = History;