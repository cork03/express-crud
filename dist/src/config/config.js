"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dorenv = require("dotenv");
dorenv.config();
exports.config = {
    host: process.env.HOST,
    database: process.env.DATABASE_NAME || "localhost",
    username: process.env.USER_NAME || "root",
    password: process.env.DATABASE_PASSWORD || "",
};
//# sourceMappingURL=config.js.map