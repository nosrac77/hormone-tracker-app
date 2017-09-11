'use strict';

const PORT = process.env.PORT || 5000;
const pg = require('pg');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const conString = process.env.DATABASE_URL || 'postgres://postgres:Skrillexfan7@localhost:5432';
const client = new pg.Client(conString);
pg.defaults.ssl = true;
client.connect();
client.on('error', err => console.error('you fucked up somehow man, here\'s the error ' + err));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));
app.listen(PORT, function() {
  console.log('Listening on port ' + PORT);
});

app.post('/submit', function(request, response) {
  client.query(`
    INSERT INTO logs (date, prescription, dosage, "tLevel", "eLevel", user_log)
    VALUES($1, $2, $3, $4, $5, $6) ON CONFLICT DO NOTHING `,
    [request.body.date, request.body.prescription, request.body.dosage, request.body.tLevel, request.body.eLevel, request.body.user_log],
    function(err){
      if (err) console.error(err);
      response.send('insert complete');
    }
  );
});
