import Sequelize, { Model } from "sequelize";
import { sequelize } from "../models";
import PostCategory from "./post_category";
import Category from "./category";

class Post extends Model {
  public id?: number;
  static async signUpPost(postElement: any, categoryId: number[]) {
    await sequelize.transaction(async (transaction) => {
      const post = await Post.create(postElement, { transaction });
      for (let i: number = 0; i < categoryId.length; i++) {
        await PostCategory.create(
          {
            postId: post.id,
            categoryId: categoryId[i],
          },
          { transaction }
        );
      }
    });
  }
}

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

Post.hasMany(PostCategory);
PostCategory.belongsTo(Post);
Post.belongsToMany(Category, { through: PostCategory });
Category.belongsToMany(Post, { through: PostCategory });

export default Post;
