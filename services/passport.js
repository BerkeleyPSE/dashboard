// node modules
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const includes = require('lodash/includes');

// local
const mongooseStatic = require('../databases/static');
const keys = require('../config/keys.js');
const { allEmails, editEmails } = require('../middleware/allowed_emails');

const User = mongooseStatic.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(new GoogleStrategy(
  {
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
  },
  async (accessToken, refreshToken, profile, done) => {
    const existingUser = await User.findOne({ googleID: profile.id });
    if (existingUser) return done(null, existingUser);

    const email = profile.emails[0].value;
    if (!includes(allEmails, email)) return done(null, null);

    let role = 'viewer';
    if (includes(editEmails, email)) role = 'editor';

    const user = await new User({
      googleID: profile.id,
      name: profile.displayName,
      email,
      role
    }).save();
    done(null, user);
  }
));
