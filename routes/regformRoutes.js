// lodash
const isEmpty = require('lodash/isEmpty');
const isUndefined = require('lodash/isUndefined');

// local
const mongooseApp = require('../databases/application');
const API = require('./api');

// MongoDB collection
const Regforms = mongooseApp.model('regforms');

module.exports = (app) => {
  app.get(API.GET_REGFORMS, async (req, res) => {
    const searchTerm = isEmpty(req.query.search)
      ? {}
      : { name: { $regex: req.query.search, $options: 'i' } };

    const regforms = await Regforms.find(searchTerm, { _id: 1, name: 1 }).sort({
      name: 1
    });

    return res.status(200).send(regforms);
  });

  app.get(API.GET_ONE_REGFORM, async (req, res) => {
    if (isEmpty(req.query) || isUndefined(req.query.regformId)) return res.status(404).send({});

    const regform = await Regforms.findById(req.query.regformId);
    if (isEmpty(regform)) return res.status(404).send({});

    return res.status(200).send(regform);
  });

  app.delete(API.DELETE_ONE_REGFORM, async (req, res) => {
    if (isEmpty(req.query) || isUndefined(req.query.regformId)) return res.status(400).send();

    await Regforms.remove({ _id: req.query.regformId }); // TODO: maybe try/catch this?

    return res.status(200).send();
  });

  app.delete(API.DELETE_REGFORMS, async (req, res) => {
    await Regforms.remove({}); // TODO: maybe try/catch this?
    return res.status(200).send();
  });
};
