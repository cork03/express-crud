import Sequelize, { Model } from "sequelize";
import { sequelize } from "../models";
import PostCategory from "./post_category";
import Category from "./category";

class Post extends Model {
  public id?: number;
  public setCategories?: Function;

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

  static async updatePost(postElement: any, postId: any, categoryId: number[]) {
    await sequelize.transaction(async (transaction) => {
      Post.update(postElement, { where: { id: postId } });
      const post = await Post.findByPk(postId);
      const categories = await Category.findAll({ where: { id: categoryId } });
      await (post as any).setCategories(categories, {
        through: {
          postId,
        },
      });
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

export const PostCategories = Post.hasMany(PostCategory);
export const postCategory = PostCategory.belongsTo(Post);
export const Categories = Post.belongsToMany(Category, {
  as: "categories",
  through: "post_categories",
});
export const Posts = Category.belongsToMany(Post, {
  as: "posts",
  through: "post_categories",
});

export default Post;
