// lodash
const includes = require('lodash/includes');

// local
const { editEmails } = require('./allowed_emails');

module.exports = (req, res, next) => {
  if (!includes(editEmails, req.user.email)) {
    return res.status(401).send({ error: 'You are not allowed to make edits.' });
  }
  return next();
};
