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
    type: {
      label: String,
      value: String
    },
    required: true
  },

  year: {
    type: {
      label: String,
      value: String
    },
    required: true
  },

  isExecutive: {
    type: {
      label: String,
      value: Boolean
    },
    required: true,
    default: false
  },

  position: {
    type: {
      label: String,
      value: String
    },
    required: true,
    default: 'Active'
  },

  hometown: {
    type: String,
    required: true
  },

  majors: {
    type: [
      {
        label: String,
        value: String
      }
    ],
    required: true
  },

  minors: {
    type: [
      {
        label: String,
        value: String
      }
    ],
    required: false,
    default: []
  },

  careerInterests: {
    type: [
      {
        label: String,
        value: String
      }
    ],
    required: true
  },

  previousPositions: {
    type: [
      {
        label: String,
        value: String
      }
    ],
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
