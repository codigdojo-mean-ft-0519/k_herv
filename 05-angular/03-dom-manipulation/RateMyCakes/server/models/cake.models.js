const mongoose = require('mongoose');

const { Schema } = mongoose;

const RatingSchema = mongoose.Schema({
  cake: {
    type: Schema.Types.ObjectId,
    ref: 'Cake',
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    minimum: 1,
    maximum: 5,
  },
  comment: {
    type: String,
    required: false,
  },
});

const CakeSchema = new mongoose.Schema(
  {
    bakedBy: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    ratings: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Rating',
      },
    ],
  },
  {
    timestamp: true,
  }
);

module.exports.Cake = mongoose.model('Cake', CakeSchema);
module.exports.Rating = mongoose.model('Rating', RatingSchema);
