// node modules
const { ApplicationSchema } = require('berkeleypse-schemas');

// local
const mongooseApp = require('../databases/application');

mongooseApp.model('applications', ApplicationSchema);
