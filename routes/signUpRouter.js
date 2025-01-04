const express = require("express");
const router = express();
const pool = require("../db/pool");
router.use(express.urlencoded({ extended: true }));

const controller = require("../controllers/signUpController");

router.get("/sign-up", controller.getForm);
router.post("/sign-up", controller.insertUser);
module.exports = router;
