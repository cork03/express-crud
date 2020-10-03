import passport from "passport";
import passportLocal from "passport-local";
import passportJWT from "passport-jwt";
import User from "../models/user";
import { compare } from "./bcrypt";
import { createSecretKey } from "crypto";

const LocalStrategy = passportLocal.Strategy;
const JwtStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

passport.use(
  new LocalStrategy(
    {
      usernameField: "loginId",
      passwordField: "password",
    },
    async function (loginId: string, password: string, done: Function) {
      console.log("async");
      return User.findOne({ where: { loginId } }).then((user: User | null) => {
        if (!user) {
          console.log("1");
          return done(null, false);
        }
        const correctPass = compare(password, user.authorize_token!);
        if (!correctPass) {
          console.log("2");
          return done(null, false);
        }
        console.log("3");
        return done(null, user);
      });
    }
  )
);

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: "dfa",
    },
    () => {}
  )
);
