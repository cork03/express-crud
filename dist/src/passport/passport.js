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
}, async (loginId, password, done) => {
    const user = await user_1.default.findOne({ where: { loginId } });
    if (!user) {
        console.log(1);
        return done(null, false);
    }
    const isCorrectPass = await bcrypt_1.compare(password, user.authorizeToken);
    if (!isCorrectPass) {
        console.log(2);
        return done(null, false);
    }
    return done(null, user);
}));
passport_1.default.use(new JwtStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET_KEY,
}, async (jwtPayload, done) => {
    const user = await user_1.default.findOne({
        where: { loginId: jwtPayload.loginId },
    });
    return done(null, user);
}));
//# sourceMappingURL=passport.js.map