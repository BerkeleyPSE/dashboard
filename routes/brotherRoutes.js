// local
const mongooseStatic = require('../databases/static');
const API = require('./api');

// MongoDB collection
const Brothers = mongooseStatic.model('brothers');

module.exports = (app) => {
  app.get(API.GET_BROTHERS, async (req, res) => {
    const brothers = await Brothers.find().sort({
      name: 1
    });

    res.status(200).send(brothers);
  });
};
