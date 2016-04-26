<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Tables Page</title>

	<!-- Latest compiled and minified CSS & JS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
	<script src="https://code.jquery.com/jquery.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>

</head>
<body>

	<div class="container">

		<div class="jumbotron">
			<h1 class="text-center"><span class="glyphicon glyphicon-fire"></span> Hot Restaurant</h1>
			<hr>
			<h2 class="text-center">Current Reservations and Waiting List</h2>
			<br>

			<div class="text-center">
				<a href="/reserve"><button type="button" class="btn btn-lg btn-danger"><span class="glyphicon glyphicon-credit-card"></span> Make Reservation</button></a>
				<a href="/"><button type="button" class="btn btn-lg btn-default"><span class="glyphicon glyphicon-home"></span></button></a>
			</div>
		</div>

		<div class="row">
			<div class="col-lg-12">

				<!-- Current Tables in Use -->
				<div class="panel panel-default">
					<div class="panel-heading">
						<h4 class="panel-title">Current Reservations</h4>
					</div>
					<div class="panel-body" id="tableSection">
					</div>
				</div>

				<!-- Waiting List Panel -->
				<div class="panel panel-default">
					<div class="panel-heading">
						<h4 class="panel-title">Waiting List</h4>
					</div>
					<div class="panel-body" id="waitlistSection">
					</div>
				</div>
			</div>
		</div>


	    <footer class="footer">
	      <div class="container">
	      	<p>Control Panel</p>
	        <p><a href="#" id="clear">Clear Table</a> | <a href="/api/tables">API Table Link</a> | <a href="/api/waitlist">API Wait List</a></p>
	      </div>
	    </footer>

	</div>

</body>


<!-- BELOW CODE IS CRITICAL. IT HANDLES HOW FORM DATA IS LOADED FROM OUR SERVER -->
<script type="text/javascript">

	// In this code, jQuery is used to "download" the data from our server
	// We then dynamically display this content in our table. This is very similar to the group projects you just completed.
	// It's also very similar to the NYT search application. In fact, I copied a ton of code from there.

	function runTableQuery(){

		// Here we get the location of the root page.
		// We use this instead of explicitly saying the URL is localhost:3001 because the url will change when we deploy.
		var currentURL = window.location.origin;

		// The AJAX function uses the URL of our API to GET the data associated with it (initially set to localhost)
		$.ajax({url: currentURL + "/api/tables", method: "GET"})
			.done(function(tableData) {

				// Here we are logging the URL so we have access to it for troubleshooting
				console.log("------------------------------------");
				console.log("URL: " + currentURL + "/api/tables");
				console.log("------------------------------------");

				// Here we then log the NYTData to console, where it will show up as an object.
				console.log(tableData);
				console.log("------------------------------------")

				// Loop through and display each of the customers
				for (var i=0; i<tableData.length; i++){

					// Create the HTML Well (Section) and Add the table content for each reserved table
					var tableSection = $("<div>");
					tableSection.addClass('well');
					tableSection.attr('id', 'tableWell-' + i+1)
					$('#tableSection').append(tableSection);

					var tableNumber = i + 1;


					// Then display the remaining fields in the HTML (Section Name, Date, URL)
					$("#tableWell-"+ i+1).append('<h2><span class="label label-primary">' + tableNumber + "</span> | " + tableData[i].customerID + "</h2>");
				}
			});
	}

	function runWaitListQuery(){

		// Here we get the location of the root page.
		// We use this instead of explicitly saying the URL is localhost:3001 because the url will change when we deploy.
		var currentURL = window.location.origin;

		// The AJAX function uses the URL of our API to GET the data associated with it (initially set to localhost)
		$.ajax({url: currentURL + "/api/waitlist", method: "GET"})
			.done(function(waitlistData) {

				// Here we are logging the URL so we have access to it for troubleshooting
				console.log("------------------------------------");
				console.log("URL: " + currentURL + "/api/waitlist");
				console.log("------------------------------------");

				// Here we then log the NYTData to console, where it will show up as an object.
				console.log(waitlistData);
				console.log("------------------------------------")

				// Loop through and display each of the customers
				for (var i=0; i<waitlistData.length; i++){

					// Create the HTML Well (Section) and Add the table content for each reserved table
					var waitlistSection = $("<div>");
					waitlistSection.addClass('well');
					waitlistSection.attr('id', 'waitlistWell-' + i+1)
					$('#waitlistSection').append(waitlistSection);

					var tableNumber = i + 1;

					// Then display the remaining fields in the HTML (Section Name, Date, URL)
					$("#waitlistWell-"+ i+1).append('<h2><span class="label label-primary">' + tableNumber + "</span> | " + waitlistData[i].customerID + "</h2>");
				}
			});
	}

	// This function resets all of the data in our tables. This is intended to let you restart a demo.
	function clearTable(){

		var currentURL = window.location.origin;
		$.ajax({url: currentURL + "/api/clear", method: "POST"})

	}

	$("#clear").on('click', function(){
		alert("Clearing...");
		clearTable();

		// Refresh the page after data is cleared
		location.reload();
	})


	// Run Queries!
	// ==========================================
	runTableQuery();
	runWaitListQuery();


</script>
</html>
