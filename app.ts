import express from "express";
import "./src/passport/passport";
import auth from "./src/routers/auth";
import category from "./src/routers/category";
import user from "./src/routers/user";
import posts from "./src/routers/posts";
import bodyParser from "body-parser";
import passport from "passport";

const app = express();
const port = 3000;

app.use(express.json());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

app.use("/auth", auth);

const jwtAuthenticated = [
  { path: "/user", router: user },
  { path: "/posts", router: posts },
  { path: "/category", router: category },
];

jwtAuthenticated.forEach((router) => {
  app.use(
    router.path,
    passport.authenticate("jwt", { session: false }, router.router)
  );
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
