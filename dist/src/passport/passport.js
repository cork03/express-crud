"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const passport_local_1 = __importDefault(require("passport-local"));
const user_1 = __importDefault(require("../models/user"));
const LocalStrategy = passport_local_1.default.Strategy;
passport_1.default.use(new LocalStrategy({ usernameField: "loginId", passwordField: "password" }, (loginId, password, done) => {
    user_1.default.findOne({ username: loginId }, function (err, user) {
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
}));
//# sourceMappingURL=passport.js.map