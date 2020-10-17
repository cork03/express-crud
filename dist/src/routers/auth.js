"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const passport_1 = __importDefault(require("passport"));
const bcrypt_1 = require("../passport/bcrypt");
const user_1 = __importDefault(require("../models/user"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const router = express_1.default.Router();
router.post("/signup", async (req, res) => {
    const { user } = req.body;
    try {
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
        user.authorizeToken = hashedPass;
        delete user.password;
        await user_1.default.create(user);
        res.status(201).json({ massege: "ユーザーが作成されました。" });
    }
    catch (error) {
        res.json({ error });
    }
});
router.post("/login", function (req, res, next) {
    passport_1.default.authenticate("local", { session: false }, (err, user, info) => {
        if (err || !user) {
            return res.status(401).json({ error: "認証に失敗しました" });
        }
        const payload = { id: user.id, loginId: user.loginId };
        const jwtToken = jsonwebtoken_1.default.sign(payload, process.env.SECRET_KEY);
        user.authorizeToken = "[secret]";
        res.status(200).json({ user, token: jwtToken });
    })(req, res, next);
});
exports.default = router;
//# sourceMappingURL=auth.js.map