var mongoose = require("mongoose");

// Mongoose Schema
var userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

// Mongoose model
var User = mongoose.model("User", userSchema);
module.exports = User;
