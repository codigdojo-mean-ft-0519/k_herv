//model name will be that preceeding .models.js in file name of file under models under server

const mongoose = require('mongoose');
const { Schema } = mongoose;

const ResttaskSchema = Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },
    completed: {
      type: Boolean,
      default: false,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Resttask', ResttaskSchema);
