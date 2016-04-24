// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources. 
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var tableData 		= require('../data/table-data.js')
var waitListData 	= require('../data/waitinglist-data.js')





// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app){

	// API GET Requests
	// Below code handles when users "visit" a page. 
	// In each of the below cases when a user visits a link 
	// (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table) 
	// ---------------------------------------------------------------------------

	app.get('/api/tables', function(req, res){
		res.json(tableData);
	});

	app.get('/api/waitlist', function(req, res){
		res.json(waitListData);
	});

	// API POST Requests
	// Below code handles when a user submits a form and thus submits data to the server.
	// In each of the below cases, when a user submits form data (a JSON object)
	// ...the JSON is pushed to the appropriate Javascript array
	// (ex. User fills out a reservation request... this data is then sent to the server...
	// Then the server saves the data to the tableData array)
	// ---------------------------------------------------------------------------

	app.post('/api/tables', function(req, res){

		// Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
		// It will do this by sending out the value "true" have a table 
		if(tableData.length < 11 ){
			tableData.push(req.body);
			res.json(true); // KEY LINE
		}

		// Or false if they don't have a table
		else{
			waitListData.push(req.body);
			res.json(false); // KEY LINE
		}

	});
}