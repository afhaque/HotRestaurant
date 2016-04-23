// Dependencies
// ===============================================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var morgan = require('morgan');

// Express Configuration
// ==================================d============================================
var app = express(); // Sets the express app 
var PORT = 3001; // Sets the port

// Handling of file types
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// Create public folder for express
// app.use("/public", express.static(path.join(__dirname, 'public')));

// Routing
// ================================================================================
// Uses the stated routes 
require('./app/routing/api-routes.js')(app); // Use an external file for routing (pass in an instance of the server)
require('./app/routing/html-routes.js')(app);

// Listener
// ================================================================================
app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});