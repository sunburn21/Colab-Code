const passport = require('passport');
const localStrategy = require('passport-local').Strategy;

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  User.findOne({ _id: id }, (err, user) => {
    done(err, user);
  });
});

passport.use(new localStrategy({
  usernameField: 'username'
}, (username, password, done) => {
  User.findOne({ username }, (err, user) => {
    if (err) return done(err);
    if (!user) {
      return done(null, false, {
        message: "Incorrect username or password"
      });
    }
    if (!user.validatePassword(password)) {
      return done(null, false, {
        message: "Incorrect username or password"
      });
    }
    return done(null, user);
  });
}
));