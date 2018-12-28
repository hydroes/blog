'use strict';

const express = require('express');
const mongoose = require('mongoose');
const conf = require('config');

// Constants
const PORT = process.env.PORT;
const DB_CONNECTION_NAME = process.env.DB_CONNECTION_NAME;
const DB_COLLECTION_NAME = process.env.DB_COLLECTION_NAME;

mongoose.connect('mongodb://' + process.env.DB_CONNECTION_NAME + '/' + DB_COLLECTION_NAME);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

// App
const app = express();
app.get('/', function (req, res) {
  res.send('Hello world\n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);

