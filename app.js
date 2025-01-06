require("dotenv").config();
const express = require("express");
const app = express();
const passport = require("passport");
const path = require("node:path");

const signUpController = require("./routes/signUpRouter");
const authController = require("./routes/auth");

const session = require("./config/sessionConfig");

session(app);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", signUpController);
app.use("/", authController);

app.get("/", (req, res) => {
  // if (req.session.viewCount) {
  //   req.session.viewCount = req.session.viewCount + 1;
  // } else {
  //   req.session.viewCount = 1;
  // }
  // console.log(req.session);

  res.render("index", { user: req.user });
});

app.listen(3000, () => console.log("app listening on port 3000!"));
