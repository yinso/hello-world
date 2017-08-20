// static file delivery of html
var express = require('express');
var app = express();
var path = require('path');
var http = require("http").Server(app);
var io = require('socket.io')(http);

app.use(express.static(path.join(__dirname, "public")));

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
  	console.log('user disconnected');
  });
});

app.listen(8000, function () {
  console.log('Buttons show up on port 8000!');
});


//connecting server to database
const { Pool, Client } = require('pg')
const pool = new Pool({
  user: 'juliantheberge',
  host: 'localhost',
  database: 'newdatabase',
  password: 'Mapex133',
  port: 5432,
})

pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
})


