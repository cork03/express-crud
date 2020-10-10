import express, { Request, Response } from "express";
import passport, { use } from "passport";
import User from "../models/user";
import Post from "../models/post";

const router = express.Router();

router.get("/", async (req: any, res: Response) => {
  const { authorizeToken, ...user } = req.user.dataValues;
  res.json({ user });
});

router.get("/posts", async (req: any, res: Response) => {
  try {
    res.json({ test: "ok" });
  } catch (e) {
    res.json({ massage: e });
  }
});

export default router;
