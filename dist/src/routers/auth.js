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
    const hashedPass = await bcrypt_1.hash(user.password);
    user.authorize_token = hashedPass;
    delete user.password;
    await user_1.default.create(user);
    res.json({ crate: "ok" });
});
router.post("/login", passport_1.default.authenticate("local", { session: false }), (req, res) => {
    res.json(req.user);
});
exports.default = router;
//# sourceMappingURL=auth.js.map