const pool = require("../db/pool");

async function getForm(req, res) {
  res.render("sign-up-form");
}

async function insertUser(req, res, next) {
  try {
    await pool.query("INSERT INTO users (username, password) VALUES ($1, $2)", [
      req.body.username,
      req.body.password,
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
