// node modules
const { FulltimeSchema } = require('berkeleypse-schemas');

// local
const mongooseStatic = require('../databases/static');

mongooseStatic.model('careers_fulltimes', FulltimeSchema);
