import express from "express";
import auth from "./src/routers/auth";
import Category from "./src/routers/category";

const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

app.use("/auth", auth);
app.use("/category", Category);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
