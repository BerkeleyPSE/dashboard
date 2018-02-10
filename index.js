// node modules
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');

// local imports
const keys = require('./config/keys');
// require models here

const app = express();

// connect to MongoDB database

/*** middleware ***/

app.use(bodyParser.json());

app.use(
  cookieSession({
    maxAge: 7 * 24 * 60 * 60 * 1000, // cookie is valid for 1 week
    keys: [keys.cookieKey],
  }),
);

app.use(passport.initialize());
app.use(passport.session());

/*** routes ***/

/*** start the server ***/
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('./client/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './client/build/', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
