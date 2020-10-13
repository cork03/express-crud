import Sequelize, { Model } from "sequelize";
import { sequelize } from "../models";
import PostCategory from "./post_category";

class Category extends Model {}

Category.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    key: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Category",
    tableName: "categories",
  }
);

Category.hasMany(PostCategory);
PostCategory.belongsTo(Category);

export default Category;
