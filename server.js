#!/usr/bin/env node

'use strict';

var path = require('path'),
  express = require('express');

var port = Number(process.env.PORT || 8900);
console.log("Running on port " + port);
var app = express();
app.listen(port);

// Register Routes
app.use('/', express.static(path.join(__dirname, 'public')));
