const express = require('express');
const router  = express.Router();
const { getOrders } = require("../db/queries/orders");

router.get("/", (req, res) => {
  getOrders()
    .then((response) => {
      res.render("orders", {orders : response.rows});
    })
    .catch(err => {
      res.status(500)
    });
});

module.exports = router;
