// lodash
const isEmpty = require('lodash/isEmpty');
const isUndefined = require('lodash/isUndefined');

// local
const mongooseStatic = require('../databases/static');
const API = require('./api');

// middleware
const requireLogin = require('../middleware/requireLogin');
const assertCanEdit = require('../middleware/assertCanEdit');

// MongoDB collection
const Brothers = mongooseStatic.model('brothers');

module.exports = (app) => {
  app.get(API.GET_BROTHERS, requireLogin, async (req, res) => {
    const searchTerm = isEmpty(req.query.search)
      ? {}
      : { name: { $regex: req.query.search, $options: 'i' } };

    const brothers = await Brothers.find(searchTerm, { _id: 1, name: 1 }).sort({
      name: 1
    });

    return res.status(200).send(brothers);
  });

  app.get(API.GET_ONE_BROTHER, requireLogin, async (req, res) => {
    if (isEmpty(req.query) || isUndefined(req.query.brotherId)) return res.status(404).send({});

    const brother = await Brothers.findById(req.query.brotherId);
    if (isEmpty(brother)) return res.status(404).send({});

    return res.status(200).send(brother);
  });

  app.post(API.CREATE_BROTHER, requireLogin, assertCanEdit, async (req, res) => {
    if (isEmpty(req.body)) return res.status(400).send({});

    const newBrother = new Brothers(req.body);
    try {
      const brother = await newBrother.save();
      if (isEmpty(brother)) return res.status(422).send({});
      return res.status(201).send(brother);
    } catch (err) {
      return res.status(422).send(err);
    }
  });

  app.put(API.UPDATE_BROTHER, requireLogin, assertCanEdit, async (req, res) => {
    const { brotherId, newActiveBrother } = req.body;
    if (isEmpty(brotherId) || isEmpty(newActiveBrother)) return res.status(400).send({});

    const brother = await Brothers.findByIdAndUpdate(brotherId, newActiveBrother, { new: true });
    if (isEmpty(brother)) return res.status(401).send({});

    return res.status(200).send(brother);
  });

  app.delete(API.DELETE_BROTHER, requireLogin, assertCanEdit, async (req, res) => {
    if (isEmpty(req.query) || isUndefined(req.query.brotherId)) return res.status(400).send();

    await Brothers.remove({ _id: req.query.brotherId }); // TODO: maybe try/catch this?

    return res.status(200).send();
  });
};
