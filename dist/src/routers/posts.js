"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const post_1 = __importDefault(require("../models/post"));
const router = express_1.default.Router();
router.get("/", async (req, res) => { });
router.get("/:id", (req, res) => {
    res.send("posts/id");
});
router.post("/", async (req, res) => {
    const { post: { categoryIds, ...postElement }, } = req.body;
    const userId = req.user.id;
    const postElemnts = { ...postElement, userId: userId };
    try {
        await post_1.default.signUpPost(postElemnts, categoryIds);
        res.json({});
    }
    catch (error) {
        res.json({ error });
    }
});
router.patch("/:id", (req, res) => {
    res.send("posts/id");
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