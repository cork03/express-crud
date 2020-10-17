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
exports.Posts = exports.Categories = exports.postCategory = exports.PostCategories = void 0;
const sequelize_1 = __importStar(require("sequelize"));
const models_1 = require("../models");
const post_category_1 = __importDefault(require("./post_category"));
const category_1 = __importDefault(require("./category"));
class Post extends sequelize_1.Model {
    static async add(postElement, categoryId) {
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
    static async updateWithCategory(postElement, postId, categoryId) {
        await models_1.sequelize.transaction(async (transaction) => {
            Post.update(postElement, { where: { id: postId } });
            const post = await Post.findByPk(postId);
            const categories = await category_1.default.findAll({ where: { id: categoryId } });
            await post.setCategories(categories, {
                through: {
                    postId,
                },
            });
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
exports.PostCategories = Post.hasMany(post_category_1.default);
exports.postCategory = post_category_1.default.belongsTo(Post);
exports.Categories = Post.belongsToMany(category_1.default, {
    as: "categories",
    through: "post_categories",
});
exports.Posts = category_1.default.belongsToMany(Post, {
    as: "posts",
    through: "post_categories",
});
exports.default = Post;
//# sourceMappingURL=post.js.map