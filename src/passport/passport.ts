import passport from "passport";
import passportLocal from "passport-local";
import passportJWT from "passport-jwt";
import User from "../models/user";
import { compare } from "./bcrypt";
import { createSecretKey } from "crypto";

const LocalStrategy = passportLocal.Strategy;
const JwtStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

// ローカルpassportの設定

passport.use(
  new LocalStrategy(
    {
      usernameField: "loginId",
      passwordField: "password",
    },
    (loginId: string, password: string, done: Function) => {
      return User.findOne({ where: { loginId } }).then(
        async (user: User | null) => {
          if (!user) {
            return done(null, false);
          }
          const isCorrectPass = await compare(password, user.authorizeToken!);
          if (!isCorrectPass) {
            return done(null, false);
          }
          return done(null, user);
        }
      );
    }
  )
);

// jwtPassportの設定

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.SECRET_KEY,
    },
    (jwtPayload: any, done: Function) => {
      return User.findOne({ where: { loginId: jwtPayload.loginId } })
        .then((user: User | null) => {
          return done(null, user);
        })
        .catch((error: Error) => {
          return done(null, false);
        });
    }
  )
);
