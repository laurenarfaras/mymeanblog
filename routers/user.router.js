var express = require("express");
var router = express.Router();
var User = require("../models/user.model.js");

// GET /users
router.get("/users", function(request, response) {
  User.find({}, function(error, documents){
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

// GET /users/:id
router.get("/users/:id", function(request, response) {
  User.find({_id: req.params.id}, function(error, documents){
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

// POST /signup
router.post("/signup", function(request, response) {
  var user = new User(request.body);
  user.save(function(error){
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

// POST /login
router.post("/login", function(request, response){
  console.log("logging in.... forever");
})

// PUT /users/:id
router.put("/users/:id", function(request, response){
  User.findOneAndUpdate({_id: request.params.id}, request.body, function(error, document){
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

// DELETE /users/:id
router.delete("/users/:id", function(request, response){
  User.remove({_id: request.params.id}, function(error){
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
