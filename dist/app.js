"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("./src/passport/passport");
const auth_1 = __importDefault(require("./src/routers/auth"));
const category_1 = __importDefault(require("./src/routers/category"));
const user_1 = __importDefault(require("./src/routers/user"));
const posts_1 = __importDefault(require("./src/routers/posts"));
const body_parser_1 = __importDefault(require("body-parser"));
const passport_1 = __importDefault(require("passport"));
const app = express_1.default();
const port = 3000;
app.use(express_1.default.json());
app.use(body_parser_1.default.json());
app.get("/", (req, res) => {
    res.json({ message: "ok" });
});
app.use("/auth", auth_1.default);
const jwtAuthenticated = [
    { path: "/user", router: user_1.default },
    { path: "/posts", router: posts_1.default },
    { path: "/category", router: category_1.default },
];
jwtAuthenticated.forEach((router) => {
    app.use(router.path, passport_1.default.authenticate("jwt", { session: false }), router.router);
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map