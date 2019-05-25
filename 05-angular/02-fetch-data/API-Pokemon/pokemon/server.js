const express = require('express');
const parser = require('body-parser');
const path = require('path');

const app = express();
const {
  env: { PORT: port = 8001 },
} = process;

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use(express.static(path.join(__dirname, 'dist/pokemon')));

app.listen(port, () => console.log(`listening on ${port}`));
