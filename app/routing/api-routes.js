// Load Data
// ===============================================================================
var tableData 		= require('../data/table-data.js')
var waitListData 	= require('../data/waitinglist-data.js')
var adminData 		= require('../data/admin-data.js')

// Begin Routing
// ===============================================================================

module.exports = function(app){

	// API GET Requests
	// ---------------------------------------------------------------------------

	app.get('/api/admin', function(req, res){
		res.json(adminData);
	});

	app.get('/api/tables', function(req, res){
		res.json(tableData);
	});

	app.get('/api/waitlist', function(req, res){
		res.json(waitListData);
	});

	// API POST Requests
	// ---------------------------------------------------------------------------

	app.post('/api/admin', function(req, res){
		adminData.push(req.body);
		res.json(req.body);
	});

	app.post('/api/tables', function(req, res){

		if(tableData.length < 11 ){
			tableData.push(req.body);
			res.json(true);
		}

		else{
			waitListData.push(req.body);
			res.json(false);
		}

	});

	// API DELETE Requests
	// ---------------------------------------------------------------------------

	app.delete('/api/tables/:customerID', function(req, res){
		customerID = req.params.customerID;

		for (var i=0; i<tableData.length; i++){

			if (customerID == tableData[i].customerID){

				// Delete that index from the array
				tableData.splice(i, 1);
				console.log("Deleted Entry!")
			}
		}

		// Respond with the new tableData
		res.json(tableData);

	});

	app.delete('/api/waitlist/:customerID', function(req, res){
		customerID = req.params.customerID;

		for (var i=0; i<tableData.length; i++){

			if (customerID == waitListData[i].customerID){

				// Delete that index from the array
				waitListData.splice(i, 1);
				console.log("Deleted Entry!")
			}
		}

		// Respond with the new tableData
		res.json(waitListData);

	});

	app.delete('/api/admin/:username', function(req, res){
		username = req.params.username;

		for (var i=0; i<tableData.length; i++){

			if (username == adminData[i].username){

				// Delete that index from the array
				adminData.splice(i, 1);
				console.log("Deleted Entry!")
			}
		}

		// Respond with the new tableData
		res.json(adminData);

	});
}