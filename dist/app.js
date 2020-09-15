"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("./src/routers/auth"));
const app = express_1.default();
const port = 3000;
app.get("/", (req, res) => {
    res.json({ message: "ok" });
});
app.use("/auth", auth_1.default);
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map