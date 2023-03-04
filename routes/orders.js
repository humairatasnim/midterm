const express = require('express');
const router  = express.Router();
const { getOrders, approveOrder, rejectOrder, completeOrder } = require("../db/queries/orders");

router.get("/", (req, res) => {
  getOrders()
    .then((response) => {
      res.render("orders", {orders : response.rows});
    })
    .catch(err => {
      res.status(500)
    });
});

router.post("/", function(req, res) {
  if (req.body.est_time) {
    approveOrder(req.body.order_id, req.body.est_time)
    .then((response) => {
      getOrders()
      .then((response) => {
        res.render("orders", {orders : response.rows});
      })
      .catch(err => {
        res.status(500)
      });
    })
    .catch(err => {
      res.status(500)
    });
  } else if (req.body.reject) {
    rejectOrder(req.body.order_id)
    .then((response) => {
      getOrders()
      .then((response) => {
        res.render("orders", {orders : response.rows});
      })
      .catch(err => {
        res.status(500)
      });
    })
    .catch(err => {
      res.status(500)
    });
  } else if (req.body.complete) {
    completeOrder(req.body.order_id)
    .then((response) => {
      getOrders()
      .then((response) => {
        res.render("orders", {orders : response.rows});
      })
      .catch(err => {
        res.status(500)
      });
    })
    .catch(err => {
      res.status(500)
    });
  }
});

module.exports = router;
