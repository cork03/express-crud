"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get("/", async (req, res) => {
    const { authorizeToken, ...user } = req.user.dataValues;
    res.json({ user });
});
router.get("/posts", async (req, res) => {
    try {
        res.json({ test: "ok" });
    }
    catch (e) {
        res.json({ massage: e });
    }
});
exports.default = router;
//# sourceMappingURL=user.js.map