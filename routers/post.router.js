var express = require('express');
var router = express.Router();
var Post = require('../models/post.model');

router.get('/posts', function(req, res){
  Post.find({}, function(err, posts){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        posts: posts
      });
    }
  });
});
router.get('/posts/:id', function(req, res){
  Post.find({_id: req.params.id}, function(err, posts){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        posts: posts
      });
    }
  });
});
router.post('/posts', function(req, res){
  var post = new Post(req.body);
  post.save(function(err){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(201).json({
        msg: 'Created a post successfully'
      });
    }
  });
});
router.put('/posts/:id', function(req, res){
  Post.findOneAndUpdate({_id: req.params.id}, req.body, function(err, post){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        msg: 'Successfully updated post'
      });
    }
  });
});
router.delete('/posts/:id', function(req, res){
  Post.remove({_id: req.params.id}, function(err){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        msg: 'Successfully deleted'
      });
    }
  });
});
module.exports = router;
