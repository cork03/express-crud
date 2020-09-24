import express from "express";
import passport from "passport";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("posts");
});

router.get("/:id", (req, res) => {
  res.send("posts/id");
});

router.post("/", (req, res) => {
  res.send("posts/id");
});

router.patch("/:id", (req, res) => {
  res.send("posts/id");
});

router.delete("/:id", (req, res) => {
  res.send("posts/id");
});

export default router;
