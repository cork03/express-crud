import express, { Response, NextFunction } from "express";
import Post from "../models/post";
import PostCategory from "../models/post_category";
import Category from "../models/category";

const router = express.Router();

router.get("/", async (req: any, res: Response) => {
  try {
    const posts = await Post.findAll({
      include: { model: Category, as: "categories" },
    });
    res.status(200).json({ posts });
  } catch (error) {
    res.json({ error });
  }
});

router.get("/:id", async (req: any, res: Response) => {
  const { id } = req.params;
  try {
    const post = await Post.findByPk(id, {
      include: { model: Category, as: "categories" },
    });
    res.status(200).json({ post });
  } catch (error) {
    res.json({ error });
  }
});

router.post("/", async (req: any, res: Response) => {
  const {
    post: { categoryIds, ...postElement },
  } = req.body;
  const userId = req.user.id;
  const postElemnts = { ...postElement, userId: userId };
  try {
    await Post.signUpPost(postElemnts, categoryIds);
    res.status(201).json({});
  } catch (error) {
    res.json({ error });
  }
});

router.patch("/:id", (req: any, res: Response) => {});

router.delete("/:id", async (req: any, res: Response) => {
  const { id } = req.params;
  try {
    const post = await Post.findByPk(id);
    await post!.destroy();
    res.status(200).json({ post });
  } catch (error) {
    res.json({ error });
  }
});

export default router;
