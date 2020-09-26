"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.compare = exports.hash = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const saltRounds = 10;
exports.hash = (pass) => {
    return new Promise((resolve, reject) => {
        bcrypt_1.default.hash(pass, saltRounds, (e, hashedPass) => {
            if (e) {
                reject(e);
            }
            resolve(hashedPass);
        });
    });
};
exports.compare = (pass, hashedPass) => {
    return new Promise((resolve, reject) => {
        bcrypt_1.default.compare(pass, hashedPass, (e, check) => {
            if (e) {
                reject(e);
            }
            resolve(check);
        });
    });
};
//# sourceMappingURL=bcrypt.js.map