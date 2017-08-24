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

//npm suggests using individual json/urlencoded middlewares
app.use(bodyParser());

//function for parameterized query
function basicQuery(t, v) {
	var text = t;
	var values = v;

	client.query(text, values, (err, res) => {
	  if (err) {
	    console.log(err.stack)
	  } else {
	    console.log(res.rows[0])
	  }
	})
}

app.post('/', function (req,res) {
	var item = req.body.user;
	var text = 'INSERT INTO persons(personid) VALUES($1) RETURNING *';
	var values = [item];
	basicQuery(text, values);

	console.log(item);
	res.end();
})




