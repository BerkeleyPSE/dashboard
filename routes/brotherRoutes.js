// node modules
const mongoose = require('mongoose');

const Brothers = mongoose.model('brother');

const API = require('./api');

module.exports = (app) => {
  app.get(API.GET_BROTHERS, async (req, res) => {
    const brothers = await Brothers.find().sort({
      name: 1
    });
    res.status(200).send(brothers);
  });
};
