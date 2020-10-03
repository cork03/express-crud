"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("./src/routers/auth"));
const category_1 = __importDefault(require("./src/routers/category"));
const user_1 = __importDefault(require("./src/routers/user"));
const posts_1 = __importDefault(require("./src/routers/posts"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = express_1.default();
const port = 3000;
app.use(express_1.default.json());
app.use(body_parser_1.default.json());
app.get("/", (req, res) => {
    res.json({ message: "ok" });
});
app.use("/auth", auth_1.default);
app.use("/category", category_1.default);
app.use("/user", user_1.default);
app.use("/posts", posts_1.default);
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
const res = {
    use: {
        loginId: "hoge@example.com",
        name: "hoge",
        iconUrl: "http://localhost",
        password: "password",
    },
};
//# sourceMappingURL=app.js.map