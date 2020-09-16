import express from "express";
import Category from "../models/category";
const router = express.Router();

router.get("/", async function (req, res, next) {
  try {
    const categories = await Category.findAll();
    res.send({ categories });
    console.log("seucess");
  } catch (error) {
    console.log("error");
    return next(error);
  }
});

export default router;
