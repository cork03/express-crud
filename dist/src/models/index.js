"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const config_1 = require("../config/config");
exports.sequelize = new sequelize_1.Sequelize(config_1.config.database, config_1.config.username, config_1.config.password, {
    host: "localhost",
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