import express, { Response } from "express";
import Post from "../models/post";
import Category from "../models/category";
import PostCategory from "../models/post_category";

const router = express.Router();

router.get("/", async (req: any, res: Response) => {
  const { authorizeToken, ...user } = req.user.toJSON();
  res.json({ user });
});

router.get("/posts", async (req: any, res: Response) => {
  try {
    const posts = await req.user.getPosts({
      include: [{ model: Category }],
    });
    res.json({ posts });
  } catch (error) {
    res.json({ error });
  }
});

export default router;
