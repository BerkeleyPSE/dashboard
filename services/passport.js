// node modules
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const includes = require('lodash/includes');

// local
const mongooseStatic = require('../databases/static');
const keys = require('../config/keys.js');

const User = mongooseStatic.model('users');
const ALLOWED_EMAILS = ['berkeleypse.tech@gmail.com', 'berkeleypse.marketing@gmail.com'];

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
    if (!includes(ALLOWED_EMAILS, profile.emails[0].value)) return done(null, null);
    const user = await new User({
      googleID: profile.id,
      name: profile.displayName,
      email: profile.emails[0].value
    }).save();
    done(null, user);
  }
));
