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
}, async function (loginId, password, done) {
    console.log("async");
    return user_1.default.findOne({ where: { loginId } }).then((user) => {
        if (!user) {
            console.log("1");
            return done(null, false);
        }
        const correctPass = bcrypt_1.compare(password, user.authorize_token);
        if (!correctPass) {
            console.log("2");
            return done(null, false);
        }
        console.log("3");
        return done(null, user);
    });
}));
passport_1.default.use(new JwtStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: "dfa",
}, () => { }));
//# sourceMappingURL=passport.js.map