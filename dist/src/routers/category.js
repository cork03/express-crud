"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const category_1 = __importDefault(require("../models/category"));
const router = express_1.default.Router();
router.get("/", async function (req, res) {
    try {
        const category = await category_1.default.findAll();
        res.json(category);
    }
    catch (error) {
        res.json({ error });
    }
});
exports.default = router;
//# sourceMappingURL=category.js.map