"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importStar(require("sequelize"));
const models_1 = require("../models");
class User extends sequelize_1.Model {
}
User.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.default.INTEGER,
    },
    loginId: {
        type: sequelize_1.default.STRING,
        allowNull: false,
    },
    authorize_token: {
        type: sequelize_1.default.STRING,
        allowNull: false,
    },
    name: {
        type: sequelize_1.default.STRING,
        allowNull: false,
    },
    iconUrl: {
        type: sequelize_1.default.TEXT,
        allowNull: false,
    },
    createAt: {
        type: sequelize_1.default.DATE,
        allowNull: false,
    },
    updatedAt: {
        type: sequelize_1.default.DATE,
        allowNull: false,
    },
}, {
    sequelize: models_1.sequelize,
    modelName: "user",
});
exports.default = User;
//# sourceMappingURL=user.js.map