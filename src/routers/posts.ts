import express, { Response, NextFunction } from "express";
import Post from "../models/post";
import PostCategory from "../models/post_category";

const router = express.Router();

router.get("/", async (req: any, res: Response) => {});

router.get("/:id", (req: any, res: Response) => {
  res.send("posts/id");
});

router.post("/", async (req: any, res: Response) => {
  const {
    post: { categoryIds, ...postElement },
  } = req.body;
  const userId = req.user.id;
  const postElemnts = { ...postElement, userId: userId };
  try {
    await Post.signUpPost(postElemnts, categoryIds);
    res.json({});
  } catch (error) {
    res.json({ error });
  }
});

router.patch("/:id", (req: any, res: Response) => {
  res.send("posts/id");
});

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
