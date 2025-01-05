const pool = require("../db/pool");
const bcrypt = require("bcryptjs");
async function getForm(req, res) {
  res.render("sign-up-form");
}

async function insertUser(req, res, next) {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    await pool.query("INSERT INTO users (username, password) VALUES ($1, $2)", [
      req.body.username,
      hashedPassword,
    ]);
    res.redirect("/");
  } catch (err) {
    return next(err);
  }
}

module.exports = {
  getForm,
  insertUser,
};
