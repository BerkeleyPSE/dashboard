// node modules
const mongoose = require('mongoose');

// local
const mongooseApp = require('../databases/application');

const { Schema } = mongoose;

const regformSchema = new Schema({
  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true
  },

  submissionTime: Date
});

mongooseApp.model('regforms', regformSchema);
