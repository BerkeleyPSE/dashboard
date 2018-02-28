// lodash
const isEmpty = require('lodash/isEmpty');

// local
const mongooseStatic = require('../databases/static');
const API = require('./api');

// MongoDB collection
const Brothers = mongooseStatic.model('brothers');

module.exports = (app) => {
  app.get(API.GET_BROTHERS, async (req, res) => {
    const brothers = await Brothers.find({}, { _id: 1, name: 1 }).sort({ name: 1 });
    if (!brothers.length) return res.status(404).send([]);
    return res.status(200).send(brothers);
  });

  app.get(API.GET_ONE_BROTHER, async (req, res) => {
    if (isEmpty(req.query) || isEmpty(req.query.brotherId)) return res.status(404).send({});

    const brother = await Brothers.find({ _id: req.query.brotherId });
    if (isEmpty(brother)) return res.status(404).send({});

    return res.status(200).send(brother[0]);
  });

  app.put(API.UPDATE_BROTHER, async (req, res) => {
    const { brotherId, newActiveBrother } = req.body;
    if (isEmpty(brotherId) || isEmpty(newActiveBrother)) return res.status(400).send({});
    const brother = await Brothers.findByIdAndUpdate(brotherId, newActiveBrother, { new: true });
    if (isEmpty(brother)) return res.status(401).send({});

    return res.status(200).send(brother);
  });
};
