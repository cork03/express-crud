"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const passport_local_1 = __importDefault(require("passport-local"));
const passport_jwt_1 = __importDefault(require("passport-jwt"));
const user_1 = __importDefault(require("../models/user"));
const bcrypt_1 = require("./bcrypt");
const LocalStrategy = passport_local_1.default.Strategy;
const JwtStrategy = passport_jwt_1.default.Strategy;
const ExtractJWT = passport_jwt_1.default.ExtractJwt;
passport_1.default.use(new LocalStrategy({
    usernameField: "loginId",
    passwordField: "password",
}, (loginId, password, done) => {
    return user_1.default.findOne({ where: { loginId } }).then(async (user) => {
        if (!user) {
            return done(null, false);
        }
        const isCorrectPass = await bcrypt_1.compare(password, user.authorize_token);
        if (!isCorrectPass) {
            return done(null, false);
        }
        return done(null, user);
    });
}));
passport_1.default.use(new JwtStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET_KEY,
}, (jwtPayload, done) => {
    return user_1.default.findOne({ where: { loginId: jwtPayload.loginId } })
        .then((user) => {
        return done(null, user);
    })
        .catch((error) => {
        return done(null, false);
    });
}));
//# sourceMappingURL=passport.js.map