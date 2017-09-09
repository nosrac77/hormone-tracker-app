'use strict';

const PORT = process.env.PORT || 5000;
const pg = require('pg');
const express = require('express');
const app = express();
const conString = process.env.DATABASE_URL || 'postgres://postgres:Skrillexfan7@localhost:5432';
const client = new pg.Client(conString);
pg.defaults.ssl = true;
client.connect();
client.on('error', err => console.error('you fucked up somehow man, here\'s the error ' + err));
app.use(express.static('./'));
app.listen(PORT, function() {
  console.log('Listening on port ' + PORT);
});
