const mongoose = require('mongoose');

const keys = require('../config/keys');

const mongooseStatic = mongoose.createConnection(keys.mongoStaticURI);

module.exports = mongooseStatic;
