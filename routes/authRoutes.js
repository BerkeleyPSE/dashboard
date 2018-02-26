// node modules
const passport = require('passport');
const includes = require('lodash/includes');

// local
const mongooseStatic = require('../databases/static');
const API = require('./api');

// MongoDB collection
const User = mongooseStatic.model('users');

module.exports = (app) => {};
