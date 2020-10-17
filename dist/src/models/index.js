"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../config/config"));
exports.sequelize = new sequelize_1.Sequelize(config_1.default.database, config_1.default.username, config_1.default.password, {
    host: config_1.default.host,
    dialect: "mysql",
});
exports.connect = () => {
    exports.sequelize
        .authenticate()
        .then(() => {
        console.log("Success test connection");
    })
        .catch((error) => {
        console.log("Failure test connection", error);
    });
};
//# sourceMappingURL=index.js.map