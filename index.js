// require express and set it up as the server
var express = require("express");
var server = express();

// requre body-parser
var bodyParser = require("body-parser");

// declare the port
var port = process.env.PORT || 8080;

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

// routes
server.use(todoRouter);

server.listen(port, function(){
  console.log("Now listening on port ", port);
});
