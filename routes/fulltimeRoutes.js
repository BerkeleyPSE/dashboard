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
const Fulltime = mongooseStatic.model('careers_fulltimes');

module.exports = (app) => {
  app.get(API.GET_FULLTIMES, requireLogin, async (req, res) => {
    const searchTerm = isEmpty(req.query.search)
      ? {}
      : { name: { $regex: req.query.search, $options: 'i' } };

    const fulltimes = await Fulltime.find(searchTerm, { _id: 1, name: 1 }).sort({
      name: 1
    });

    return res.status(200).send(fulltimes);
  });

  app.get(API.GET_ONE_FULLTIME, requireLogin, async (req, res) => {
    if (isEmpty(req.query) || isUndefined(req.query.fulltimeId)) return res.status(404).send({});

    const fulltime = await Fulltime.findById(req.query.fulltimeId);
    if (isEmpty(fulltime)) return res.status(404).send({});

    return res.status(200).send(fulltime);
  });

  app.post(API.CREATE_FULLTIME, requireLogin, assertCanEdit, async (req, res) => {
    if (isEmpty(req.body)) return res.status(400).send({});

    const newfulltime = new Fulltime(req.body);
    try {
      const fulltime = await newfulltime.save();
      if (isEmpty(fulltime)) return res.status(422).send({});
      return res.status(201).send(fulltime);
    } catch (err) {
      return res.status(422).send(err);
    }
  });

  app.put(API.UPDATE_FULLTIME, requireLogin, assertCanEdit, async (req, res) => {
    const { fulltimeId, newActiveFulltime } = req.body;
    if (isEmpty(fulltimeId) || isEmpty(newActiveFulltime)) return res.status(400).send({});

    const fulltime = await Fulltime.findByIdAndUpdate(fulltimeId, newActiveFulltime, { new: true });
    if (isEmpty(fulltime)) return res.status(401).send({});

    return res.status(200).send(fulltime);
  });

  app.delete(API.DELETE_FULLTIME, requireLogin, assertCanEdit, async (req, res) => {
    if (isEmpty(req.query) || isUndefined(req.query.fulltimeId)) return res.status(400).send();

    await Fulltime.remove({ _id: req.query.fulltimeId }); // TODO: maybe try/catch this?

    return res.status(200).send();
  });
};
