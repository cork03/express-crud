import express from "express";
import passport from "passport";
import { hash } from "../passport/bcrypt";
import User from "../models/user";
import jwt from "jsonwebtoken";

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
  user.authorizeToken = hashedPass;
  delete user.password;
  await User.create(user);
  res.status(201).json({ massege: "ユーザーが作成されました。" });
});

router.post("/login", function (req, res, next) {
  passport.authenticate("local", { session: false }, (err, user, info) => {
    if (err || !user) {
      return res.status(401).json({ error: "認証に失敗しました" });
    }
    const payload = { id: user.id, loginId: user.loginId };
    const jwtToken = jwt.sign(payload, process.env.SECRET_KEY!);
    user.authorizeToken = "[secret]";
    res.json({ user, token: jwtToken });
  })(req, res, next);
});

export default router;
