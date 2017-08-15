var express = require('express');
var app = express();
var path = require('path');

app.get('/', function (req, res) {
  res.sendFile('../web/button.html');
});

app.listen(8000, function () {
  console.log('Hello App listening on port 8000!');
});