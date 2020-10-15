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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importStar(require("sequelize"));
const models_1 = require("../models");
const post_category_1 = __importDefault(require("./post_category"));
const category_1 = __importDefault(require("./category"));
class Post extends sequelize_1.Model {
    static async signUpPost(postElement, categoryId) {
        await models_1.sequelize.transaction(async (transaction) => {
            const post = await Post.create(postElement, { transaction });
            const categories = await category_1.default.findAll({ where: { id: categoryId } });
            if (post) {
                await post.setCategories(categories, {
                    through: {
                        postId: post.id,
                    },
                    transaction: transaction,
                });
            }
        });
    }
}
Post.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.default.INTEGER,
    },
    userId: {
        type: sequelize_1.default.INTEGER,
        allowNull: false,
    },
    title: {
        type: sequelize_1.default.STRING,
        allowNull: false,
    },
    body: {
        type: sequelize_1.default.TEXT,
        allowNull: false,
    },
    status: {
        type: sequelize_1.default.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
}, {
    sequelize: models_1.sequelize,
    modelName: "post",
    tableName: "posts",
});
Post.hasMany(post_category_1.default);
post_category_1.default.belongsTo(Post);
Post.belongsToMany(category_1.default, { as: "categories", through: post_category_1.default });
category_1.default.belongsToMany(Post, { through: post_category_1.default });
exports.default = Post;
//# sourceMappingURL=post.js.map