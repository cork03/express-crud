"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const post_1 = __importDefault(require("../models/post"));
const category_1 = __importDefault(require("../models/category"));
const router = express_1.default.Router();
router.get("/", async (req, res) => {
    try {
        const posts = await post_1.default.findAll({
            include: { model: category_1.default, as: "categories" },
        });
        res.status(200).json({ posts });
    }
    catch (error) {
        res.json({ error });
    }
});
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const post = await post_1.default.findByPk(id, {
            include: { model: category_1.default, as: "categories" },
        });
        res.status(200).json({ post });
    }
    catch (error) {
        res.json({ error });
    }
});
router.post("/", async (req, res) => {
    const { post: { categoryIds, ...postElement }, } = req.body;
    const userId = req.user.id;
    const postElemnts = { ...postElement, userId: userId };
    try {
        await post_1.default.add(postElemnts, categoryIds);
        res.status(201).json({});
    }
    catch (error) {
        res.json({ error });
    }
});
router.patch("/:id", async (req, res) => {
    const { id } = req.params;
    const { post: { categoryIds, ...updateElement }, } = req.body;
    try {
        await post_1.default.updateWithCategory(updateElement, id, categoryIds);
        res.status(200).json({});
    }
    catch (error) {
        res.json({ error });
    }
});
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const post = await post_1.default.findByPk(id);
        await post.destroy();
        res.status(200).json({ post });
    }
    catch (error) {
        res.json({ error });
    }
});
exports.default = router;
//# sourceMappingURL=posts.js.map