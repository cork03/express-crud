import express from "express";
import Category from "../models/category";
import User from "../models/user";
const router = express.Router();

router.get("/", async function (req, res, next) {
  try {
    const category = await Category.findAll();
    res.json(category);
  } catch (error) {
    return next(error);
  }
});

export default router;
