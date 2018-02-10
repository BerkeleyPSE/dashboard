// node modules
const mongoose = require('mongoose');

const { Schema } = mongoose;

const BrotherSchema = new Schema({
  first_name: {
    type: String,
    required: true,
  },

  last_name: {
    type: String,
    required: true,
  },

  pse_class: {
    type: String,
    required: true,
  },

  year: {
    type: String,
    required: true,
  },

  isExecutive: {
    type: Boolean,
    required: true,
    default: false,
  },

  position: {
    type: String,
    required: true,
    default: 'Active',
  },

  hometown: {
    type: String,
    required: true,
  },

  career_interests: {
    type: String,
    required: true,
  },

  major1: {
    type: String,
    required: true,
  },

  major2: {
    type: String,
    required: false,
  },

  minor: {
    type: String,
    required: false,
  },

  previous_positions: {
    type: String,
    required: false,
  },

  media_urls: {
    type: Object,
    required: true,
    default: {
      linkedin: '',
    },
  },
});

mongoose.model('brother', BrotherSchema);
