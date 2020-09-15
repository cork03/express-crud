"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const passport_1 = __importDefault(require("passport"));
const router = express_1.default.Router();
router.post("/signup", (req, res) => {
    res.send("signup");
});
router.post("/login", passport_1.default.authenticate("local", function (req, res) {
    res.redirect("/users/" + req.user.username);
}));
exports.default = router;
//# sourceMappingURL=auth.js.map