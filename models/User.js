// node modules
const mongoose = require('mongoose');

// local
const mongooseStatic = require('../databases/static');

const { Schema } = mongoose;

const userSchema = new Schema({
  googleID: {
    type: String,
    required: true
  },

  name: {
    type: String,
    required: true,
    trim: true
  },

  email: {
    type: String,
    required: true,
    trim: true
  },

  role: {
    type: String,
    enum: ['editor', 'viewer'],
    required: true,
    default: 'viewer',
    trim: true
  }
});

mongooseStatic.model('users', userSchema);
