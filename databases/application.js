const mongoose = require('mongoose');

const keys = require('../config/keys');

const mongooseApp = mongoose.createConnection(keys.mongoAppURI);

module.exports = mongooseApp;
