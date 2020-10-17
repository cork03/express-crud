import express, { Response } from "express";
import Category from "../models/category";

const router = express.Router();

router.get("/", async (req: any, res: Response) => {
  const { authorizeToken, ...user } = req.user.toJSON();
  res.status(200).json({ user });
});

router.get("/posts", async (req: any, res: Response) => {
  try {
    const posts = await req.user.getPosts({
      include: [{ model: Category, as: "categories" }],
    });
    res.status(200).json({ posts });
  } catch (error) {
    res.json({ error });
  }
});

export default router;
