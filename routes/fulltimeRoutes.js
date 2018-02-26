// local
const mongooseStatic = require('../databases/static');
const API = require('./api');

// MongoDB collection
const Fulltime = mongooseStatic.model('careers_fulltime');

module.exports = (app) => {
  app.get(API.GET_FULLTIMES, async (res, req) => {
    const fulltimeCareers = await Fulltime.find().sort({
      name: 1
    });
    res.status(200).send(fulltimeCareers);
  });
};
