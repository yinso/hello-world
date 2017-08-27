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
function basicQuery(t, v) {
	var text = t;
	var values = v;

	client.query(text, values, (err, res) => {
	  if (err) {
	    console.log(err.stack)
	  } else {
	  	console.log(res);
	    // console.log(res.rows[0])
	  }
	})
}

//post button which 1) takes in a string 2) posts the string in html 3) prints in the browser console 4) prints in terminal and 5) adds an id to a table
app.post('/', function (req,res) {
	var obj = req.body;
	var text = 'INSERT INTO users(user_name, first_name, last_name, email, phone_number) VALUES($1, $2, $3, $4, $5) RETURNING *';
	var values = [obj.userName, obj.firstName, obj.lastName, obj.email, obj.phone ];
	basicQuery(text, values);

	console.log(values);
	res.end();
})




