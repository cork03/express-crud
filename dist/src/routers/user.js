"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const category_1 = __importDefault(require("../models/category"));
const router = express_1.default.Router();
router.get("/", async (req, res) => {
    const { authorizeToken, ...user } = req.user.toJSON();
    res.status(200).json({ user });
});
router.get("/posts", async (req, res) => {
    try {
        const posts = await req.user.getPosts({
            include: [{ model: category_1.default }],
        });
        res.status(200).json({ posts });
    }
    catch (error) {
        res.json({ error });
    }
});
exports.default = router;
//# sourceMappingURL=user.js.map