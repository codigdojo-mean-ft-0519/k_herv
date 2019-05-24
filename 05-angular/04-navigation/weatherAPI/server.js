const express = require('express');
const path = require('path');
const parser = require('body-parser');
const {
  env: { PORT: port = 8010 },
} = process;
const app = express();
app.use(
  parser.urlencoded({
    extended: true,
  })
);
app.use(parser.json());
app.use(express.static(path.join(__dirname, 'dist/weatherAPI')));

//require('./server/config/database');  // just for database projects
//require('./server/config/routes')(app); // just for server routes

app.listen(port, () => console.log(`express server listening on port ${port}`));

//from platform
// this route will be triggered if any of the routes above did not match
// app.all('*', (req, res, next) => {
//   res.sendFile(path.resolve('./public/dist/public/index.html'));
// });
