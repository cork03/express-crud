import passport from "passport";
import passportLocal from "passport-local";
import User from "../models/user";
import { compare } from "./bcrypt";

const LocalStrategy = passportLocal.Strategy;

passport.use(
  new LocalStrategy(
    {
      usernameField: "loginId",
      passwordField: "password",
    },
    async function (loginId: string, password: string, done) {
      return User.findOne({ where: { loginId } }).then((user: User | null) => {
        const check = compare(password, user.authorize_token);
        if (!user) {
          return done(null, false, { message: "user undefind" });
        }
        if (!check) {
          return done(null, false, { message: "incorrect password" });
        }
        return done(null, user);
      });
    }
  )
);
