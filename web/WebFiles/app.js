// static file delivery of html
var express = require('express');
var app = express();
var path = require('path');
var router = express.Router();
var count = 0;

app.use(express.static(path.join(__dirname, "WebFiles")));
app.listen(8000);

router.get('/', function(req, res, next) {
	res.render('index', {title:'Express'});
	next();
	res.send('is this how next works?');
});

app.post('/my-second-data', function (req,res, next) {
	count += 1;
	console.log(count);
	res.send("You just sent a message to the server :)");
})

var pgtools = require('pgtools');
pgtools.createdb({
  user: '',
  password: 'some pass',
  port: 5432,
  host: 'localhost'
}, 'test-db', function (err, res) {
  if (err) {
    console.error(err);
    process.exit(-1);
  }
  console.log(res);
});


// //connecting server to database
// const { Pool, Client } = require('pg')
// const pool = new Pool({
//   user: 'juliantheberge',
//   host: 'localhost',
//   database: 'newdatabase',
//   password: 'Mapex133',
//   port: 5432,
// })

// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res)
//   pool.end()
// })


