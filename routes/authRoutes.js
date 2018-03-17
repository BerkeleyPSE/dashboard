// node modules
const passport = require('passport');

// local
const API = require('./api');

module.exports = (app) => {
  app.get(
    API.LOGIN,
    passport.authenticate('google', {
      scope: ['profile', 'email'],
      prompt: 'select_account'
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google', {
      failureRedirect: '/'
    }),
    (req, res) => {
      res.redirect('/');
    }
  );

  app.get(API.LOGOUT, (req, res) => {
    console.log('LOGGING OUT');
    req.logout();
    res.redirect('/');
  });

  app.get(API.GET_SELF, (req, res) => {
    res.send(req.user);
  });
};
