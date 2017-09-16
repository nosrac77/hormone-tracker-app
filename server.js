'use strict';

const PORT = process.env.PORT || 5000;
const pg = require('pg');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const conString = process.env.DATABASE_URL || 'postgres://localhost:5432';
const client = new pg.Client(conString);
pg.defaults.ssl = true;
client.connect();
client.on('error', err => console.error('you fucked up somehow man, here\'s the error ' + err));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));

app.post('/submit', function(request, response) {
  client.query(
    'INSERT INTO users("userInfoSharing") VALUES(true)',
    function(err) {
      if (err) console.error(err)
      queryTwo()
    }
  )

  function queryTwo() {
    client.query(
      `SELECT user_id FROM users`,
      function(err, result) {
        if (err) console.error(err)
        queryThree(result.rows[0].user_id);
        console.log(result.rows[0].user_id);
        response.send('' + result.rows[0].user_id);
      }
    )
  }

  function queryThree(user_id) {
    client.query(`
      INSERT INTO logs ("user_id", "date", "prescription", "dosage", "tLevel", "eLevel", "logEntry")
      VALUES($1, $2, $3, $4, $5, $6, $7)`,
      [user_id, request.body.date, request.body.prescription, request.body.dosage, request.body.tLevel, request.body.eLevel, request.body.logEntry],
      function(err){
        if (err) console.error(err);
        response.send('insert complete');
      }
    );
  }
});

app.post('/user', function(request, response) {
  client.query(`
    INSERT INTO logs ("date", "prescription", "dosage", "tLevel", "eLevel", "logEntry")
    VALUES($1, $2, $3, $4, $5, $6) WHERE user_id=$7`,
    [request.body.date, request.body.prescription, request.body.dosage, request.body.tLevel, request.body.eLevel, request.body.logEntry, request.body.userId],
    function(err){
      if (err) console.error(err);
      response.send('insert complete');
    }
  );
}

app.listen(PORT, function() {
  console.log('Listening on port ' + PORT);
});
