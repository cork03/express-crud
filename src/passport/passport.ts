import passport from "passport";
import passportLocal from "passport-local";
import User from "../models/user";

const LocalStrategy = passportLocal.Strategy;

passport.use(
  new LocalStrategy(
    {
      usernameField: "loginId",
      passwordField: "password",
    },
    (loginId, password, done) => {
      return User.findOne({ where: { id: loginId } }).then((user) => {
        if (!user) {
          return done(null, false);
        }
        if (!user.verifyPassword(password)) {
          return done(null, false);
        }
        return done(null, user);
      });
    }
  )
);
