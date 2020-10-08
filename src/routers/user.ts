import express, { Request, Response } from "express";
import passport from "passport";

const router = express.Router();

router.get("/", (req: any, res: Response) => {
  const { authorizeToken, ...user } = req.user.dataValues;
  res.json({ user });
});

router.get("/posts", (req, res) => {
  res.send("user/posts");
});

export default router;
