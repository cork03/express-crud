import express from "express";
import auth from "./src/routers/auth";
import category from "./src/routers/category";
import user from "./src/routers/user";
import posts from "./src/routers/posts";

const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

app.use("/auth", auth);
app.use("/category", category);
app.use("/user", user);
app.use("/posts", posts);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
