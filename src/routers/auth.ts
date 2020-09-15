import express from "express";
import passport from "passport";

const router = express.Router();

router.post("/signup", (req, res) => {
  res.send("signup");
});

router.post(
  "/login",
  passport.authenticate("local", function (req, res) {
    res.redirect("/users/" + req.user.username);
  })
);
export default router;
