// node modules
const mongoose = require('mongoose');

// MongoDB collections
const Fulltime = mongoose.model('careers_fulltime');

// local files
const API = require('./api');

module.exports = (app) => {
  app.get(API.GET_FULLTIMES, async (res, req) => {
    const fulltimeCareers = await Fulltime.find().sort({
      name: 1
    });
    res.status(200).send(fulltimeCareers);
  });
};
