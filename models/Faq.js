// node modules
const mongoose = require('mongoose');

// local
const mongooseStatic = require('../databases/static');

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

mongooseStatic.model('faqs', FaqSchema);
