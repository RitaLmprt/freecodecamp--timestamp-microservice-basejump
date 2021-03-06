// Imports needed for NodeJS app
var express = require('express');
var http = require('http');
var timestamp = require('./routes/timestamp');

// Create instance of app
var app = express();

app.use(express.static('views'));
app.use(express.static('public'));
var server = http.createServer(app);


app.get("/", function (req, res) {
  res.sendFile('index.html', {root: 'views'});
});

app.use('/timestamp', timestamp);

// listen for requests :)
app.listen(3000, function () {
  console.log('Hello! Listening in to port 3000 :)');
});
