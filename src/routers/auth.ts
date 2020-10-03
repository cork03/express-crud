import express from "express";
import passport from "passport";
import { hash } from "../passport/bcrypt";
import User from "../models/user";
import { raw } from "body-parser";
import { RSA_NO_PADDING } from "constants";

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { user } = req.body;
  const registeredUser = await User.findOne({
    where: { loginId: user.loginId },
  });
  if (!user.password) {
    return res.status(400).json({ error: "パスワードが入力されていません" });
  }
  if (registeredUser) {
    return res.status(422).json({ error: "すでに登録済みのユーザーです" });
  }
  const hashedPass = await hash(user.password);
  user.authorize_token = hashedPass;
  delete user.password;
  await User.create(user);
  res.status(201).json({ massege: "ユーザーが作成されました。" });
});

router.post("/login", function (req, res, next) {
  console.log("post");
  passport.authenticate("local", { session: false }, (err, user, info) => {
    console.log("res");
    res.json({ ok: "ok" });
  });
});

export default router;
