"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dorenv = require("dotenv");
dorenv.config();
exports.config = {
    host: process.env.HOST,
    database: process.env.DATABASE_NAME,
    username: process.env.USER_NAME,
    password: process.env.DATABASE_PASSWORD,
};
module.exports = {
    development: {
        username: exports.config.username,
        password: exports.config.password,
        database: exports.config.database,
        host: exports.config.host,
        dialect: "mysql",
        operatorsAliases: false,
    },
};
//# sourceMappingURL=config.js.map