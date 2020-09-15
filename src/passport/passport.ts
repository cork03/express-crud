import passport from "passport";
import passportLocal from "passport-local";
import User from "../models/user";

const LocalStrategy = passportLocal.Strategy;

passport.use(
  new LocalStrategy(
    { usernameField: "loginId", passwordField: "password" },
    (loginId, password, done) => {
      User.findOne({ username: loginId }, function (err, user) {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false, { message: " ユーザーIDが間違っています" });
        }
        if (!user.verifyPassword(password)) {
          return done(null, false, { message: "passwordが間違っています" });
        }
        return done(null, user);
      });
    }
  )
);
