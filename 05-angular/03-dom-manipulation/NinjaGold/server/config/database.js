const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
const modelsPath = path.join(__dirname, '..models');

mongoose.connect('mongodb://localhost/NinjaGoldDb', {
  useNewUrlParser: true,
  useCreateIndex: true,
});
mongoose.connection.on('connected', () => console.log('Connected to Mongo'));

fs.readdirSync(modelsPath).forEach(file => {
  if (file.endsWith('.js')) {
    require(path.join(modelsPath, file));
  }
});
