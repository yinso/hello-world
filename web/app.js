var express = require('express');
var app = express();
//database connect 
var pg = require('pg');
var { Pool, Client } = require('pg')
var pool = new Pool({
	user: 'juliantheberge',
	host: 'localhost',
	database: 'newdatabase',
	password: 'Mapex133',
	port: 5432,
})
//static files
var path = require('path');
//allows req.body to return html
var bodyParser = require("body-parser");
//select table in database
var client = new Client({
	user: 'juliantheberge',
	host: 'localhost',
	database: 'newdatabase',
	password: 'Mapex133',
	port: 5432,
})

//connecting server to database
client.connect();

app.use(express.static(
	path.join(__dirname, "WebFiles")
));

app.listen(8000, function () {
	console.log("App is running.");
});

//npm suggests using individual json/urlencoded middlewares, fix?
app.use(bodyParser());

//function for parameterized query
function basicQuery(t, v, cb) {
	console.log('step 2 - basicQuery', t, v);
	var text = t;
	var values = v;

	client.query(text, values, (err, res) => {
		console.log('step 3 - call back from client query', err, res);
	  if (err) {
			cb(err);
	  } else {
			cb(null, res);
	  }
	})
}

//post button which 1) takes in a string 2) posts the string in html 3) prints in the browser console 4) prints in terminal and 5) adds an id to a table
app.post('/', function (req,res) {
	console.log('step 1 - post handler', req.body);
	var obj = req.body;
	var text = 'INSERT INTO users(user_name, first_name, last_name, email, phone_number) VALUES($1, $2, $3, $4, $5) RETURNING *';
	var values = [obj.userName, obj.firstName, obj.lastName, obj.email, obj.phone ];
	basicQuery(text, values, (err, result) => {
		console.log('step 4 - callback from basicQuery, return to user', err, result);
		if (err) {
			// notify user of the error.
			res.json(err);
		} else {
			// good here. notify user.
			res.json({ status: 'OK'})
		}
	});
})




