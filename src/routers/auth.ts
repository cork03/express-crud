import express from "express";
import passport from "passport";
import { hash } from "../passport/bcrypt";
import User from "../models/user";

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { user } = req.body;
  const hashedPass = await hash(user.password);
  user.authorize_token = hashedPass;
  delete user.password;
  await User.create(user);
  res.json({ crate: "ok" });
});

router.post(
  "/login",
  passport.authenticate("local", { session: false }),
  (req, res) => {
    res.json(req.user);
  }
);

export default router;
