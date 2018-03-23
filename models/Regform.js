// node modules
const { RegformSchema } = require('berkeleypse-schemas');

// local
const mongooseApp = require('../databases/application');

mongooseApp.model('regforms', RegformSchema);
