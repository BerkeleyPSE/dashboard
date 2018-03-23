// node modules
const { InternshipSchema } = require('berkeleypse-schemas');

// local
const mongooseStatic = require('../databases/static');

mongooseStatic.model('careers_internships', InternshipSchema);
