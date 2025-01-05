/////// app.js
require("dotenv").config();
const path = require("node:path");

const express = require("express");
const session = require("express-session");
const passport = require("passport");
const signUpController = require("./routes/signUpRouter");
const authController = require("./routes/auth");

const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.user(express.json());
app.use(session({ secret: "cats", resave: false, saveUninitialized: false }));
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));
app.use("/", signUpController);
app.use("/", authController);

app.get("/", (req, res) => {
  res.render("index", { user: req.user });
});

app.listen(3000, () => console.log("app listening on port 3000!"));
