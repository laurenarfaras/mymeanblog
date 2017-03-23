var express = require("express");
var router = express.Router();
var Post = require("../models/post.model.js");

//GET /posts
router.get("/posts", function(request, response) {
  Post.find({}, function(error, documents){
    if (error) {
      response.status(500).json({
        msg: error
      });
    } else {
      response.status(200).json({
        users: documents
      });
    }
  });
});

//GET /posts/:id
router.get("/posts/:id", function(request, response) {
  Post.find({_id: req.params.id}, function(error, documents){
    if (error){
      response.status(500).json({
        msg: error
      });
    } else {
      response.status(200).json({
        users: documents
      });
    }
  });
});

//POST /posts
router.post("/posts", function(request, response) {
  var post = new User(request.body);
  post.save(function(error){
    if(error) {
      response.status(500).json({
        msg: error
      });
    } else {
      response.status(201).json({
        msg: "Created a new user!"
      });
    }
  });
});

//PUT /posts/:id
router.put("/posts/:id", function(request, response){
  Post.findOneAndUpdate({_id: request.params.id}, request.body, function(error, document){
    if(error) {
      response.status(500).json({
        msg: error
      });
    } else {
      response.status(200).json({
        msg: "Successfully updated"
      });
    }
  });
});

//DELETE /posts/:id
router.delete("/users/:id", function(request, response){
  Post.remove({_id: request.params.id}, function(error){
    if(error) {
      response.status(500).json({
        msg: error
      });
    } else {
      response.status(200).json({
        msg: "Successfully deleted"
      });
    }
  });
});

module.exports = router;
