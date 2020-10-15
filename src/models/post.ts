import Sequelize, { Model } from "sequelize";
import { sequelize } from "../models";
import PostCategory from "./post_category";
import Category from "./category";

class Post extends Model {
  public id?: number;
  static async signUpPost(postElement: any, categoryId: number[]) {
    await sequelize.transaction(async (transaction) => {
      const post = await Post.create(postElement, { transaction });
      const categories = await Category.findAll({ where: { id: categoryId } });
      if (post) {
        await (post as any).setCategories(categories, {
          through: {
            postId: post.id,
          },
          transaction: transaction,
        });
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
Post.belongsToMany(Category, { as: "categories", through: PostCategory });
Category.belongsToMany(Post, { through: PostCategory });

export default Post;
