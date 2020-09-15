"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = require("../config/config");
const sequelize = new sequelize_1.Sequelize(config_1.config.database, config_1.config.username, config_1.config.password, {
    host: "localhost",
    dialect: "mssql",
});
//# sourceMappingURL=index.js.map