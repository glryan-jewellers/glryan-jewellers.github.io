#!/usr/bin/env node

'use strict';

var path = require('path'),
  express = require('express');

var port = Number(process.env.PORT || 8900);
console.log("Running on port " + port);
var app = express();
app.listen(port);

// Register Routes
app.use('/public', express.static(path.join(__dirname, 'public')));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/orig', function(req, res) {
    res.sendFile(path.join(__dirname + '/index1.html'));
});

app.get('/test', function(req, res) {
    res.sendFile(path.join(__dirname + '/index2.html'));
});
