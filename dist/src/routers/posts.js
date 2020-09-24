"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get("/", (req, res) => {
    res.send("posts");
});
router.get("/:id", (req, res) => {
    res.send("posts/id");
});
router.post("/", (req, res) => {
    res.send("posts/id");
});
router.patch("/:id", (req, res) => {
    res.send("posts/id");
});
router.delete("/:id", (req, res) => {
    res.send("posts/id");
});
exports.default = router;
//# sourceMappingURL=posts.js.map