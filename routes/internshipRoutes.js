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
const Internships = mongooseStatic.model('careers_internships');

module.exports = (app) => {
  app.get(API.GET_INTERNSHIPS, requireLogin, async (req, res) => {
    const searchTerm = isEmpty(req.query.search)
      ? {}
      : { name: { $regex: req.query.search, $options: 'i' } };

    const internships = await Internships.find(searchTerm, { _id: 1, name: 1 }).sort({
      name: 1
    });

    return res.status(200).send(internships);
  });

  app.get(API.GET_ONE_INTERNSHIP, requireLogin, async (req, res) => {
    if (isEmpty(req.query) || isUndefined(req.query.internshipId)) return res.status(404).send({});

    const internship = await Internships.findById(req.query.internshipId);
    if (isEmpty(internship)) return res.status(404).send({});

    return res.status(200).send(internship);
  });

  app.post(API.CREATE_INTERNSHIP, requireLogin, assertCanEdit, async (req, res) => {
    if (isEmpty(req.body)) return res.status(400).send({});

    const newinternship = new Internships(req.body);
    try {
      const internship = await newinternship.save();
      if (isEmpty(internship)) return res.status(422).send({});
      return res.status(201).send(internship);
    } catch (err) {
      return res.status(422).send(err);
    }
  });

  app.put(API.UPDATE_INTERNSHIP, requireLogin, assertCanEdit, async (req, res) => {
    const { internshipId, newActiveInternship } = req.body;
    if (isEmpty(internshipId) || isEmpty(newActiveInternship)) return res.status(400).send({});

    const internship = await Internships.findByIdAndUpdate(internshipId, newActiveInternship, {
      new: true
    });
    if (isEmpty(internship)) return res.status(401).send({});

    return res.status(200).send(internship);
  });

  app.delete(API.DELETE_INTERNSHIP, requireLogin, assertCanEdit, async (req, res) => {
    if (isEmpty(req.query) || isUndefined(req.query.internshipId)) return res.status(400).send();

    await Internships.remove({ _id: req.query.internshipId }); // TODO: maybe try/catch this?

    return res.status(200).send();
  });
};
