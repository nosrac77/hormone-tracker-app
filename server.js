'use strict';

const PORT = process.env.PORT || 5000;

const express = require('express');
const app = express();
app.use(express.static('./'));

app.listen(PORT, function() {
  console.log('Listening on port ' + PORT);
});
