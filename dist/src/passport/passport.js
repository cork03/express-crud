"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const passport_local_1 = __importDefault(require("passport-local"));
const user_1 = __importDefault(require("../models/user"));
const bcrypt_1 = require("./bcrypt");
const LocalStrategy = passport_local_1.default.Strategy;
passport_1.default.use(new LocalStrategy({
    usernameField: "loginId",
    passwordField: "password",
}, async function (loginId, password, done) {
    return user_1.default.findOne({ where: { loginId } }).then((user) => {
        const check = bcrypt_1.compare(password, user.authorize_token);
        if (!user) {
            return done(null, false, { message: "user undefind" });
        }
        if (!check) {
            return done(null, false, { message: "incorrect password" });
        }
        return done(null, user);
    });
}));
//# sourceMappingURL=passport.js.map