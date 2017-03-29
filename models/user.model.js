var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  email:{
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  salt: {
    type: String
  },
  hash: {
    type: String
  }
});

userSchema.methods.setPassword = function(password){};
userSchema.methods.validPassword = function(password){};
userSchema.methods.generateJwt = function(){};

var User = mongoose.model('User', userSchema);
module.exports = User;
