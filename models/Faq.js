// node modules
const mongoose = require('mongoose');

const { Schema } = mongoose;

const FaqSchema = new Schema({
  question: {
    type: String,
    required: true
  },

  answer: {
    type: Array,
    required: true,
    default: []
  }
});

mongoose.model('internship', FaqSchema);
