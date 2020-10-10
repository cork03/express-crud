import Sequelize, { Model } from "sequelize";
import { sequelize } from "../models";
import PostCategory from "./post_category";
import Category from "./category";

class Post extends Model {}

Post.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    body: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    status: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    sequelize,
    modelName: "post",
    tableName: "posts",
  }
);

export default Post;
