"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const passport_1 = __importDefault(require("passport"));
const bcrypt_1 = require("../passport/bcrypt");
const user_1 = __importDefault(require("../models/user"));
const router = express_1.default.Router();
router.post("/signup", async (req, res) => {
    const { user } = req.body;
    const registeredUser = await user_1.default.findOne({
        where: { loginId: user.loginId },
    });
    if (!user.password) {
        return res.status(400).json({ error: "パスワードが入力されていません" });
    }
    if (registeredUser) {
        return res.status(422).json({ error: "すでに登録済みのユーザーです" });
    }
    const hashedPass = await bcrypt_1.hash(user.password);
    user.authorize_token = hashedPass;
    delete user.password;
    await user_1.default.create(user);
    res.status(201).json({ massege: "ユーザーが作成されました。" });
});
router.post("/login", function (req, res, next) {
    console.log("post");
    passport_1.default.authenticate("local", { session: false }, (err, user, info) => {
        console.log("res");
        res.json({ ok: "ok" });
    });
});
exports.default = router;
//# sourceMappingURL=auth.js.map