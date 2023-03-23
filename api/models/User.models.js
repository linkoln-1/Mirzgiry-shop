const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
   login: String,
  password: String,
  name: String,
  surname: String,
  phone: Number, 
  mail: String,
 
  
});

const User = mongoose.model("User", userSchema);

module.exports = User;