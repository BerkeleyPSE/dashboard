// node modules
const express = require('express');
// const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const path = require('path');

/* mLab MongoDB databases */
require('./databases/application');
require('./databases/static');

// local imports
const keys = require('./config/keys');

// start express server instance
const app = express();

/* models */
require('./models/Brother');
require('./models/Faq');
require('./models/Fulltime');
require('./models/Internship');
require('./models/User');

/* OAuth */
require('./services/passport.js');

/* middleware */

app.use(bodyParser.json());

app.use(cookieSession({
  maxAge: 1 * 24 * 60 * 60 * 1000, // cookie is valid for 1 day
  keys: [keys.cookieKey]
}));

app.use(passport.initialize());
app.use(passport.session());

/* routes */
require('./routes/authRoutes')(app);
// require('./routes/applicationRoutes')(app);
require('./routes/brotherRoutes')(app);
require('./routes/faqRoutes')(app);
require('./routes/fulltimeRoutes')(app);
require('./routes/internshipRoutes')(app);
// require('./routes/regformRoutes')(app);
require('./routes/userRoutes')(app);

/* start the server */
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('./client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './client/build/', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
