const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const {
  env: { PORT: port = 8004 },
} = process;
const app = express();

app.use(bodyParser.json());
//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'dist/NinjaGold')));

//require('./server/config/database');
//require('./server/config/routes')(app);

app.listen(port, () => console.log(`express server listening on port ${port}`));
