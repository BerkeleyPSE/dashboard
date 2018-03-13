// lodash
const isEmpty = require('lodash/isEmpty');
const isUndefined = require('lodash/isUndefined');

// local
const mongooseApp = require('../databases/application');
const API = require('./api');

// middleware
const requireLogin = require('../middleware/requireLogin');
const assertCanEdit = require('../middleware/assertCanEdit');

// MongoDB collection
const Applications = mongooseApp.model('applications');

module.exports = (app) => {
  app.get(API.GET_APPS, requireLogin, async (req, res) => {
    const searchTerm = isEmpty(req.query.search)
      ? {}
      : { name: { $regex: req.query.search, $options: 'i' } };

    const apps = await Applications.find(searchTerm, { _id: 1, name: 1 }).sort({
      name: 1
    });

    return res.status(200).send(apps);
  });

  app.get(API.GET_ONE_APP, requireLogin, async (req, res) => {
    if (isEmpty(req.query) || isUndefined(req.query.appId)) return res.status(404).send({});

    const singleApp = await Applications.findById(req.query.appId);
    if (isEmpty(singleApp)) return res.status(404).send({});

    return res.status(200).send(singleApp);
  });

  app.delete(API.DELETE_ONE_APP, requireLogin, assertCanEdit, async (req, res) => {
    if (isEmpty(req.query) || isUndefined(req.query.appId)) return res.status(400).send();

    await Applications.remove({ _id: req.query.appId }); // TODO: maybe try/catch this?

    return res.status(200).send();
  });

  app.delete(API.DELETE_APPS, async (req, res) => {
    await Applications.remove({}); // TODO: maybe try/catch this?
    return res.status(200).send();
  });
};
