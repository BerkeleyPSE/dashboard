// node modules
const { BrotherSchema } = require('berkeleypse-schemas');

// local
const mongooseStatic = require('../databases/static');

mongooseStatic.model('brothers', BrotherSchema);
