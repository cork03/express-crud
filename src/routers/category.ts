import express from "express";
import Category from "../models/category";

const router = express.Router();

router.get("/", async function (req, res) {
  try {
    const category = await Category.findAll();
    res.json(category);
  } catch (error) {
    res.json({ error });
  }
});

export default router;
