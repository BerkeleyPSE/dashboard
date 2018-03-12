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
    required: true
  },

  email: {
    type: String,
    required: true
  }

  // role: {
  //   type: String, // 'admin' or 'viewer'
  //   required: true
  // }
});

mongooseStatic.model('users', userSchema);
