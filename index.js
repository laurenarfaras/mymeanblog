// require express and set it up as the server
var express = require("express");
var server = express();

// require mongoose
var mongoose = require('mongoose');

// require body-parser
var bodyParser = require("body-parser");

// user and post routers
var userRouter = require('./routers/user.router');
var postRouter = require('./routers/post.router');

// declare the port and mongoURI
var port = process.env.PORT || 8080;
var mongoURI = process.env.mongoURI || require("./secrets.js").MONGOURI;

// allow the repo to have access to the public directory
server.use(express.static(__dirname + "/public"));

// send the index.html file to the browser
server.get("/", function(request, response) {
  response.sendFile("index.html", {root: __dirname + "/public/html"});
});

// power up -- middle ware
// handle json data as part of the body
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

// connect to the database
mongoose.connect(mongoURI);

// send the index.html file to the browser
server.get('/', function(req, res){
  res.sendFile('index.html', {root: __dirname + '/public/html'});
});

// routes
server.use(userRouter);
server.use(postRouter);

server.listen(port, function(){
  console.log("Now listening on port ", port);
});
