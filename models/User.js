const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  googleID: {
    type: String,
    required: true,
  },

  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  photo: {
    type: String,
    required: false,
  },

  role: {
    type: String, // 'admin' or 'viewer'
    required: true,
  },
});

mongoose.model('users', userSchema);
