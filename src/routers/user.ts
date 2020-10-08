import express from "express";
import passport from "passport";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ user: req.user });
});

router.get("/posts", (req, res) => {
  res.send("user/posts");
});

export default router;
