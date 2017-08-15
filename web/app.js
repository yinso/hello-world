var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, "public")));

app.listen(8000, function () {
  console.log('Buttons show up on port 8000!');
});