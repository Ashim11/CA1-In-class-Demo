var http = require('http'), //This module provides the HTTP server functionalities
    path = require('path'), //The path module provides utilities for working with file and directory paths
    express = require('express'), //This module allows this app to respond to HTTP Requests, defines the routing and renders back the required content
    xml2js = require('xml2js'), //This module does XML to JSON conversion and also allows us to get from JSON back to XML
    routes = require('./api/routes/routes'),
    bodyParser  = require('body-parser');

var router = express(); //The set our routing to be handled by Express
router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json()); //We include support for JSON that is coming from the client
var server = http.createServer(router); //This is where our server gets created

//A place where all routes are defined for api also.
router.use(express.static(path.resolve(__dirname, 'views')), routes); //We define the views folder as the one where all static content will be served

//This is where we as the server to be listening to user with a specified IP and Port
server.listen(process.env.PORT || 4000, function() {
  var addr = server.address();
  console.log("Server listening at", addr.address + ":" + addr.port);
});