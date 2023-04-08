const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  refreshToken: {
    type: String,
    required: true
  },
 
});

const Token = mongoose.model("Token", userSchema);

module.exports = Token;