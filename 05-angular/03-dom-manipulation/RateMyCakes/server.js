const express = require('express');
const path = require('path');
const parser = require('body-parser');
const {
  env: { PORT: port = 8008 },
} = process;
const app = express();
app.use(
  parser.urlencoded({
    extended: true,
  })
);
app.use(parser.json());
app.use(express.static(path.join(__dirname, 'dist/RateMyCakes')));

require('./server/config/database');
require('./server/config/routes')(app);

app.listen(port, () => console.log(`express server listening on port ${port}`));
