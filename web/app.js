var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
	fs.readFile('button.html', function(err, data) {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		res.end();
	});
}).listen(8000);

// var express = require('express');
// var app = express();

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

// app.listen(8000, function () {
//   console.log('Test that this is the new script running on 8000');
// });


/*----------------OLD STUFF----------------*/


//HELLO WORLD
// var express = require('express');
// var app = express();

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

// app.listen(8000, function () {
//   console.log('Hello App listening on port 8000!');
// });