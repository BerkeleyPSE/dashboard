// node modules
const mongoose = require('mongoose');

// local
const mongooseStatic = require('../databases/static');

const { Schema } = mongoose;

const InternshipSchema = new Schema({
  name: {
    type: String,
    required: true
  },

  summer_year: {
    type: Number,
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
  }
});

mongooseStatic.model('careers_internships', InternshipSchema);
