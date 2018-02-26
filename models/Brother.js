// node modules
const mongoose = require('mongoose');

const mongooseStatic = require('../databases/static');

const { Schema } = mongoose;

const BrotherSchema = new Schema({
  key: {
    type: String,
    required: true,
    lowercase: true
  },

  name: {
    type: String,
    required: true
  },

  imgUrl: {
    type: String,
    required: true
  },

  pseClass: {
    type: String,
    required: true
  },

  year: {
    type: String,
    required: true
  },

  isExecutive: {
    type: Boolean,
    required: true,
    default: false
  },

  position: {
    type: String,
    required: true,
    default: 'Active'
  },

  hometown: {
    type: String,
    required: true
  },

  majors: {
    type: [String],
    required: true
  },

  minors: {
    type: [String],
    required: false,
    default: []
  },

  careerInterests: {
    type: [String],
    required: true
  },

  previousPositions: {
    type: [String],
    required: false,
    default: []
  },

  bio: {
    type: String,
    required: true
  },

  mediaUrls: {
    type: {
      linkedin: String,
      github: String,
      medium: String,
      quora: String,
      twitter: String,
      website: String
    },
    required: true,
    default: {
      linkedin: '',
      github: '',
      medium: '',
      quora: '',
      twitter: '',
      website: ''
    }
  }
});

mongooseStatic.model('brothers', BrotherSchema);
