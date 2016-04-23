// Load Data
// ===============================================================================
var path = require('path');

// Begin Routing
// ===============================================================================

module.exports = function(app){

	// API GET Requests
	// ---------------------------------------------------------------------------

	app.get('/admin', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/admin.html'));
	});

	app.get('/tables', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/tables.html'));
	});

	app.get('/reserve', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/reserve.html'));
	});

	// If no match found default to home
	app.use(function(req, res){
		res.sendFile(path.join(__dirname + '/../public/home.html'));
	});

}