const mongoose = require("mongoose");

const personalSchema = mongoose.Schema({
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
    },
   
    name: String,
    surName: String,
    email: String,
    phone: String,
    street: String,
    homeNumber: String

   
  
   
    
  
  });


const Personal = mongoose.model("Personal", personalSchema);

module.exports = Personal;