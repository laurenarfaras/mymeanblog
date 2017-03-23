var mongoose = require("mongoose");

// mongoose schema
var postSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  updated: {
    type: Date,
    default: Date.now
  }
});

// mongoose model
var Post = mongoose.model("Post", postSchema);
module.exports = Post;
