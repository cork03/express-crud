"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get("/", (req, res) => {
    const user = req.user;
    res.json({ user });
});
router.get("/posts", (req, res) => {
    res.send("user/posts");
});
exports.default = router;
//# sourceMappingURL=user.js.map