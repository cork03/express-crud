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
    },
    categoryId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "postCategory",
    tableName: "post_categories",
  }
);

export default PostCategory;
