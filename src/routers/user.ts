import express, { Request, Response } from "express";
import passport, { use } from "passport";

const router = express.Router();

router.get("/", (req: any, res: Response) => {
  const { authorizeToken, ...user } = req.user.dataValues;
  res.json({ user });
});

router.get("/posts", (req: any, res: Response) => {
  const query = req.query;
  res.json({ user: query });
});

export default router;
