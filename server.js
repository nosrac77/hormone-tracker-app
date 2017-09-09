'use strict';

const PORT = process.env.PORT || 5000;
const pg = require('pg');
const express = require('express');
const app = express();
const conString = DATABASE_URL;
const client = new pg.Client(conString);
client.connect();
client.on('error', err => console.error(err));
app.use(express.static('./'));
app.listen(PORT, function() {
  console.log('Listening on port ' + PORT);
});
