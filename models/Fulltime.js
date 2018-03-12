// node modules
const mongoose = require('mongoose');

// local
const mongooseStatic = require('../databases/static');

const { Schema } = mongoose;

const FulltimeSchema = new Schema({
  name: {
    type: String,
    required: true
  },

  industry: {
    type: String,
    required: true
  },

  company: {
    type: String,
    required: true
  },

  position: {
    type: String,
    required: true
  },

  location: {
    type: String,
    required: true
  },

  gradYear: {
    type: Number,
    required: true
  }
});

mongooseStatic.model('careers_fulltime', FulltimeSchema);
