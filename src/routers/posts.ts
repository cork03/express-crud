import express, { Response } from "express";
import passport from "passport";
import Post from "../models/post";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("posts");
});

router.get("/:id", (req, res) => {
  res.send("posts/id");
});

router.post("/", async (req: any, res: Response) => {
  const {
    post: { categoryIds, ...postElement },
  } = req.body;
  const userId = req.user.id;
  await Post.create({ ...postElement, userId: userId });
  res.json({});
});

router.patch("/:id", (req, res) => {
  res.send("posts/id");
});

router.delete("/:id", (req, res) => {
  res.send("posts/id");
});

export default router;
