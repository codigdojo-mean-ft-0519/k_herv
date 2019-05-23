//model name will be that preceeding .models.js in file name of file under models under server

//the cake needs to know about messages, but the messages don't need to know their cakes
//when we loop through to bring up all the cakes...we are looping cakes, not messages

const mongoose = require('mongoose');
const { Schema } = mongoose;

const mongoose = require('mongoose');

const rateSchema = new mongoose.Schema({
  rating: { type: Number, required: true, min: 1, max: 5 },
  comment: { type: String },
});

const cakeSchema = new mongoose.Schema(
  {
    bakerName: { type: String },
    url: { type: String },
    rating: [rateSchema],
  },
  { timestamp: true }
);

module.exports = mongoose.model('Cake', cakeSchema);
var Cake = mongoose.model('Cake');

//module.exports = mongoose.model('Resttask', ResttaskSchema);
