const express = require("express");
const router = express.Router();
const { getMenu } = require("../db/queries/menu_queries");

router.get("/", (req, res) => {
  const clientId = req.cookies.userId;
  getMenu()
    .then((response) => {
      res.render("menu", { dishes: response.rows, clientId: clientId });
    })
    .catch((err) => {
      res.status(500);
    });
});

module.exports = router;
