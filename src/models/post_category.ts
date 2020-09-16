import Sequelize, { Model } from "sequelize";
import { sequelize } from "../models";

class PostCategory extends Model {}

PostCategory.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    postId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: "posts", key: "id" },
    },
    categoryId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: "categories", key: "id" },
    },
  },
  {
    sequelize,
    modelName: "postCategory",
  }
);

export default PostCategory;
